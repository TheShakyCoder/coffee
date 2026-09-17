<?php

use App\Http\Middleware\HandleInertiaRequests;
use App\Http\Middleware\LogPageView;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets;
use Illuminate\Http\Request;
use Sentry\Laravel\Integration;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->web(append: [
            HandleInertiaRequests::class,
            AddLinkHeadersForPreloadedAssets::class,
            LogPageView::class,
        ]);

        // Stripe posts to the Cashier webhook without a CSRF token.
        $middleware->validateCsrfTokens(except: [
            'stripe/*',
        ]);

        // Trust Coolify's reverse proxy so Laravel honors
        // X-Forwarded-Proto / -Host / -Port and generates https://
        // URLs when the end user is on HTTPS. The `at` value comes
        // from the TRUSTED_PROXIES env var set in Coolify ("*").
        $middleware->trustProxies(
            at: env('TRUSTED_PROXIES'),
            headers: Request::HEADER_X_FORWARDED_FOR
                | Request::HEADER_X_FORWARDED_HOST
                | Request::HEADER_X_FORWARDED_PORT
                | Request::HEADER_X_FORWARDED_PROTO
                | Request::HEADER_X_FORWARDED_AWS_ELB,
        );
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        Integration::handles($exceptions);
    })->create();
