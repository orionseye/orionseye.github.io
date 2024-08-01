(function ($) {
    "use strict";


        /*=========== Mobile Menu Open Control ============*/
        $(document).on('click','.logo-right-button .side-menu-open', function () {
            $('.side-nav-container').addClass('active');
        });

        /*=========== Mobile Menu Close Control ============*/
        $(document).on('click','.humburger-menu .side-menu-close', function () {
            $(".side-nav-container").removeClass('active');
        });
		
        /*====  side-widget-menu  =====*/
        $(document).on('click','.side-menu-wrap .side-menu-ul .sidenav__item .menu-plus-icon', function () {
            $(this).closest('.sidenav__item').siblings().removeClass('active').find('.side-sub-menu').slideUp(200);
            $(this).closest('.sidenav__item').toggleClass('active').find('.side-sub-menu').slideToggle(200);
            return false;
        });

        /* ======= Back to Top Button and Navbar Scrolling control ======= */
        $(document).on('click','#scroll-top', function () {
            $('html, body').animate({scrollTop:0},1000);
        });

        var scrollButton = $('#scroll-top');

        $(window).on('scroll', function () {
            //header fixed animation and control
            if($(window).scrollTop() > 0) {
                //$('.header-menu-area').addClass('header-fixed');
            }else{
                //$('.header-menu-area').removeClass('header-fixed');
            }

            //back to top button control
            if($(this).scrollTop()>= 300){
                scrollButton.show();
            }else{
                scrollButton.hide();
            }
        });


        /*====  accordion  =====*/
        $(document).on('click', '.accordion__title', function () {
            $(this).closest('.accordion-panel').siblings().removeClass('active').find('.accordion__content').slideUp(200);
            $(this).closest('.accordion-panel').toggleClass('active').find('.accordion__content').slideToggle(200);
            return false;
        });

})(jQuery);