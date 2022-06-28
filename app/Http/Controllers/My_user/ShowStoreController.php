<?php

namespace App\Http\Controllers\My_user;

use App\Http\Controllers\Controller;
use App\Models\My_User;


class ShowStoreController extends Controller
{
  public function __invoke(My_User $user)
  {
    return $user;
  }
}
