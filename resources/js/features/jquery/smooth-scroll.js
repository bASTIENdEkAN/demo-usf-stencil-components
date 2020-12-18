
import $ from 'jquery';

$('a[href^="#"]').click(function(){

    let $this = $(this);
    let thisId = $(this).attr("href");

    if( $this.attr("data-anime") != undefined){
        let thisAttrAnime = $this.attr("data-anime");
        $('html, body').animate({
            scrollTop:$(thisId).offset().top
        }, parseInt(thisAttrAnime) );
    }else{
        $('html, body').animate({
            scrollTop:$(thisId).offset().top
        }, 500);
    }

    return false;
});
