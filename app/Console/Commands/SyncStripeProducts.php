<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Laravel\Cashier\Cashier;

class SyncStripeProducts extends Command
{
    protected $signature = 'coffee:sync-stripe {--force : Create new prices even if a matching one already exists}';

    protected $description = 'Create the coffee catalog (config/products.php) as Products and Prices in Stripe and print the env price IDs.';

    public function handle(): int
    {
        if (! config('cashier.secret')) {
            $this->error('STRIPE_SECRET is not set. Add your Stripe secret (or restricted) key to .env first.');

            return self::FAILURE;
        }

        $stripe = Cashier::stripe();
        $currency = config('products.currency', 'gbp');
        $envLines = [];

        $this->info('Syncing coffee products…');
        foreach (config('products.coffee') as $product) {
            $priceId = $this->upsertPrice($stripe, [
                'catalog_id' => $product['id'],
                'name' => $product['name'],
                'description' => $product['description'],
                'amount' => $product['amount'],
                'currency' => $currency,
                'recurring' => null,
            ]);

            $envLines['STRIPE_PRICE_'.strtoupper($product['id'])] = $priceId;
            $this->line("  ✓ {$product['name']} → {$priceId}");
        }

        $this->info('Syncing subscription plans…');
        foreach (config('products.plans') as $plan) {
            $priceId = $this->upsertPrice($stripe, [
                'catalog_id' => 'sub_'.$plan['id'],
                'name' => "Coffee Subscription — {$plan['name']}",
                'description' => $plan['description'],
                'amount' => $plan['amount'],
                'currency' => $currency,
                'recurring' => ['interval' => $plan['interval']],
            ]);

            $envLines['STRIPE_PRICE_SUB_'.strtoupper($plan['id'])] = $priceId;
            $this->line("  ✓ {$plan['name']} → {$priceId}");
        }

        $this->newLine();
        $this->info('Add these to your .env:');
        $this->newLine();
        foreach ($envLines as $key => $value) {
            $this->line("{$key}={$value}");
        }

        return self::SUCCESS;
    }

    /**
     * Find an existing Price for the given catalog item (by product metadata)
     * or create the Product + Price. Returns the Stripe Price ID.
     */
    private function upsertPrice($stripe, array $data): string
    {
        $product = $this->findProduct($stripe, $data['catalog_id']);

        if (! $product) {
            $product = $stripe->products->create([
                'name' => $data['name'],
                'description' => $data['description'],
                'metadata' => ['catalog_id' => $data['catalog_id']],
            ]);
        }

        // Reuse an active price with the same amount/interval unless --force.
        if (! $this->option('force')) {
            foreach ($stripe->prices->all(['product' => $product->id, 'active' => true, 'limit' => 100])->data as $price) {
                $sameAmount = $price->unit_amount === $data['amount'] && $price->currency === $data['currency'];
                $sameInterval = $data['recurring']
                    ? ($price->recurring->interval ?? null) === $data['recurring']['interval']
                    : $price->recurring === null;

                if ($sameAmount && $sameInterval) {
                    return $price->id;
                }
            }
        }

        $payload = [
            'product' => $product->id,
            'unit_amount' => $data['amount'],
            'currency' => $data['currency'],
            'metadata' => ['catalog_id' => $data['catalog_id']],
        ];

        if ($data['recurring']) {
            $payload['recurring'] = $data['recurring'];
        }

        return $stripe->prices->create($payload)->id;
    }

    private function findProduct($stripe, string $catalogId)
    {
        try {
            $result = $stripe->products->search([
                'query' => "metadata['catalog_id']:'{$catalogId}'",
                'limit' => 1,
            ]);

            return $result->data[0] ?? null;
        } catch (\Throwable $e) {
            // Search can be unavailable on brand-new accounts; fall back to none.
            return null;
        }
    }
}
