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
            [
                'id' => 2,
                'name' => 'andre2',
                'age' => 25,
                'job' => 'box2'
            ],
            [
                'id' => 3,
                'name' => 'andre3',
                'age' => 31,
                'job' => 'box3'
            ],
            [
                'id' => 4,
                'name' => 'andre4',
                'age' => 41,
                'job' => 'box4'
            ],
            [
                'id' => 5,
                'name' => 'andre5',
                'age' => 51,
                'job' => 'box5'
            ]
        ];
       return  $persons ;
    }
}
