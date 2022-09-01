<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">

        @include('head/head',[
            'title'=>'meta title', 
            'description'=>'meta description', 
            'image'=>'project-name_head_og-image.jpg', 
            'favicon'=>'project-name_head_favicon.png'
        ])

        <link rel="stylesheet" href="../css/app.css">

        <meta http-equiv="X-UA-Compatible" content="IE=edge">
      	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    </head>
    <body>

        <div class="main-layout">
            <!-- head: will stick at the top -->
            <div class="main-layout__head">
                <header class="header">
                    <div class="header__container">
                        <nav class="header__nav">
                            <div class="header__nav-left">
                                <div class="logo-springbok">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,0.0789473684 C18.5838156,0.0789473684 23.9210526,5.41618443 23.9210526,12 C23.9210526,18.5838156 18.5838156,23.9210526 12,23.9210526 C5.41618443,23.9210526 0.0789473684,18.5838156 0.0789473684,12 C0.0789473684,5.41618443 5.41618443,0.0789473684 12,0.0789473684 Z M12,3.07894737 C7.07303868,3.07894737 3.07894737,7.07303868 3.07894737,12 C3.07894737,16.9269613 7.07303868,20.9210526 12,20.9210526 C16.9269613,20.9210526 20.9210526,16.9269613 20.9210526,12 C20.9210526,7.07303868 16.9269613,3.07894737 12,3.07894737 Z M12,9.50137606 L15.8935751,13.3949511 L14.6654422,14.623084 L12,11.9575263 L9.33455775,14.623084 L8.10642492,13.3949511 L12,9.50137606 Z"/></svg>
                                </div>
                                <p>
                                    <strong>SPRINGBOK</strong> STARTER
                                </p>
                                
                            </div>
                
                            <div class="header__nav-right">
                                @include('_resources/elements/select-lang')
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
        
            <!-- body: will be in the middle -->
            <div class="main-layout__body">
                @yield('content')
            </div> 
            
            <!-- footer: will stick at the bottom -->  
            <div class="main-layout__foot">
                <footer class="footer" id="smoothScroll"> 
                    <div class="footer__container">
                        <nav class="footer__nav">
                 
                            <ul class="footer-list footer-list--left">
                                <li class="footer-list__el">
                                    <a class="footer__link" href="#">
                                        Legal
                                    </a>
                                </li>
                                <li class="footer-list__el">
                                    <a class="footer__link" href="#">
                                        Privacy
                                    </a>
                                </li> 
                                <li class="footer-list__el">
                                    <a class="footer__link" href="#">
                                        Coockies
                                    </a>
                                </li>
                            </ul>
                
                            <ul class="footer-list footer-list--right">
                                <li class="footer-list__el">
                                    <p>
                                        <strong>© SPRINGBOK 2022 - 2023</strong>
                                    </p>
                                </li>
                            </ul>
                        </nav>
                
                    </div>
                </footer>
            </div>
        </div>
         
        

        <script src="../js/app.js"></script>

    </body>
</html>
