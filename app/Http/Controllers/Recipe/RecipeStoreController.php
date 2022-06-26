<?php

namespace App\Http\Controllers\Recipe;

use App\Http\Controllers\Controller;
use App\Http\Requests\Recipe\RecipeStoreRequest;
use App\Models\Recipe;


class RecipeStoreController extends Controller
{
    public function __invoke(RecipeStoreRequest $request)
    {
        $data = $request->validated();
        $recip = Recipe::create($data);
        return $recip;
    }
}
