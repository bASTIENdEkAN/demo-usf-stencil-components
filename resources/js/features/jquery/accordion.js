import $ from "jquery";

$('.accordion').each(function(){
        let $this = $(this);
        let $cta = $this.find('.accordion-head');
        let $panel = $this.find('.accordion-content');

        $panel.css({
            'height': 0+'px',
        })

        $cta.on('click', function(){

            let panelHeight = $panel.find('.container').outerHeight();

            $('.accordion-content').css({
                'height': 0+'px',
            });

            if( !$this.hasClass('is-active')){

                $('.accordion').removeClass('is-active');

                $this.addClass('is-active');
                $panel.css({
                    'height': panelHeight+'px',
                })



            }else{

                $this.removeClass('is-active');
                $panel.css({
                    'height': 0+'px',
                })
            }

        });

});
