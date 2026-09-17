<?php

/*
|--------------------------------------------------------------------------
| Coffee catalog
|--------------------------------------------------------------------------
|
| A small, hand-curated catalog of one-off coffee products and recurring
| subscription plans, modelled on a typical speciality roaster. Each entry
| maps to a Stripe Price via its `price_id` (resolved from .env).
|
| Prices in `amount` are in pence and are used for display only — the
| amount actually charged is whatever the linked Stripe Price says. Run
| `php artisan coffee:sync-stripe` to create the matching Products/Prices
| in Stripe and print the price IDs to drop into your .env.
|
*/

return [

    'currency' => env('CASHIER_CURRENCY', 'gbp'),

    // One-off purchases (Stripe Checkout in `payment` mode).
    'coffee' => [
        [
            'id' => 'brazil',
            'name' => 'Brazil — Fazenda Santa Rosa',
            'origin' => 'Brazil',
            'roast' => 'Espresso',
            'tasting' => 'Milk chocolate, hazelnut, caramel',
            'amount' => 950,
            'weight' => '250g',
            'description' => 'A smooth, comforting crowd-pleaser — low acidity with a rich, nutty sweetness that shines through milk.',
            'price_id' => env('STRIPE_PRICE_BRAZIL'),
        ],
        [
            'id' => 'colombia',
            'name' => 'Colombia — Huila Supremo',
            'origin' => 'Colombia',
            'roast' => 'Filter',
            'tasting' => 'Red apple, brown sugar, citrus',
            'amount' => 1050,
            'weight' => '250g',
            'description' => 'Clean and balanced with a juicy sweetness — a versatile all-rounder for filter and espresso alike.',
            'price_id' => env('STRIPE_PRICE_COLOMBIA'),
        ],
        [
            'id' => 'ethiopia',
            'name' => 'Ethiopia — Yirgacheffe',
            'origin' => 'Ethiopia',
            'roast' => 'Filter',
            'tasting' => 'Blueberry, jasmine, bergamot',
            'amount' => 1200,
            'weight' => '250g',
            'description' => 'Bright, floral and complex — a natural-process lot bursting with berry fruit. Best enjoyed as pour-over.',
            'price_id' => env('STRIPE_PRICE_ETHIOPIA'),
        ],
        [
            'id' => 'espresso',
            'name' => 'House Espresso Blend',
            'origin' => 'Blend',
            'roast' => 'Espresso',
            'tasting' => 'Dark chocolate, toffee, baked plum',
            'amount' => 1000,
            'weight' => '250g',
            'description' => 'Our signature blend — rich, full-bodied and forgiving, with a thick golden crema every time.',
            'price_id' => env('STRIPE_PRICE_ESPRESSO'),
        ],
        [
            'id' => 'decaf',
            'name' => 'Decaf Colombia (Sugarcane)',
            'origin' => 'Colombia',
            'roast' => 'Filter / Espresso',
            'tasting' => 'Cocoa, almond, soft red fruit',
            'amount' => 1100,
            'weight' => '250g',
            'description' => 'Naturally decaffeinated with the sugarcane (EA) process — all the flavour, none of the buzz.',
            'price_id' => env('STRIPE_PRICE_DECAF'),
        ],
        [
            'id' => 'giftbox',
            'name' => 'Taster Gift Box (3 × 250g)',
            'origin' => 'Selection',
            'roast' => 'Mixed',
            'tasting' => 'A guided tour of our range',
            'amount' => 2400,
            'weight' => '3 × 250g',
            'description' => 'Three of our favourite coffees in one box — the perfect introduction or gift for any coffee lover.',
            'price_id' => env('STRIPE_PRICE_GIFTBOX'),
        ],
    ],

    // Recurring subscriptions (Stripe Checkout in `subscription` mode).
    // `name` doubles as the Cashier subscription "type" suffix is fixed to
    // "default" in the controller; these are the selectable plans.
    'plans' => [
        [
            'id' => 'explorer',
            'name' => 'Explorer',
            'bags' => 1,
            'amount' => 1000,
            'interval' => 'month',
            'description' => 'One 250g bag, freshly roasted and delivered every month. Perfect for one or two cups a day.',
            'features' => ['1 × 250g bag / month', 'Free UK delivery', 'Pause or cancel anytime'],
            'price_id' => env('STRIPE_PRICE_SUB_EXPLORER'),
            'featured' => false,
        ],
        [
            'id' => 'enthusiast',
            'name' => 'Enthusiast',
            'bags' => 2,
            'amount' => 1800,
            'interval' => 'month',
            'description' => 'Two 250g bags a month, with the option to mix origins. Our most popular plan.',
            'features' => ['2 × 250g bags / month', 'Free UK delivery', 'Swap beans each delivery', 'Pause or cancel anytime'],
            'price_id' => env('STRIPE_PRICE_SUB_ENTHUSIAST'),
            'featured' => true,
        ],
        [
            'id' => 'connoisseur',
            'name' => 'Connoisseur',
            'bags' => 4,
            'amount' => 3400,
            'interval' => 'month',
            'description' => 'Four 250g bags a month for households that get through plenty — or who love variety.',
            'features' => ['4 × 250g bags / month', 'Free UK delivery', 'Early access to new coffees', 'Pause or cancel anytime'],
            'price_id' => env('STRIPE_PRICE_SUB_CONNOISSEUR'),
            'featured' => false,
        ],
    ],

];
