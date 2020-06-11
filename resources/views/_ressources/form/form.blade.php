<form class="mt-3 form-validation " action="" method="POST">

    <div class="columns is-multiline">

        <div class="column is-12">
            @include('_ressources/form/elements/pre-build/gender',
                        [
                            'required'=>true,
                            'errorMsg'=>'Error msg gender',
                            'infos'=>'Infos supplémentaire sur ce champ.'
                        ])
        </div>


        <div class="column is-4">
            @include('_ressources/form/elements/input',
                        [
                            'name'=>'firstname',
                            'label'=>'Firstname',
                            // 'changeFilled'=>true,
                            'placeholder'=>'Firstname placeholder',
                            'required'=>true,
                            'errorMsg'=>'Error msg firstname',
                        ])
        </div>

        <div class="column is-4">
            @include('_ressources/form/elements/input',
                        [
                            'name'=>'lastname',
                            'label'=>'Lastname',
                            // 'changeFilled'=>true,
                            'placeholder'=>'Lastname placeholder',
                            'required'=>true,
                            'errorMsg'=>'Error msg lastname',
                        ])
        </div>

        <div class="column is-4">
            @include('_ressources/form/elements/pre-build/birthday',
                        [
                            'label'=>'Date d\'anniversaire',
                            // 'changeFilled'=>true,
                        ])
        </div>


        <div class="column is-6">
            @include('_ressources/form/elements/pre-build/email',
                        [
                            'label'=>'Email',
                            // 'changeFilled'=>true,
                            'placeholder'=>'Email placeholder',
                            'required'=>true,
                            'errorMsg'=>'Error msg email',
                        ])
        </div>

        <div class="column is-6">
            @include('_ressources/form/elements/pre-build/phone',
                        [
                            'label'=>'Phone',
                            // 'changeFilled'=>true,
                            'required'=>true,
                            'errorMsg'=>'Error msg phone',
                        ])
        </div>

        <div class="column is-12">
            @include('_ressources/form/elements/select',
                        [
                            'name'=>'select',
                            'label'=>'Select',
                            // 'changeFilled'=>true,
                            'required'=>true,
                            'errorMsg'=>'Error msg select',
                        ])
        </div>

        <div class="column is-12">
            @include('_ressources/form/elements/select2',
                        [
                            'name'=>'select2',
                            'label'=>'Select 2',
                            'placeholder'=>'Placeholder',
                            'classes'=>'with-search',
                            // 'changeFilled'=>true,
                            'required'=>true,
                            'errorMsg'=>'Error msg select',
                        ])
        </div>

        <div class="column is-12">

            @include('_ressources/form/elements/pre-build/optin',
                        [
                            'label'=>'<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, doloribus consequatur dolor eligendi eius recusandae quasi velit ad sit nihil, ratione pariatur? Deleniti enim, tenetur minima dicta laboriosam omnis minus.</p>',
                            'name'=>'Optin',
                            'isFloat'=>true,
                            'required'=>true,
                            'errorMsg'=>'Error msg phone',
                        ])

        </div>

    </div>


    <div class="has-text-centered mt-3 mb-3">
        <button class="button is-medium is-primary" type="submit">Submit</button>
    </div>

</form>
