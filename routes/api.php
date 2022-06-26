<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group(['namespace' => 'Person', 'prefix' => 'people'], function () {
Route::post('/', 'StoreController');
Route::get('/', 'IndexController');
Route::patch('/{person}', 'UpdateController');
Route::delete('/{person}', 'DeleteController');
});
Route::group(['namespace' => 'Recipe', 'prefix' => 'recipe'], function () {
    Route::post('/', 'RecipeStoreController');
    Route::get('/', 'IndexStoreController');
    Route::patch('/{recipe}', 'UpdateRecipeController');
    Route::delete('/{recipe}', 'DeleteRecipeController');
});