<?php

namespace App\Http\Controllers\Recipe;

use App\Http\Controllers\Controller;
use App\Http\Requests\Recipe\RecipeStoreRequest;
use App\Models\Recipe;


class IndexStoreController extends Controller
{
    public function __invoke()
    {
        $recip = Recipe::all();
        return $recip;
    }
}
