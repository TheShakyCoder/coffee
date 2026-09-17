<?php

namespace App\Http\Controllers;

use App\Support\Catalog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class SubscriptionController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        return Inertia::render('Subscriptions/Index', [
            'plans' => Catalog::plans(),
            'subscribed' => (bool) $user?->subscribed('default'),
            'currentPlan' => $this->currentPlanId($user),
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
        ]);
    }

    /**
     * Start a Stripe Checkout session (subscription mode) for the chosen plan.
     */
    public function checkout(Request $request)
    {
        $data = $request->validate(['plan' => 'required|string']);

        $plan = Catalog::findPlan($data['plan']);

        if (! $plan || empty($plan['price_id'])) {
            return back()->with('error', 'Sorry, that plan isn’t available just yet.');
        }

        $user = $request->user();

        if ($user->subscribed('default')) {
            return redirect()->route('account.billing')
                ->with('error', 'You already have an active subscription — manage it from your billing page.');
        }

        try {
            return $user->newSubscription('default', $plan['price_id'])->checkout([
                'success_url' => route('checkout.success').'?session_id={CHECKOUT_SESSION_ID}',
                'cancel_url' => route('subscriptions.index'),
            ]);
        } catch (\Throwable $e) {
            Log::error('Stripe subscription checkout failed', ['error' => $e->getMessage()]);

            return back()->with('error', 'We couldn’t start checkout right now. Please try again later.');
        }
    }

    /** Map the active subscription's Stripe price back to a catalog plan id. */
    private function currentPlanId($user): ?string
    {
        if (! $user || ! $user->subscribed('default')) {
            return null;
        }

        $priceId = $user->subscription('default')->stripe_price;

        foreach (config('products.plans', []) as $plan) {
            if ($plan['price_id'] === $priceId) {
                return $plan['id'];
            }
        }

        return null;
    }
}
