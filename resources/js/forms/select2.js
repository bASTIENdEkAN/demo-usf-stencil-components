import $ from 'jquery';
import select2 from 'select2';

function matchCustom(params, data) {
   // If there are no search terms, return all of the data
   if ($.trim(params.term) === '') {
     return data;
   }

   // Do not display the item if there is no 'text' property
   if (typeof data.text === 'undefined') {
     return null;
   }
   // console.log(params.term.toUpperCase())
   // `params.term` should be the term that is used for searching
   // `data.text` is the text that is displayed for the data object
   if (data.text.indexOf(params.term.substr(0,1).toUpperCase()+params.term.substr(1)) > -1) {
     var modifiedData = $.extend({}, data, true);
     // modifiedData.text += ' (matched)';

     // You can return modified objects from here
     // This includes matching the `children` how you want in nested data sets
     return modifiedData;
   }

   // Return `null` if the term should not be displayed
   return null;
}

$('.select2').each(function(){
    let $this = $(this);
    let placeholder = $this.data('placeholder');

    $this.select2({
        allowClear: false,
        minimumResultsForSearch: -1,
        placeholder: placeholder,
    });
});
//SEARCH
$('.select2.with-search').each(function(){
    let $this = $(this);
    let placeholder = $this.attr('placeholder');

    $this.select2({
        allowClear: false,
        placeholder: placeholder,
        matcher: matchCustom,
        matcher: function (params, data) {
            if ($.trim(params.term) === '') {return data;}
            if (data.text.toUpperCase().indexOf(params.term.toUpperCase()) > -1) {var modifiedData = $.extend({}, data, true);return modifiedData;}
            return null;
        }
    });
});

$('.select2').on('select2:select', function (e) {
   // $(this).parent().find('.error').hide();
   $(this).removeClass('error').addClass('valid');
   // $(this).parent().find('label.error').remove();
});

// ANDROID REMOVE
if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $('.select2').each(function(){
        let $this = $(this);
        let placeholder = $this.data('placeholder');
        console.log(placeholder);
        console.log($this.find('option[disabled][selected]'));
        $this.find('option[disabled][selected]').append(placeholder);

        $this.parents(".select2-container").addClass("select");
        $this.removeClass('select2');
        $('.select').removeClass("select2-container");

        if ($this.data('select2')) {
           $this.select2('destroy');
         }

    })




}
