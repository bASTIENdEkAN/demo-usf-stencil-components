import $ from "jquery";

// EXCLUDE EMAILS
// EXCLUDE EMAILS
window.mailcheck = [' '];


let excludeMailCheck = (value) => {
    let mailValue = false;

    for( let i=0; i<window.mailcheck.length; i++){
        // console.log(`${value} == ${window.mailcheck[i]}`);
        if(value == window.mailcheck[i]){

            mailValue = false;
            return false;
        }else{

            mailValue = true;
        }
    }

    if(mailValue == true){
        return true;
    }

    return false;
};

$.validator.addMethod('excludemailcheck', function (value, element) {
    if(excludeMailCheck(value) == true ){
        return true;
    }

});

// ADD THE RULE
let $excludemailcheck = $('input[data-required="email"]');

$.validator.messages.email = $excludemailcheck.data('error-msg');
$.validator.messages.excludemailcheck = $excludemailcheck.data('error-msg-exclude');

$excludemailcheck.each(function(){
    let $this = $(this);
    let $thisAttr = $this.attr('data-required-excludemailcheck');

    $this.rules("add", {
        excludemailcheck: true,
        messages:{
            email: $excludemailcheck.data('error-msg'),
            excludemailcheck: $excludemailcheck.data('error-msg'),
        }
    });

})
// $.validator.addMethod('excludeemeails', function (value, element) {
//
//     let thisValLength = value.length;
//     let chars = value.split('');
//
//     for( let i=0 ; i<=thisValLength; i++){
//
//         if(chars[i] == '@'){
//
//             let fromAt = i+1;
//             // console.log(value.substr(fromAt));
//             if( value.substr(fromAt) == 'noemail.com' || value.substr(fromAt) == 'noemail.be' ){
//                 // return false;
//                 // return false;
//             }else{
//                 return true;
//             }
//         }
//     }
//
//     return false;
//
// });
