<?php

namespace App\Http\Controllers\My_user;

use App\Http\Controllers\Controller;
use App\Models\My_User;


class IndexStoreController extends Controller
{
  public function __invoke()
  {
    $user = My_User::all();
    return $user;
  }
}
