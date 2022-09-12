@extends('layouts/default')

@section('content')

<progress class="header-progress progress" max="100" value="0" data-anim-to="75"> 70% </progress>

<div class="hero-split">
    <div class="hero-split__img-wrapper">
        @include('_resources/elements/img',['path'=>'project-name_pictures_hero-split','ext'=>'jpg', 'class'=>'hero-split__img min-mobile'])
        @include('_resources/elements/img',['path'=>'project-name_pictures_hero-split--mobile','ext'=>'jpg', 'class'=>'hero-split__img max-mobile'])
    </div>
    <div class="hero-split__content-wrapper">
        <div class="hero-split__content-container">
            <h1 class="hero-split__title title">
                Starter Slicing Light
            </h1>
            <p class="subtitle">
                Developed with love by Bastien De Kan
            </p>
            <div class="hero-split__content content">
                <p>
                    It is a set of component and javascript functionality made to facilitate the work of the slicer. 
                    Take advantage of its resources or be inspired by them. The code is regularly updated.
                </p>
            </div>
            <div class="hero-split__buttons">
                <a href="#main_form" class="button">
                    <span>Look at form components</span>
                </a>
            </div>
        </div>
    </div>
</div>

<div class="wrapper">
    <div class="container-small py-6" id="main_form"> 
        <h2 class="title">Form components</h2>
        <div class="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, illo qui! Atque distinctio enim nihil, numquam, odit autem voluptatem corporis modi officia voluptate explicabo totam soluta. Dolorum veniam quibusdam consequatur.</p>
        </div>
        <!-- FORM -->
        @include('_resources/form/form')
        <!--/ FORM -->
    </div> 
</div>

    
<div class="wrapper wrapper-accordions">
    <div class="container-medium py-6">

        <ul class="accordions">
            @for($i=1;$i<5;$i++)
                @include('_resources/components/accordion',
                            [
                                'question'=>'Question '.$i, 
                                'answer'=>'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            ]) 
            @endfor 
        </ul> 
    </div> 
</div>            
    
@endsection
