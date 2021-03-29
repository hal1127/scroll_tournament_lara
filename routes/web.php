<?php

// ルーティングはVue Routerに任せる
// すべてのURLをindex.blade.phpにアクセスさせる
Route::get('/{site}', function () {
  return view('index');
  // ''(何もない)、'rank'、'about'のいずれか
})->where('site', '|rank|about');

