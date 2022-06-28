<?php

namespace App\Http\Controllers\My_user;

use App\Http\Controllers\Controller;
use App\Models\My_User;


class DeleteUserController extends Controller
{
  public function __invoke(My_User $user)
  {
    $user->delete();
    return response([]);
  }
}
