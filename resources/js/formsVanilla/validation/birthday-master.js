import $ from "jquery";
// https://date-fns.org/
import format from "date-fns/format";

// #BIRTHDAY OF THE DEATH
// #BIRTHDAY OF THE DEATH
// #BIRTHDAY OF THE DEATH
let date = new Date();
let m = format(date, 'M')
let y = format(date, 'yyyy');

let $year = $('#year');
let $month = $('#month');
let $day = $('#day');
let $fullInputBirthday = $('#day, #month, #year');
let $isBirthdayKiller = $('.is-birthday-master');
let minAge = $isBirthdayKiller.data("min-age");
let maxAge = $isBirthdayKiller.data("max-age");

$isBirthdayKiller.on('click', function(){
    $(this).find('#day').focus();
})
$day.on('click', function(e){
    e.stopPropagation();
    $(this).focus();
})
$month.on('click', function(e){
    e.stopPropagation();
    $(this).focus();
})
$year.on('click', function(e){
    e.stopPropagation();
    $(this).focus();
})

$.validator.addMethod('birthdaykiller', function (value, element) {
    if( $isBirthdayKiller[0].hasAttribute('data-required') ){

        if (value > 0 && value <= 32 && value.length == 2){
            if($month.val() == '' || $year.val() == ''){
                return false;
            }else{

                if($month.val() > 0 && $month.val() <= 12){

                    if($year.val() > (y - maxAge) && $year.val() <= (y - minAge)){
                        return true;

                    }else{
                        return false;
                    }

                }else{
                    return false;
                }

            }
        }

    }else{
        if (value > 0 && value <= 32 && value.length == 2){
            if($month.val() == '' || $year.val() == ''){
                return false;
            }else{

                if($month.val() > 0 && $month.val() <= 12){

                    if($year.val() > (y - maxAge) && $year.val() <= (y - minAge)){
                        return true;

                    }else{
                        return false;
                    }

                }else{
                    return false;
                }

            }
        }

        if( value == '' && $month.val() == '' && $year.val() == ''){
            return true;
        }
    }


    return false;
},$day.data('error-msg'));

// DAYS KEYDOWN
$day.bind('keyup','keydown', function(e){
    let $this = $(this);
    // if(e.which !== 2) {
        let numChars = $this.val().length;
        if($this.val().length >= 2) {
            $month.focus();
            $this.val($this.val().slice(0, 2));
            // $('.input.is-birthday-master').find('slash.is-first').css('margin-left','0');
            return false;
        }else{
            // $('.input.is-birthday-master').find('slash.is-first').css('margin-left','-2px');
        }
    // }
});

// MONTH KEYDOWN
$month.bind('keyup','keydown', function(e){
    let $this = $(this);
    // if(e.which !== 2) {
        let numChars = $this.val().length;
        if($this.val().length >= 2) {
            $year.focus();
            $this.val($this.val().slice(0, 2));
            $('.input.is-birthday-master').find('.slash.is-second').css('margin-left','-0.1333333333em');
            return false;
        }else{
            $('.input.is-birthday-master').find('.slash.is-second').css('margin-left','0.3333333333em');
        }
    // }
});
// YEAR KEYDOWN
$year.bind('keyup','keydown', function(e){
    let $this = $(this);
    // if(e.which !== 2) {
        let numChars = $this.val().length;
        if($this.val().length >= 4) {
            $day.focus();
            $this.val($this.val().slice(0, 4));
            return false;
        }
    // }
});

// DISABLE COPYPAST AND LETTER
$fullInputBirthday.keypress(function (e) {
    let regex = new RegExp("^[0-9]+$");
    let str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }else{
        e.preventDefault();
        // alert('Please Enter Alphabate');
        return false;
    }
});

$fullInputBirthday.on("cut copy paste",function(e) {
  e.preventDefault();
});

$('input').on('blur', function(){
    setTimeout(function(){
        if( $day.hasClass('error') ){
            $isBirthdayKiller.addClass('error');
        }else{
            $isBirthdayKiller.removeClass('error');
        }
    }, 10)

})

$day.rules("add", {
    birthdaykiller: true,
});
