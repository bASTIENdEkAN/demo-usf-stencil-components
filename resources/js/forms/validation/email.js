import $ from "jquery";

let regxEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
let $email = $('input[data-required="email"]');

$.validator.methods.email = function(value, element, param) {
    if( regxEmail.test(value) && value.length >= 5 ){
        return true;
    }
    return false;
}

$.validator.messages.email = $email.data('error-msg');

$email.each(function(){
    $email.rules("add", {
        email: true,
        // regx: /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
        // minlength: 5,
        // messages:{
        //     // regx: $(email).data('error-msg'),
        //     // minlength: $(email).data('error-msg'),
        //     email: $email.data('error-msg'),
        // }
    });
})
