import $ from "jquery";

$('input[data-required]').each(function(){
    let $this = $(this);
    let $thisAttr = $this.attr('data-required');

    $('input[data-required="'+$thisAttr+'-confirm"]').rules("add", {
        equalTo: $this
    })
});
