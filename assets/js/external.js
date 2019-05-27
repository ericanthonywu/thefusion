AOS.init()
AOS.refresh();
$(function () {
    AOS.init()
    AOS.refresh();
    $(window).on('load', function() {
        AOS.refresh();
    });
    $(".listnav").click(function() {
        const id = $(this).data('go')
        $('html, body').animate({
            scrollTop: $(`#${id}`).offset().top
        }, 1000);
    });

    $('.center').slick({
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay:true,
        autoplaySpeed:5000,
        // prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        prevArrow:`<button type="button" class="slick-prev pull-left slick-arrow" style="" aria-disabled="false"></button>`,

        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 2,
                    autoplay:true,
                    autoplaySpeed:5000,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    autoplay:true,
                    autoplaySpeed:5000,
                }
            }
        ]
    });
    $('.client-carrousel').slick({
        infinite: true,
        centerMode: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay:true,
        autoplaySpeed:5000,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay:true,
                    autoplaySpeed:5000,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay:true,
                    autoplaySpeed:5000,
                }
            }
        ]
    });

    $('.hamburger').click(function () {
        $('.navmob').slideToggle(500)
        $(this).toggleClass('is-active')
        $('div.navheader').toggleClass('head-active')
    })
    if($(window).scrollTop() > 50){
        $('.navheader').css({
            '-webkit-transition': 'background-color 1000ms linear',
            '-ms-transition': 'background-color 1000ms linear',
            'transition': 'background-color 1000ms linear',
            "background-image": 'linear-gradient(to right bottom,#063E68,#08719B)',
        })
        $('.navbar').css({
            "margin-top":'16px',
        })

    }else{
        $('.navheader').removeAttr('style')
        // $('.navbar li').removeAttr('style')
        $('.navbar').removeAttr('style').css({float:"right"})

    }
    function replace_class_scroll(a,b,selector){
        if( $(window).scrollTop() === Number(a) || $(window).scrollTop() > Number(a) && $(window).scrollTop() < Number(b)) {
            $('.listnav').removeClass('active')
            $(`#list-${selector}`).addClass('active')
            $(`#list-${selector}-mobile`).addClass('active')
        }
    }
    function checkactivetab() {
        replace_class_scroll(0, 606, "home")
        replace_class_scroll(606, 1276, "about-us")
        replace_class_scroll(1276, 2531, 'how-we-work')
        replace_class_scroll(2521, 3319, 'our-specialities')
        replace_class_scroll(3306, 4736, 'portfolios')
        replace_class_scroll(4736, 6000, 'contact-us')
    }
    checkactivetab()
    $(window).on("scroll",function () {

        AOS.init()
        AOS.refresh()
        console.log($(window).scrollTop())
        //activenav
        checkactivetab()
        if($(window).scrollTop() > 50){
            $('.navheader').css({
                "background-image": 'linear-gradient(to right,#063E68,#08719B)',
            })
            $('.navbar').css({
                "margin-top":'16px',
            })

        }else{
            $('.navheader').removeAttr('style')
            // $('.navbar li').removeAttr('style')
            $('.navbar').removeAttr('style')

        }
    })
    $('#i-c').on('scroll', function(e){
        AOS.init();
        AOS.refresh()
    })

})