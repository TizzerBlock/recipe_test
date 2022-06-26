<?php

namespace App\Http\Requests\Recipe;

use Illuminate\Foundation\Http\FormRequest;

class RecipeStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            'email' => 'required|string',
            'recipe_name' => 'required|string',
            'recipe_position' => 'required|integer',
            'description' => 'required|string',
            'message' => 'required'
        ];
    }
}
