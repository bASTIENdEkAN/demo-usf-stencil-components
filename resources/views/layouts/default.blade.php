<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">

        @include('head/head',[
            'title'=>'meta title', 
            'description'=>'meta description', 
            'image'=>'projectName_head_og-image.jpg', 
            'favicon'=>'projectName_head_favicon.png'
        ])

        <link rel="stylesheet" href="../css/app.css">

        <meta http-equiv="X-UA-Compatible" content="IE=edge">
      	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    </head>
    <body>


        @yield('content')


        <script src="../js/app.js"></script>

    </body>
</html>
