import $ from "jquery";
import select2 from 'select2';

const selectFilled = ($this)=>{
    let val = $this.val();

    if(val != null){
        if(val.length > 0){
            $this.parents('.field').addClass('is-filled');
        }else{
            $this.parents('.field').removeClass('is-filled');
        }
    }



};


$('.select select, .select2').each(function () {
    selectFilled($(this));
});

$('.select select, select').on('change', function () {
    selectFilled($(this));
});

$('.select2').on('select2:select', function () {
    selectFilled($(this));
});
