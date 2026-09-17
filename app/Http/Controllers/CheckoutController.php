<?php

namespace App\Http\Controllers;

use App\Support\Catalog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Laravel\Cashier\Checkout;

class CheckoutController extends Controller
{
    /**
     * Start a Stripe Checkout session for a one-off coffee purchase.
     * Works for both guests and authenticated customers.
     */
    public function product(Request $request)
    {
        $data = $request->validate([
            'product' => 'required|string',
            'quantity' => 'nullable|integer|min:1|max:20',
        ]);

        $product = Catalog::findProduct($data['product']);

        if (! $product || empty($product['price_id'])) {
            return back()->with('error', 'Sorry, that product isn’t available to buy just yet.');
        }

        $quantity = $data['quantity'] ?? 1;

        $options = [
            'success_url' => route('checkout.success').'?session_id={CHECKOUT_SESSION_ID}',
            'cancel_url' => route('shop.index'),
        ];

        try {
            if ($user = $request->user()) {
                return $user->checkout([$product['price_id'] => $quantity], $options);
            }

            return Checkout::guest()->create([$product['price_id'] => $quantity], $options);
        } catch (\Throwable $e) {
            Log::error('Stripe checkout failed', ['error' => $e->getMessage()]);

            return back()->with('error', 'We couldn’t start checkout right now. Please try again later.');
        }
    }

    /**
     * Landing page after a successful Checkout redirect.
     */
    public function success(Request $request)
    {
        return Inertia::render('Checkout/Success', [
            'sessionId' => $request->query('session_id'),
        ]);
    }
}
