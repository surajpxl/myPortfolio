$(document).ready(function(){
    $(window).scroll(function(){
         
        if(this.scrollY > 20){          // sticky navbar on scroll
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up 
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        
        $('html').css("scrollBehavior", "smooth");
    });

    
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

   
    var typed = new Typed(".typing", {          // typing text animation 
        strings: ["Web Developer", "Web Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Developer", "Web Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
$(window).on('scroll', function() {
    var scrollPos = $(document).scrollTop();
    $('.navbar .menu li a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navbar .menu li a').removeClass("active");
            currLink.addClass("active");
            currLink.css({
                "color": "yellow", // Set active link color to yellow
                "text-decoration": "underline", // Add underline
                "text-decoration-color": "blue" // Set underline color to grey
            });
        } else {
            currLink.removeClass("active");
            currLink.css({
                "color": "", // Reset color for non-active links
                "text-decoration": "" // Remove underline for non-active links
            });
        }
    });
});