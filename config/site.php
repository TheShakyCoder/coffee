<?php

return [
    'fullname' => env('SITE_FULLNAME', 'Acme Coffee Roasters'),
    'address' => env('SITE_ADDRESS', 'Unit 5, The Roastery, Mill Lane, Anytown, AC1 2DE'),
    'telephone' => env('SITE_TELEPHONE', '01234 567 890'),
    'email' => env('SITE_EMAIL', 'hello@acmecoffee.example'),
    'established' => env('SITE_ESTABLISHED', '2015'),
    'opening_times' => "Monday - Friday: 8:00am - 5:00pm<br>Saturday: 9:00am - 4:00pm<br>Sunday: Closed",

    'social' => [
        'instagram' => 'https://www.instagram.com',
        'facebook' => 'https://www.facebook.com',
        'tiktok' => 'https://www.tiktok.com',
    ],

    'nav_links' => [
        ['label' => 'Home', 'href' => '/'],
        ['label' => 'Our Coffee', 'href' => '#coffee'],
        ['label' => 'Subscriptions', 'href' => '#subscriptions'],
        ['label' => 'Workshops', 'href' => '#workshops'],
        ['label' => 'News', 'href' => '/news-updates'],
        ['label' => 'Contact', 'href' => '#contact'],
    ],

    'robots_allowed' => env('ROBOTS_ALLOWED', false),
];