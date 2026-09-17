<?php

namespace App\Http\Controllers;

use App\Support\Catalog;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class ShopController extends Controller
{
    public function index()
    {
        return Inertia::render('Shop/Index', [
            'products' => Catalog::coffee(),
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
        ]);
    }
}
