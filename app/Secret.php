<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Secret extends Model
{
    protected $guarded = ['id'];
    static $rules = [
    'count' => 'integer'
    ];
}
