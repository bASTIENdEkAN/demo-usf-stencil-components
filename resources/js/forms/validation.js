import $ from "jquery";
import validate from 'jquery-validation'; // https://www.npmjs.com/package/jquery-validation

let $forms = $('.form-validation');


$forms.each(function() {

    let $form = $(this);
    let messages = [];
    let rules = [];

    $form.find('[data-required]').each(function() {

        let $this = $(this);

        if ($this.data('required') !== undefined) {

            let name = $this.attr('name');
            let message = $this.data('error-msg');
            let rule = 'required';

            rules[name] = rule;
            messages[name] = message;

        }

    });
    let submitOnlyWhenAllFieldsValid = $form.hasClass('submit-only-when-all-fields-valid');
    let validator = $form.validate({
        rules: rules,
        messages: messages,
        errorPlacement: function(error, element) {
          let placement = $(element).data('error-location');
          if (placement) {
            $(placement).append(error)
          } else {
            error.insertAfter(element);
          }
        },
        errorClass: 'error',
        validClass: 'valid',
        highlight: function(element, errorClass, validClass) {
          $(element).addClass(errorClass).removeClass(validClass);
          $(element).parents('.field').addClass(errorClass);
          // $( "#summary" ).text( validator.numberOfInvalids() + " field(s) are invalid" );
          if(submitOnlyWhenAllFieldsValid){
              if(validator.numberOfInvalids() == 0){
                  $('button[type="submit"]').attr('disabled', false);
              }else{
                  $('button[type="submit"]').attr('disabled', true);
              }
          }

        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass(errorClass).addClass(validClass);
            $(element).parents('.field').removeClass(errorClass).addClass(validClass);
            // $( "#summary" ).text( validator.numberOfInvalids() + " field(s) are invalid" );
            if(submitOnlyWhenAllFieldsValid){
                if(validator.numberOfInvalids() == 0){
                    $('button[type="submit"]').attr('disabled', false);
                }else{
                    $('button[type="submit"]').attr('disabled', true);
                }
            }
          },
        onfocusout: function(element, label) {
            // "lazy" validation by default
            if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
                this.element(element);
            }
        },
        success: function() {
            let nameBirthdayKiller = $('.is-birthday-master input:last-child').attr('name');
            $('input[name="'+nameBirthdayKiller+'"]').val($('#day').val()+'/'+$('#month').val()+'/'+$('#year').val());
        },

        submitHandler: function(form){
            $('button[type="submit"]').attr('disabled', true);
            $('button[type="submit"]').addClass('is-loading');
            form.submit();
        },

    });

    if(submitOnlyWhenAllFieldsValid){
        $('.input').keyup(function(){
            let $this = $(this);
            if($this.val().length >= 1){
                validator.element($this);
            }
        })
    }


});

// $.validator.messages.required = $('form').data('default-error-msg')?$('form').data('default-error-msg'):'error';


require('./validation/birthday-master.js');
// require('./validation/phone.js');
// require('./validation/email.js');
// require('./validation/exclude-mailcheck.js');
// require('./validation/equal-to.js');
