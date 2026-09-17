<?php

namespace App\Support;

/**
 * Thin accessor over config/products.php — formats the catalog for the
 * frontend (without leaking Stripe price IDs) and resolves catalog items
 * back to their Stripe price for checkout.
 */
class Catalog
{
    public static function currency(): string
    {
        return strtolower((string) config('products.currency', 'gbp'));
    }

    /** Format an amount in pence as a localized currency string. */
    public static function money(int $pence): string
    {
        $amount = $pence / 100;

        if (class_exists(\NumberFormatter::class)) {
            $formatter = new \NumberFormatter(
                (string) config('cashier.currency_locale', 'en_GB'),
                \NumberFormatter::CURRENCY
            );

            return $formatter->formatCurrency($amount, strtoupper(self::currency()));
        }

        return '£'.number_format($amount, 2);
    }

    /** All one-off coffee products, presented for the frontend. */
    public static function coffee(): array
    {
        return array_map(self::presentProduct(...), config('products.coffee', []));
    }

    /** All subscription plans, presented for the frontend. */
    public static function plans(): array
    {
        return array_map(self::presentPlan(...), config('products.plans', []));
    }

    /** Raw coffee product config (incl. price_id) for server-side checkout. */
    public static function findProduct(string $id): ?array
    {
        return collect(config('products.coffee', []))->firstWhere('id', $id);
    }

    /** Raw plan config (incl. price_id) for server-side checkout. */
    public static function findPlan(string $id): ?array
    {
        return collect(config('products.plans', []))->firstWhere('id', $id);
    }

    private static function presentProduct(array $p): array
    {
        return [
            'id' => $p['id'],
            'name' => $p['name'],
            'origin' => $p['origin'],
            'roast' => $p['roast'],
            'tasting' => $p['tasting'],
            'weight' => $p['weight'],
            'description' => $p['description'],
            'price' => self::money($p['amount']),
            'available' => ! empty($p['price_id']),
        ];
    }

    private static function presentPlan(array $p): array
    {
        return [
            'id' => $p['id'],
            'name' => $p['name'],
            'bags' => $p['bags'],
            'price' => self::money($p['amount']),
            'interval' => $p['interval'],
            'description' => $p['description'],
            'features' => $p['features'],
            'featured' => $p['featured'] ?? false,
            'available' => ! empty($p['price_id']),
        ];
    }
}
