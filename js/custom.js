 jQuery(document).ready(function(){

    // menu toggle         
    jQuery('.togglebtn').click(function(){
        jQuery('body').toggleClass('menu_open');
    });
    
    //fixed header
    $(window).scroll(function() {
        var header = $('.header');
        var scroll = $(window).scrollTop();
        var homeScroll = 100;
        if (scroll > homeScroll) {
            header.addClass('fixed');
            jQuery('#return-to-top').fadeIn(300);
        } else {
            header.removeClass('fixed');
            jQuery('#return-to-top').fadeOut(300);
        }
    });

    // Bottom-top
    jQuery(function () {
        // scroll body to 0px on click
        jQuery('#return-to-top').click(function () {
            jQuery('body,html').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
    });        
});

// Progress Bar jQuery
document.addEventListener("DOMContentLoaded", function () {
 var e = document.querySelectorAll(".progress-bar");
 e.forEach(function (e) {
     let t = e.children[0],
         n = e.children[1],
         r = 0,
         i = t.getAttribute("data-count"),
         o = n.children[0];
     setInterval(function () {
         r < i && (r++, (t.innerHTML = r + "%"), (o.style.width = r + "%"));
     }, 1500 / i);
 });
});

// Active & Scroll Target Jquery
 $(document).ready(function () {
     $(document).on("scroll", onScroll);

     //smoothscroll
     $('nav > ul > li > a').click(function(){
     var target = $(this).attr('href');
     $('html, body').animate({scrollTop: $(target).offset().top-48}, 500);
     return false;

         $("nav > ul > li > a").click(function () {
             $("nav > ul > li > a").parents("li").removeClass('active');
         })
         $(this).addClass('active');

         var target = this.hash,
             menu = target;
         $target = $(target);
         $('html, body').stop().animate({
             'scrollTop': $(target).offset().top-50}, 500, 'swing', function () {
             window.location.hash = target;
             $(document).on("scroll", onScroll);
         });
     });
 });


 function onScroll(event){
     var scrollPos = $(document).scrollTop();
     $('nav > ul > li > a').each(function () {
         var currLink = $(this);
         var refElement = $(currLink.attr("href"));
         if (refElement.position().top-70 <= scrollPos && refElement.position().top-50 + refElement.height() > scrollPos) {
            $('nav > ul > li').removeClass("active");
             currLink.parents("li").addClass("active");
         }
         else{
             currLink.parents("li").removeClass("active");
         }
     });
 };

 
//loading page
if (jQuery("#loading-page").length > 0) {
    jQuery('body').addClass('pageloader');
      setTimeout(function() {
        jQuery('body').addClass('pageloaded');
        jQuery('body').removeClass('pageloader');
        // jQuery('#loading-page').fadeOut('slow');
  }, 3000);
}
