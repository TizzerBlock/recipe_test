<?php

namespace App\Http\Controllers\My_user;

use App\Http\Controllers\Controller;
use App\Http\Requests\My_User\UpdateUserRequest;
use App\Models\My_User;


class UpdateUserController extends Controller
{
  public function __invoke(UpdateUserRequest $request, My_User $user)
  {
    $data = $request->validated();
    $user->update($data);
    return $user;
  }
}
