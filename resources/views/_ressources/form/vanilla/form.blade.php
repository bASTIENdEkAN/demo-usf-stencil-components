<form class="mt-3" data-validate action="" method="POST">

    <div class="columns is-multiline">
        

        <div class="column is-12">
                @include('_ressources/form/vanilla/elements/radio',
                        [
                            'required'=>true,
                            // 'label'=>'Gender',
                            'name'=>'gender',
                            'errorMsg'=>'Error msg radio',
                            'value1'=>'M',
                            'label1'=>'Men',
                            'value2'=>'W',
                            'label2'=>'Women',
                            'infos'=>'Infos supplémentaire sur ce champ.'
                        ])    
        </div> 


        <div class="column is-6">
            @include('_ressources/form/vanilla/elements/input',
                        [
                            'name'=>'firstname',
                            'label'=>'Firstname',
                            'changeFilled'=>true,
                            'placeholder'=>'Firstname placeholder',
                            'required'=>true,
                            'errorMsg'=>'Error msg firstname',
                        ])
        </div>

        <div class="column is-6">
            @include('_ressources/form/vanilla/elements/input',
                        [
                            'name'=>'lastname',
                            'label'=>'Lastname',
                            'changeFilled'=>true,
                            'placeholder'=>'Lastname placeholder',
                            'required'=>true,
                            'errorMsg'=>'Error msg lastname',
                        ])
        </div>

        <div class="column is-6">
            @include('_ressources/form/vanilla/elements/pre-build/email',
                        [
                            'label'=>'Email',
                            'changeFilled'=>true,
                            'placeholder'=>'Email placeholder',
                            'infos'=>'exemple d\'infos dans le mail',
                            'required'=>true,
                            'errorMsg'=>'Error msg email',
                        ])
        </div>

        <div class="column is-6">
            @include('_ressources/form/vanilla/elements/pre-build/phone',
                        [
                            'label'=>'Phone',
                            'changeFilled'=>true,
                            'required'=>true,
                            'errorMsg'=>'Error msg phone',
                        ])
        </div>

        <div class="column is-12">
            @include('_ressources/form/vanilla/elements/select',
                        [
                            'name'=>'select',
                            'label'=>'Select',
                            'changeFilled'=>true,
                            'required'=>true,
                            'errorMsg'=>'Error msg select',
                        ])
        </div>

        <div class="column is-6">
            @include('_ressources/form/vanilla/elements/pre-build/password',
                        [
                            'name'=>'password',
                            'label'=>'Mot de passe',
                            'changeFilled'=>true,
                            'required'=>true,
                            'errorMsg'=>'Error msg password',
                        ])
        </div>

        <div class="column is-6">
            @include('_ressources/form/vanilla/elements/pre-build/password',
                        [
                            'name'=>'confirm-password',
                            'label'=>'Confirmer le mot de passe',
                            'changeFilled'=>true,
                            'required'=>'match',
                            'match'=>'#password',
                            'errorMsg'=>'Error msg password',
                        ])
        </div>

        {{-- <div class="column is-12">
            @include('_ressources/form/vanilla/elements/select2',
                        [
                            'name'=>'select2',
                            'label'=>'Select 2',
                            'placeholder'=>'Placeholder',
                            'classes'=>'with-search',
                            // 'changeFilled'=>true,
                            'required'=>true,
                            'errorMsg'=>'Error msg select',
                        ])
        </div> --}}

        <div class="column is-12">

            @include('_ressources/form/vanilla/elements/pre-build/optin',
                        [
                            'label'=>'<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, doloribus consequatur dolor eligendi eius recusandae quasi velit ad sit nihil, ratione pariatur? Deleniti enim, tenetur minima dicta laboriosam omnis minus.</p>',
                            'name'=>'Optin',
                            'isFloat'=>true,
                            'required'=>true,
                            'errorMsg'=>'Error msg optin',
                        ])

        </div>

    </div>


    <div class="has-text-centered mt-3 mb-3">
        <button class="button is-medium is-primary" type="submit">Submit</button>
    </div>

</form>
