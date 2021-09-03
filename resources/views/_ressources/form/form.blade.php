<form class="mt-3" data-validate action="" method="POST">

    <div class="columns is-multiline">
        

        <div class="column is-12">
                @include('_ressources/form/elements/radio',
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
                        ])    
        </div> 


        <div class="column is-6">
            @include('_ressources/form/elements/input',
                        [
                            'name'=>'firstname',
                            'label'=>'Firstname',
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
                            'label'=>'Lastname',
                            'changeFilled'=>true,
                            'placeholder'=>'Lastname placeholder',
                            'required'=>true,
                            // 'errorMsg'=>'Error msg lastname',
                        ])
        </div>

        <div class="column is-6">
            @include('_ressources/form/elements/pre-build/email',
                        [
                            'label'=>'Email',
                            'changeFilled'=>true,
                            'placeholder'=>'Email placeholder',
                            'infos'=>'exemple d\'infos dans le mail',
                            'required'=>true,
                            // 'errorMsg'=>'Error msg email',
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
                            'name'=>'input_birthday',
                            'label'=>'Date de naissance',
                            'changeFilled'=>true,
                            'required'=>'birthday',
                            // 'errorMsg'=>'Error msg lastname',
                        ])
        </div>

        <div class="column is-6">
            @include('_ressources/form/elements/select',
                        [
                            'name'=>'select',
                            'label'=>'Select',
                            'changeFilled'=>true,
                            'required'=>true,
                            'errorMsg'=>'Error msg select',
                        ])
        </div>

        {{-- <div class="column is-12">
            @include('_ressources/form/elements/tailselect',
                        [
                            'name'=>'tailselect',
                            'label'=>'Tailselect',
                            'changeFilled'=>true,
                            'required'=>true,
                            'errorMsg'=>'Error msg select',
                        ])
        </div> --}}

        <div class="column is-6">
            @include('_ressources/form/elements/pre-build/password',
                        [
                            'name'=>'password',
                            'label'=>'Mot de passe',
                            'changeFilled'=>true,
                            'required'=>true,
                            // 'errorMsg'=>'Error msg password',
                        ])
        </div>

        <div class="column is-6">
            @include('_ressources/form/elements/pre-build/password',
                        [
                            'name'=>'confirm-password',
                            'label'=>'Confirmer le mot de passe',
                            'changeFilled'=>true,
                            'required'=>'match',
                            'match'=>'#password',
                            // 'errorMsg'=>'Error msg password',
                        ])
        </div>

        <div class="column is-12">
            @include('_ressources/form/elements/textarea',
                        [
                            'name'=>'message',
                            'label'=>'Message (optional)',
                            'changeFilled'=>true,
                            // 'required'=>true,
                            // 'errorMsg'=>'Error msg message',
                        ])
        </div> 
        <div class="column is-12">
            <div class="content is-size-5">
                <p>
                    I agree to receive offers and promotions relating to the services and products of the Renault Group, its subsidiaries and members of its sales network:
                </p>
            </div>
        </div>
        <div class="column is-6">
            @include('_ressources/form/elements/radio',
                    [
                        'block'=>true,
                        'label'=>'YES',
                        'value'=>'Y',
                        'name'=>'optin',
                        'required'=>true,
                        'errorMsg'=>'Error msg radio',
                    ])    
        </div> 
        <div class="column is-6">
            @include('_ressources/form/elements/radio',
                    [
                        'block'=>true,
                        'label'=>'NO',
                        'value'=>'N',
                        'name'=>'optin',
                        'required'=>true,
                        'errorMsg'=>'Error msg radio',
                    ])    
        </div> 

        {{-- <div class="column is-12">
            @include('_ressources/form/elements/select2',
                        [
                            'name'=>'select3',
                            'label'=>'Select 2',
                            'placeholder'=>'Placeholder',
                            'classes'=>'with-search',
                            // 'changeFilled'=>true,
                            'required'=>true,
                            'errorMsg'=>'Error msg select',
                        ])
        </div> --}}

        <div class="column is-12">

            @include('_ressources/form/elements/pre-build/optin',
                        [
                            'label'=>'<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, doloribus consequatur dolor eligendi eius recusandae quasi velit ad sit nihil, ratione pariatur? Deleniti enim, tenetur minima dicta laboriosam omnis minus.</p>',
                            'name'=>'Optin',
                            'isFloat'=>true,
                            'required'=>true,
                            'errorMsg'=>'Error msg optin',
                        ])

        </div>

    </div>

    <div>
        <div class="buttons is-centered mb-3">
            <button class="button" type="submit">Submit</button>
            {{-- <a class="button has-link" href="#">voir le détails</a> --}}
        </div>
    </div>

</form>
