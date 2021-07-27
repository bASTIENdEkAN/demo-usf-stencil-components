@extends('layouts/default')

@section('content')

<div class="main-layout">
    <!-- head: will stick at the top -->
    <div class="head">
        <!-- HEAD -->
        <header class="header">
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
                <div class="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, illo qui! Atque distinctio enim nihil, numquam, odit autem voluptatem corporis modi officia voluptate explicabo totam soluta. Dolorum veniam quibusdam consequatur.</p>
                </div>
                <!-- FORM -->
                <form class="mt-3" data-validate action="" method="POST">

                    <div class="columns is-multiline">
                        
                
                        <div class="column is-12">
                                {{-- @include('_ressources/form/elements/radio',
                                        [
                                            'required'=>true,
                                            // 'label'=>'Gender',
                                            'name'=>'gender',
                                            'required'=>true,
                                            // 'errorMsg'=>'Error msg radio',
                                            'value1'=>'M',
                                            'label1'=>'Men',
                                            'value2'=>'W',
                                            'label2'=>'Women',
                                            'infos'=>'Infos supplémentaire sur ce champ.'
                                        ])     --}}
                            <div class="level">
                                <div class="level-item">
                                    @include('_ressources/form/elements/radio',
                                    [
                                        'block'=>true,
                                        'label'=>'Monsieur',
                                        'value'=>'Mr',
                                        'name'=>'grender',
                                        'required'=>true,
                                        'errorMsg'=>'Error msg radio',
                                    ])
                                </div>
                                <div class="level-item">
                                    @include('_ressources/form/elements/radio',
                                    [
                                        'block'=>true,
                                        'label'=>'Madame',
                                        'value'=>'Mrs',
                                        'name'=>'grender',
                                        'required'=>true,
                                        'errorMsg'=>'Error msg radio',
                                    ])
                                </div>
                                <div class="level-item">
                                    @include('_ressources/form/elements/radio',
                                    [
                                        'block'=>true,
                                        'label'=>'Mademoiselle',
                                        'value'=>'Mme',
                                        'name'=>'grender',
                                        'required'=>true,
                                        'errorMsg'=>'Error msg radio',
                                    ])
                                </div>
                            </div>
                            
                            
                        </div> 
                
                
                        <div class="column is-6">
                            @include('_ressources/form/elements/input',
                                        [
                                            'name'=>'firstname',
                                            'label'=>'Nom',
                                            'changeFilled'=>true,
                                            'placeholder'=>'Firstname placeholder',
                                            'required'=>true,
                                            // 'errorMsg'=>'Error msg firstname',
                                        ])
                        </div>
                
                        <div class="column is-6">
                            @include('_ressources/form/elements/input',
                                        [
                                            'name'=>'lastname',
                                            'label'=>'Prénom',
                                            'changeFilled'=>true,
                                            'required'=>true,
                                            // 'errorMsg'=>'Error msg lastname',
                                        ])
                        </div>
                
                        <div class="column is-6">
                            @include('_ressources/form/elements/pre-build/email',
                                        [
                                            'label'=>'E-mail',
                                            'changeFilled'=>true,
                                            'placeholder'=>'Email placeholder',
                                            // 'infos'=>'exemple d\'infos dans le mail',
                                            'required'=>true,
                                            // 'errorMsg'=>'Error msg email',
                                        ])
                        </div>


                        <div class="column is-6">
                            @include('_ressources/form/elements/select',
                                        [
                                            'name'=>'lang',
                                            'label'=>'Langue',
                                            'changeFilled'=>true,
                                            'required'=>'birthday',
                                            'errorMsg'=>'Error msg select',
                                        ])
                        </div>

                        <div class="column is-6">
                            @include('_ressources/form/elements/input',
                                        [
                                            'name'=>'input_birthday',
                                            'label'=>'Date de naissance',
                                            'changeFilled'=>true,
                                            'required'=>'birthday',
                                            // 'errorMsg'=>'Error msg lastname',
                                        ])
                        </div>
                
                        <div class="column is-6">
                            @include('_ressources/form/elements/pre-build/phone',
                                        [
                                            'label'=>'Phone',
                                            'changeFilled'=>true,
                                            'required'=>true,
                                            // 'errorMsg'=>'Error msg phone',
                                        ])
                        </div>

                        <div class="column is-6">
                            @include('_ressources/form/elements/input',
                                        [
                                            'name'=>'society',
                                            'label'=>'Société',
                                            'changeFilled'=>true,
                                            'required'=>true,
                                            // 'errorMsg'=>'Error msg lastname',
                                        ])
                        </div>
                

                        <div class="column is-6">
                            @include('_ressources/form/elements/input',
                                        [
                                            'name'=>'tva',
                                            'label'=>'Numéro de TVA',
                                            'changeFilled'=>true,
                                            'required'=>true,
                                            // 'errorMsg'=>'Error msg lastname',
                                        ])
                        </div>
                
                    </div>
                    
                    <h2>Votre adresse</h2>
                    <div class="columns is-multiline">
                        <div class="column is-6">
                            @include('_ressources/form/elements/input',
                                [
                                    'name'=>'Street',
                                    'label'=>'Rue',
                                    'changeFilled'=>true,
                                    'required'=>true,
                                    // 'errorMsg'=>'Error msg firstname',
                                ])
                        </div>
                        <div class="column is-6">
                            <div class="columns is-multiline">
                                <div class="column is-6">
                                    @include('_ressources/form/elements/input',
                                        [
                                            'name'=>'Number',
                                            'label'=>'Numéro',
                                            'changeFilled'=>true,
                                            'required'=>true,
                                            // 'errorMsg'=>'Error msg firstname',
                                        ])
                                </div>
                                <div class="column is-6">
                                    @include('_ressources/form/elements/input',
                                        [
                                            'name'=>'Box',
                                            'label'=>'Boite',
                                            'changeFilled'=>true,
                                            'required'=>true,
                                            // 'errorMsg'=>'Error msg firstname',
                                        ])
                                </div>
                            </div>
                        </div>
                        <div class="column is-6">
                            <div class="columns is-multiline">
                                <div class="column is-4">
                                    @include('_ressources/form/elements/input',
                                        [
                                            'name'=>'postalCode',
                                            'label'=>'Code postal',
                                            'changeFilled'=>true,
                                            'required'=>true,
                                            // 'errorMsg'=>'Error msg firstname',
                                        ])
                                </div>
                                <div class="column is-8">
                                    @include('_ressources/form/elements/input',
                                        [
                                            'name'=>'city',
                                            'label'=>'Localité',
                                            'changeFilled'=>true,
                                            'required'=>true,
                                            // 'errorMsg'=>'Error msg firstname',
                                        ])
                                </div>
                            </div>
                        </div>
                        <div class="column is-6">
                            @include('_ressources/form/elements/select',
                                        [
                                            'name'=>'country',
                                            'label'=>'Pays',
                                            'changeFilled'=>true,
                                            'required'=>true,
                                            'errorMsg'=>'Error msg select',
                                        ])
                        </div>
                        <div class="column is-12">
                
                            @include('_ressources/form/elements/pre-build/optin',
                                        [
                                            'label'=>'<p>Je m\'inscris à la newsletter Briko Depot.</p>',
                                            'name'=>'Optin',
                                            'isFloat'=>true,
                                            'required'=>true,
                                            'errorMsg'=>'Error msg optin',
                                        ])
                
                        </div>
                        <div class="column is-12">
                            <div class="content is-size-7">
                                <p>
                                    En tant que participant au programme de fidélité, vous profitez d’offres exclusives et personnalisées. Sur présentation de votre carte, vous pouvez bénéficier chaque jour de réductions spéciales sur certains produits, sur certaines catégories de produits, voire même parfois sur l’ensemble de l’assortiment. 
                            Lorsque vous vous inscrivez au programme de fidélité, vous recevez nos newsletters et des messages personnalisés contenant des informations et des offres créées spécialement à votre intention. Vous recevez des communications par email, par courrier, via l’application Briko Depot ou, si vous avez renseigné votre numéro de téléphone, par SMS. 
                            Briko Depot personnalise ses messages et ses offres en fonction de vos achats, de votre utilisation du site web et de l’application Briko Depot, et d’autres services de Briko Depot. Sur votre compte, vous pouvez à tout moment adapter vos informations personnelles, modifier vos paramètres et vous désinscrire totalement des communications de Briko Depot.  
                            Lorsque vous utilisez votre carte de fidélité dans nos magasins, nous pouvons identifier votre compte et associer directement vos achats à votre compte. Vous pouvez ainsi à tout moment consulter l’historique de vos achats sur votre compte. Sur notre site web et dans notre application, nous pouvons également vous identifier lorsque vous renseignez votre adresse e-mail ou votre carte de fidélité. 
                            En vous inscrivant, vous confirmez être âgé(e) de 16 ans ou plus. Vous trouverez ici les conditions qui s’appliquent au programme de fidélité.
                            En savoir plus sur notre politique de confidentialité.
                                </p>
                            </div>
                        </div>
                    </div>
                
                
                    <div class="buttons is-centered mt-3 mb-3">
                        <button class="button is-medium is-primary" type="submit">Submit</button>
                    </div>
                
                </form>
                
                <!--/ FORM -->
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
