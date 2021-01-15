@extends('layouts/default')

@section('content')
<header class="wrapper has-background-light">
    <div class="container py-1">
         {{-- Main container --}}
        <nav class="level is-mobile">
            {{-- Left side --}}
            <ul class="level-left">
                <li class="level-item">
                    <p class="text">
                        
                        <span class="logo-springbok"></span><strong>R+S</strong> STARTER
                        
                    </p>
                </li>
            </ul>

            {{-- Right side --}}
            <ul class="level-right">
                <li class="level-item">
                    @include('_ressources/elements/select-lang')
                </li>
            </ul>
        </nav>
        {{--/ Main container --}}
    </div>
</header>


<div class="wrapper">

    <div class="container is-small pt-4 pb-1">
        @include ('_ressources/components/steps-line',
                        [
                            'currentStep'=>'5', 
                            'steps'=>'5',
                        ])
    </div>
</div>


<div class="wrapper" >
    <div class="container is-small py-4"> 
        <h1 class="title">Form template</h1>
        <div class="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, illo qui! Atque distinctio enim nihil, numquam, odit autem voluptatem corporis modi officia voluptate explicabo totam soluta. Dolorum veniam quibusdam consequatur.</p>
        </div>
        {{-- FORM --}}
        @include('_ressources/form/vanilla/form')
        {{--/ FORM --}}
        {{-- <hr>
        @include('_ressources/form/form') --}}
    </div>

</div>


<div class="wrapper has-background-white-bis">
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

<footer class="footer" id="smoothScroll">
    <div class="footer-container">

        <nav class="level">

            <ul class="level-left">
                <li class="level-item">
                    <a class="link" href="#">
                        Legal
                    </a>
                </li>
                <li class="level-item">
                    <a class="link" href="#">
                        Privacy
                    </a>
                </li>
                <li class="level-item">
                    <a class="link" href="#">
                        Coockies
                    </a>
                </li>
            </ul>


            <ul class="level-right">
                <li class="level-item">
                    <p class="text ">
                        <strong>© R+S 2020 - 2021</strong>
                    </p>
                </li>
            </ul>
        </nav>

    </div>
</footer>


@endsection
