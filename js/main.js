$(document).ready(function () {

    // counter up js

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // scroll to top js

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".scroll_to_top").fadeIn();
        } else {
            $(".scroll_to_top").fadeOut();
        }
    });

    $(".scroll_to_top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });

    // progress bar js

    var offsetTop = $('#skill_part').offset().top;
    $(window).scroll(function () {
        var height = $(window).height();
        if ($(window).scrollTop() + height > offsetTop) {
            $('.skill-per').each(function () {
                var $this = $(this);
                var per = $this.attr('per');
                $this.css("width", per + '%');
            });
        }
    });


    // sticky top js

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".sticky_top").addClass("menu_bg");
        } else {
            $(".sticky_top").removeClass("menu_bg");
        }
    });

    // Smooths scrolling
    $('body').scrollspy({
        target: ".navbar",
        offset: 50
    });

    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 45
                }, 1500);
                return false;
            }
        }
    });

    // wow js

    new WOW().init();

    // typed js

    $(".typed").typed({
        strings: ["Web Application Developer.", "Mobile Application Developer.", "Graphics Designer."],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 30,
        // time before typing starts
        startDelay: 1200,
        // backspacing speed
        backSpeed: 20,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: 100,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function () {},
        // starting callback function before each string
        preStringTyped: function () {},
        //callback for every typed string
        onStringTyped: function () {},
        // callback for reset
        resetCallback: function () {}
    });

    // preloader js

    $(window).on("load", function () {
        $(".main_preloader").delay(2000).fadeOut(500);
    });
    
    // responsive menu js
    
    $(".openNav").click(function(){
        $(".mobile_menu .overlay").show(400);
    });
    
    $(".closeNav").click(function(){
        $(".mobile_menu .overlay").hide(400);
    });
    
    $(".mobile_menu .overlay .overlay_top a h2").click(function(){
        $(".mobile_menu .overlay").hide(400);
    });
    
    $(".mobile_menu .overlay .overlay_content ul li a").click(function(){
        $(".mobile_menu .overlay").hide(400);
    });


});
