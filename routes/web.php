<?php

// ルーティングはVue Routerに任せる
// すべてのURLをindex.blade.phpにアクセスさせる
Route::get('/{site}', function () {
  return view('index');
  // ''(何もない)、'rank'、'about'のいずれか
})->where('site', '|ranking|about|help|secrets-d2s9qmtczg|secrets-f2n5gufpe7|secrets-zwffnd9eua');
