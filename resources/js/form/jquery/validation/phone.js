import $ from "jquery";


// PHONE
// PHONE
// PHONE
var sliceVal = 0;
let regexPhone = new RegExp("^[0-9 ]+$");
let $phone = $('input[data-required="phone"]')

$.validator.messages.phonenumber = $phone.data('error-msg');

$.validator.addMethod('phonenumber', function (value, element) {

    let $this = $phone;
    let thisValRe = value.replace(/ /g,"");

    if(thisValRe.length <= 10) {
        sliceVal = $this.val().length;
    }
    // console.log(value);
    // console.log(regexPhone.test(value));
    if( regexPhone.test(value) ){

        if(thisValRe.length >= 8) {
            $phone.val($this.val().slice(0, sliceVal));
            return true;
        }
        return false;
    }

    return false;

},$phone.data('error-msg'));

$phone.bind('keyup','keydown', function(e){
    const $this = $(this);
    let value = $this.val();
    let thisValRe = value.replace(/ /g,"");

    if(thisValRe.length <= 10) {
        sliceVal = $this.val().length;
    }

    if( regexPhone.test(value) ){

        if(thisValRe.length >= 8) {
            $phone.val($this.val().slice(0, sliceVal));
            return true;
        }
        return false;
    }

    return false;
});

$phone.each(function(){
    $(this).rules("add", {
        // regx: regexPhone,
        // minlength: 9,
        phonenumber: true,
    });
})
