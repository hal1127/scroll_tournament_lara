<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <title></title>
  <meta name="description" content="">

  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="{{ mix('/css/app.css') }}">

</head>
<body>
  <div id="app">
    <router-view/>
  </div>
  <script src=" {{ mix('js/app.js') }} "></script>
</body>
</html>
