<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
  protected $guarded = ['id'];
  static $rules = [
    'name' => 'required|max:10',
    'score' => 'integer|min:0'
  ];

  static $messages = [
    'name.required' => '名前を入力してください',
    'score.integer' => 'スコアを入力してください',
    'score.min' => 'スコアは0以上で入力してください',
  ];
}
