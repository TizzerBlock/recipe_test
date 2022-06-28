<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PersonController extends Controller
{
    public function __invoke()
    {
        $persons = [
          [
              'id' => 1,
              'name' => 'andre',
              'age' => 21,
              'job' => 'box'
          ],
        ];
       return  $persons ;
    }
}
