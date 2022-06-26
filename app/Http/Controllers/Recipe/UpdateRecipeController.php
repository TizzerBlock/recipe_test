<?php

namespace App\Http\Controllers\Recipe;

use App\Http\Controllers\Controller;
use App\Http\Requests\Recipe\RecipeStoreRequest;
use App\Http\Requests\Recipe\UpdateRecipeRequest;
use App\Models\Recipe;


class UpdateRecipeController extends Controller
{
    public function __invoke(UpdateRecipeRequest $request, Recipe $recipe)
    {
        $data = $request->validated();
        $recipe->update($data);
        return $recipe;
    }
}
