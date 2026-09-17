<?php

namespace App\Http\Controllers;

use App\Support\Catalog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BillingController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        $subscription = $user->subscription('default');
        $plan = null;

        if ($subscription) {
            foreach (config('products.plans', []) as $p) {
                if ($p['price_id'] === $subscription->stripe_price) {
                    $plan = [
                        'name' => $p['name'],
                        'price' => Catalog::money($p['amount']),
                        'interval' => $p['interval'],
                    ];
                    break;
                }
            }
        }

        return Inertia::render('Account/Billing', [
            'hasStripe' => $user->hasStripeId(),
            'subscription' => $subscription ? [
                'active' => $user->subscribed('default'),
                'onGracePeriod' => $subscription->onGracePeriod(),
                'canceled' => $subscription->canceled(),
                'endsAt' => optional($subscription->ends_at)?->toFormattedDayDateString(),
                'plan' => $plan,
            ] : null,
        ]);
    }

    /**
     * Redirect to Stripe's hosted Customer Portal for self-service billing.
     */
    public function portal(Request $request)
    {
        $user = $request->user();

        if (! $user->hasStripeId()) {
            return redirect()->route('account.billing')
                ->with('error', 'You don’t have any billing details yet.');
        }

        return $user->redirectToBillingPortal(route('account.billing'));
    }
}
