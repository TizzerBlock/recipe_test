<?php

namespace App\Http\Controllers\Recipe;

use App\Http\Controllers\Controller;
use App\Http\Requests\Recipe\RecipeStoreRequest;
use App\Http\Requests\Recipe\UpdateRecipeRequest;
use App\Models\Recipe;


class DeleteRecipeController extends Controller
{
    public function __invoke(Recipe $recipe)
    {
        $recipe->delete();
        return response([]);
    }
}
