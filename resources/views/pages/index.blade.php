@extends('layouts/default')

@section('content')

<div class="main-layout">
    <!-- head: will stick at the top -->
    <div class="head">
        <!-- HEAD -->
        <header class="header" id="pushData" style="cursor:pointer">
            <div class="container">
                <nav class="header-nav">
                    <div class="left">
                        <div class="logo-springbok">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,0.0789473684 C18.5838156,0.0789473684 23.9210526,5.41618443 23.9210526,12 C23.9210526,18.5838156 18.5838156,23.9210526 12,23.9210526 C5.41618443,23.9210526 0.0789473684,18.5838156 0.0789473684,12 C0.0789473684,5.41618443 5.41618443,0.0789473684 12,0.0789473684 Z M12,3.07894737 C7.07303868,3.07894737 3.07894737,7.07303868 3.07894737,12 C3.07894737,16.9269613 7.07303868,20.9210526 12,20.9210526 C16.9269613,20.9210526 20.9210526,16.9269613 20.9210526,12 C20.9210526,7.07303868 16.9269613,3.07894737 12,3.07894737 Z M12,9.50137606 L15.8935751,13.3949511 L14.6654422,14.623084 L12,11.9575263 L9.33455775,14.623084 L8.10642492,13.3949511 L12,9.50137606 Z"/></svg>
                        </div>
                        <p>
                            <strong>R+S</strong> STARTER
                        </p>
                        
                    </div>
        
                    <div class="right">
                        @include('_ressources/elements/select-lang')
                    </div>
                </nav>
            </div>
        </header>
        <!--/ HEAD -->
    </div>

    <!-- body: will be in the middle -->
    <div class="body">
        <!-- BODY -->
        <div class="wrapper" >
            <div class="container is-small py-4"> 
                <h1 class="title">Form components</h1>
                <h2 class="subtitle">Developed with love by Bastien De Kan</h2>
                <div class="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, illo qui! Atque distinctio enim nihil, numquam, odit autem voluptatem corporis modi officia voluptate explicabo totam soluta. Dolorum veniam quibusdam consequatur.</p>
                </div>
                <!-- FORM -->
                @include('_ressources/form/form')
                <!--/ FORM -->
            </div>
        </div>
        
        
        <div class="wrapper wrapper-accordions">
            <div class="container is-medium py-6">
        
                <ul class="list-faq">
        
                @for($i=1;$i<5;$i++)
                    <li class="el">
                        @include('_ressources/components/accordion',
                                    [
                                        'question'=>'Question '.$i,
                                        'answer'=>'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                                    ])
                    </li>
                @endfor
        
                </ul>
        
            </div>
        </div>        
        <!--/ BODY  -->
    </div>

    <!-- footer: will stick at the bottom -->
    <div class="foot">
        <!-- FOOT -->
        <footer class="footer" id="smoothScroll">
            <div class="container">
                <nav class="footer-nav">
        
                    <ul class="list-left">
                        <li class="el">
                            <a class="link" href="#">
                                Legal
                            </a>
                        </li>
                        <li class="el">
                            <a class="link" href="#">
                                Privacy
                            </a>
                        </li>
                        <li class="el">
                            <a class="link" href="#">
                                Coockies
                            </a>
                        </li>
                    </ul>
        
        
                    <ul class="list-right">
                        <li class="el">
                            <p>
                                <strong>© R+S 2020 - 2021</strong>
                            </p>
                        </li>
                    </ul>
                </nav>
        
            </div>
        </footer>
        <!--/ FOOT -->
    </div>
</div>




@endsection
