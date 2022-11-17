<form class="mt-3" data-validate action="" method="POST">

    <div class="columns is-multiline">
        

        <div class="column is-12">
                @include('_resources/form/elements/radios',
                        [
                            // 'label'=>'Gender',
                            'name'=>'gender',
                            'button'=>false,
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
                            'help'=>'Infos supplémentaire sur ce champ.',
                            'errorMsg'=>'Error msg radio',
                        ])    
        </div> 

        <div class="column is-6">
            @include('_resources/form/elements/input',
                        [ 
                            'name'=>'firstname', 
                            'label'=>'Firstname',
                            'floatLabel'=>true, 
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
                            'floatLabel'=>true,
                            'placeholder'=>'Lastname placeholder',
                            'required'=>true,
                            'errorMsg'=>'Error msg lastname',
                        ])
        </div>

        <div class="column is-6">
            @include('_resources/form/elements/pre-build/email',
                        [
                            'label'=>'Email',
                            'floatLabel'=>true,
                            'placeholder'=>'Email placeholder',
                            'help'=>'Exemple d\'infos dans le mail',
                            'required'=>true,
                            'errorMsg'=>'Error msg email',
                            ])
        </div>

        <div class="column is-6">
            @include('_resources/form/elements/pre-build/phone',
                        [
                            'label'=>'Phone',
                            'floatLabel'=>true,
                            'required'=>true,
                            'errorMsg'=>'Error msg phone',
                        ])
        </div>

        <div class="column is-6">
            @include('_resources/form/elements/input',
                        [
                            'name'=>'input_birthday',
                            'label'=>'Date de naissance',
                            'floatLabel'=>true,
                            'required'=>'birthday',
                            'errorMsg'=>'Error msg lastname',
                        ])
        </div>

        <div class="column is-6">
            @include('_resources/form/elements/select',
                        [
                            'name'=>'select',
                            'label'=>'Select',
                            'floatLabel'=>true,
                            'required'=>true,
                            'errorMsg'=>'Error msg select',
                        ])
        </div>

        <div class="column is-6">
            @include('_resources/form/elements/pre-build/password',
                        [
                            'name'=>'password',
                            'label'=>'Mot de passe',
                            'floatLabel'=>true,
                            'required'=>true,
                            'errorMsg'=>'Error msg password',
                        ])
        </div>

        <div class="column is-6">
            @include('_resources/form/elements/pre-build/password',
                        [
                            'name'=>'confirm-password',
                            'label'=>'Confirmer le mot de passe',
                            'floatLabel'=>true,
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
                            'floatLabel'=>true,
                            // 'required'=>true,
                            'errorMsg'=>'Error msg message',
                        ])
        </div> 

        <div class="column is-12">
            @include('_resources/form/elements/radios',
                    [
                        'label'=>'I agree to receive offers and promotions relating to the services and products of the Renault Group, its subsidiaries and members of its sales network:',
                        'name'=>'optin_newsletter',
                        'button'=>true,
                        'required'=>true,
                        // 'errorMsg'=>'Error msg radio',
                        'labelsValues'=>[
                            [
                                'label'=>'YES',
                                'value'=>'Y',
                            ],  
                            [
                                'label'=>'NO',
                                'value'=>'N',
                            ],  
                        ],
                        // 'help'=>'Infos supplémentaire sur ce champ.',
                        'required'=>true,
                        // 'checkStyle'=>true,
                    ])    
        </div> 

        <div class="column is-12">
            @include('_resources/form/elements/checkboxs',
                [
                    'label'=>'Select one or many of these multiple choice',
                    'name'=>'multi_choice',
                    'button'=>true,
                    'required'=>true,
                    // 'errorMsg'=>'Error msg radios',
                    'labelsValues'=>[
                        [
                            'label'=>'Choice 1',
                            'name'=>'choice_1',
                        ],  
                        [
                            'label'=>'Choice 2',
                            'name'=>'choice_2',
                        ],  
                        [
                            'label'=>'Choice 3',
                            'name'=>'choice_3',
                        ],  
                        [
                            'label'=>'Choice 4',
                            'name'=>'choice_4',
                        ]
                    ],
                ]) 
        </div>

        <div class="column is-12">
            @include('_resources/form/elements/checkbox',
                        [
                            'label'=>'<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, doloribus consequatur dolor eligendi eius recusandae quasi velit ad sit nihil, ratione pariatur? Deleniti enim, tenetur minima dicta laboriosam omnis minus.</p>',
                            'name'=>'Optin',
                            'float'=>true,
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
                    @include('_resources/icons/arrow')
                </span>
            </button>
            <button class="button" type="submit">
                <span>Submit</span>
                <span class="icon">
                    @include('_resources/icons/arrow')
                </span>
            </button>
            <button class="button" type="submit" disabled>
                <span>Submit</span>
                <span class="icon">
                    @include('_resources/icons/arrow')
                </span>
            </button>
        </div>
    </div>

</form>
