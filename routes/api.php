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
Route::get('/{person}', 'ShowController');
Route::patch('/{person}', 'UpdateController');
Route::delete('/{person}', 'DeleteController');
});
Route::group(['namespace' => 'Recipe', 'prefix' => 'recipe'], function () {
    Route::post('/', 'RecipeStoreController');
    Route::get('/', 'IndexStoreController');
    Route::get('/{recipe}', 'ShowStoreController');
    Route::patch('/{recipe}', 'UpdateRecipeController');
    Route::delete('/{recipe}', 'DeleteRecipeController');
});
Route::group(['namespace' => 'My_user', 'prefix' => 'user'], function () {
  Route::post('/', 'UserStoreController');
  Route::get('/', 'IndexStoreController');
  Route::get('/{user}', 'ShowStoreController');
  Route::patch('/{user}', 'UpdateUserController');
  Route::delete('/{user}', 'DeleteUserController');
});

