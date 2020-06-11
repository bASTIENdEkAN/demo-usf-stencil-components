<!doctype html>
<html lang="">
    <head>
        <meta charset="utf-8">

        {{-- @include('head',['title'=>'title', 'description'=>'description', 'image'=>'head__og-image.jpg', 'favicon'=>'head__favicon.png']) --}}

        <link rel="stylesheet" href="/css/app.css">

        <meta http-equiv="X-UA-Compatible" content="IE=edge">
      	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    </head>
    <body>


        @yield('content')


        <script src="/js/app.js"></script>

    </body>
</html>
