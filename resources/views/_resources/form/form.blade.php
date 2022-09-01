<form class="mt-3" data-validate action="" method="POST">

    <div class="columns is-multiline">
        

        <div class="column is-12">
                @include('_resources/form/elements/radios',
                        [
                            // 'label'=>'Gender',
                            'name'=>'gender',
                            'required'=>true,
                            'labelsValues'=>[
                                [
                                    'label'=>'Woman',
                                    'value'=>'W',
                                ],  
                                [
                                    'label'=>'Men',
                                    'value'=>'M',
                                ],  
                            ],
                            'infos'=>'Infos supplémentaire sur ce champ.',
                            'required'=>true,
                            // 'checkStyle'=>true,
                            'errorMsg'=>'Error msg radio',
                        ])    
        </div> 

        <div class="column is-6">
            @include('_resources/form/elements/input',
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
            @include('_resources/form/elements/input',
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
            @include('_resources/form/elements/pre-build/email',
                        [
                            'label'=>'Email',
                            'changeFilled'=>true,
                            'placeholder'=>'Email placeholder',
                            'infos'=>'Exemple d\'infos dans le mail',
                            'required'=>true,
                            'errorMsg'=>'Error msg email',
                            ])
        </div>

        <div class="column is-6">
            @include('_resources/form/elements/pre-build/phone',
                        [
                            'label'=>'Phone',
                            'changeFilled'=>true,
                            'required'=>true,
                            'errorMsg'=>'Error msg phone',
                        ])
        </div>

        <div class="column is-6">
            @include('_resources/form/elements/input',
                        [
                            'name'=>'input_birthday',
                            'label'=>'Date de naissance',
                            'changeFilled'=>true,
                            'required'=>'birthday',
                            'errorMsg'=>'Error msg lastname',
                        ])
        </div>

        <div class="column is-6">
            @include('_resources/form/elements/select',
                        [
                            'name'=>'select',
                            'label'=>'Select',
                            'changeFilled'=>true,
                            'required'=>true,
                            'errorMsg'=>'Error msg select',
                        ])
        </div>

        {{-- <div class="column is-12">
            @include('_resources/form/elements/tailselect',
                        [
                            'name'=>'tailselect',
                            'label'=>'Tailselect',
                            'changeFilled'=>true,
                            'required'=>true,
                            'errorMsg'=>'Error msg select',
                        ])
        </div> --}}

        <div class="column is-6">
            @include('_resources/form/elements/pre-build/password',
                        [
                            'name'=>'password',
                            'label'=>'Mot de passe',
                            'changeFilled'=>true,
                            'required'=>true,
                            'errorMsg'=>'Error msg password',
                        ])
        </div>

        <div class="column is-6">
            @include('_resources/form/elements/pre-build/password',
                        [
                            'name'=>'confirm-password',
                            'label'=>'Confirmer le mot de passe',
                            'changeFilled'=>true,
                            'required'=>'match',
                            'match'=>'#password',
                            'errorMsg'=>'Error msg password',
                        ])
        </div>

        <div class="column is-12">
            @include('_resources/form/elements/textarea',
                        [
                            'name'=>'message',
                            'label'=>'Message (optional)',
                            'changeFilled'=>true,
                            // 'required'=>true,
                            'errorMsg'=>'Error msg message',
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
            @include('_resources/form/elements/radio',
                    [
                        'block'=>true,
                        'label'=>'YES',
                        'value'=>'Y',
                        'name'=>'radio2',
                        'required'=>true,
                        'errorMsg'=>'Error msg radio',
                    ])    
        </div> 
        <div class="column is-6">
            @include('_resources/form/elements/radio',
                    [
                        'block'=>true,
                        'label'=>'NO',
                        'value'=>'N',
                        'name'=>'radio2',
                        'required'=>true,
                        'errorMsg'=>'Error msg radio',
                    ])    
        </div> 

        <div class="column is-12">
            @include('_resources/form/elements/radio',
                    [
                        'name'=>'radio2',
                        'errorMsgTarget'=>true,
                    ])    
            
        </div>
 
        <div class="column is-12">
            @include('_resources/form/elements/pre-build/optin',
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
        <div class="buttons buttons--centered mb-3">
            <a class="button button--has-link" href="#">voir le détails</a>
            <button class="button button--outlined" type="submit">
                <span>Submit</span>
                <span class="icon">
                    @include('_resources/icon-svg/arrow')
                </span>
            </button>
            <button class="button" type="submit">
                <span>Submit</span>
                <span class="icon">
                    @include('_resources/icon-svg/arrow')
                </span>
            </button>
            <button class="button" type="submit" disabled>
                <span>Submit</span>
                <span class="icon">
                    @include('_resources/icon-svg/arrow')
                </span>
            </button>
        </div>
    </div>

</form>
