<?php

namespace App\Http\Controllers\My_user;

use App\Http\Controllers\Controller;
use App\Http\Requests\My_User\UserStoreRequest;
use App\Models\My_User;


class UserStoreController extends Controller
{
  public function __invoke(UserStoreRequest $request)
  {
    $data = $request->validated();
    $user = My_User::create($data);
    return $user;
  }
}
