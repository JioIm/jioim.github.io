$(function () {

    $('#main').fullpage({
        anchors: ["intro", "p1", "p2", "p3", "p4", "p5", "p6", "system", "graphic", "training", "profile"],
        menu: '.custom_nav',
        scrollOverflow: false,
        navigation: false,
        // paddingTop: '40px',

        afterRender: () => {
            mainVisualLine();
        },

        afterLoad: function (origin, destination, direction, trigger) {
            //destination.index === 0 && mainVisualLine();
            if (destination.index === 0) {
                $('.f_wrap').addClass('on');
                $('.custom_nav li').removeClass('active');


            } else {
                $('.f_wrap').removeClass('on');
                $('.custom_nav li').eq(destination.index).addClass('active');
            }
            // $('.custom_nav li').removeClass('active');
            // $('.custom_nav li').addClass('active');
        },

        onLeave: function (origin, destination, direction, trigger) {
            destination.index === 0 && mainVisualLine();
        },


        responsiveWidth: 768,
        responsiveHeight: 800,


    });

    $('.custom_nav li').click(function () {
        var index = $(this).index() + 1;
        $.fn.fullpage.moveTo(index);
    });



    $('.training .slide_menu>.itm').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('on').siblings().removeClass('on');
    });

});





function mainVisualLine() {
    const m = document.querySelector('.mainVisual .tit p em')
    const tl = gsap.timeline();
    tl.from(m, {
        width: 0,
        duration: 2,
        delay: 1
    })
}

