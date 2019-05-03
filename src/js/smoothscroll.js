  (function($) {
  $('a[href*=\\#]:not([href=\\#])').click(function() 
  {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) 
    {
      var self = $(this);
      var target = $(this.hash);
      headerHeight = $(".primary-header").height(); // Get fixed header height
            
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) 
      {
        $('html,body').animate({
          scrollTop: target.offset().top - headerHeight
        }, 600);
        return false;
      }
    }
  });
})(jQuery);  


var sections = $('section')
  , nav = $('nav')
  , nav_height = $(".primary-header").height(), nav_brand = $('.navbar-brand');
 
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
 
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
        
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
 
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

/* nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
 
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 500);
 
  return false;
}); */

$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
}); 
/* $(window).scroll(function() {
  var scrollDistance = $(window).scrollTop() - headerHeight;

  // Show/hide menu on scroll
  //if (scrollDistance >= 850) {
  //		$('nav').fadeIn("fast");
  //} else {
  //		$('nav').fadeOut("fast");
  //}

  // Assign active class to nav links while scolling
  $('section').each(function(i) {
      if ($(this).position().top <= scrollDistance) {
          $('.navbar .navbar-nav .nav-link').removeClass('active');
          $('.navbar .navbar-nav .nav-link').eq(i).addClass('active');
      }
  });
}); */

/* $('[data-spy="scroll"]').on('activate.bs.scrollspy', function () {
  $('.navbar-nav .nav-link').addClass('activeLink');
}) */


/* $('.navbar-nav .nav-link').click(function tabClick(){
            $('.navbar-nav .nav-link').removeClass('activeLink');
            $(this).addClass('activeLink');
        }); */
       
           /* $('.nav li a').click(function(e) {
                
                $('.nav li.activeLink').removeClass('activeLink');
                var $parent = $(this).parent();
                $parent.addClass('activeLink');
                e.preventDefault();
            }); */
            /*$(".nav .nav-link").on("click", function(){
                $(".nav").find(".active").removeClass("active");
                $(this).addClass("active");
             });*/

        /*$('.navbar-brand').click(function(){
            $('.navbar-nav .nav-link').removeClass('activeLink');
        });*/

         