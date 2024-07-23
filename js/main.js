
function main() {

(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 50
          }, 900);
          return false;
        }
      }
    });

    // Show Menu on Book
    $(window).bind('scroll', function() {
      var navHeight = $(window).height() - 500;
      if ($(window).scrollTop() > navHeight) {
        $('.navbar-default').addClass('on');
      } else {
        $('.navbar-default').removeClass('on');
      }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });

    // Hide nav on click
    $(".navbar-nav li a").click(function (event) {
      // check if window is small enough so dropdown is created
      var toggle = $(".navbar-toggle").is(":visible");
      if (toggle) {
        $(".navbar-collapse").collapse('hide');
      }
    });
	
  	// Portfolio isotope filter
    $(window).load(function() {
      var $container = $('.portfolio-items');
      $container.isotope({
        filter: '.lawn',
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
      $('.cat a').click(function() {
        $('.cat .active').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
          }
        });
        return false;
      });
    });
	
    // Nivo Lightbox 
    $('.portfolio-item a').nivoLightbox({
      effect: 'slideDown',  
      keyboardNav: true,                            
    });
		
    // Testimonial Slider
    $(document).ready(function() {
      $("#testimonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
      });
    });	

}());

}
main();

// Hide and Show Gallery
function toggleGallery() {
  var x = document.getElementById("gallery");
  var y = document.getElementById("viewbutton");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.innerHTML = "Hide Gallery";
  } else {
    x.style.display = "none";
    y.innerHTML = "View Gallery";
  }
}

// Show Quote
function toggleQuote() {
  var x = document.getElementById("quote");
  var y = document.getElementById("viewquote");
  if (x.style.display === "none") {
    y.style.display = "none";
    x.style.display = "block";
  }
}

// Switch Pages
function changeToPrivacy(){
  window.location.href = "privacy-policy.html";
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function changeToHome(){
  window.location.href = "index.html";
}

function toggleVisibility(){
  var element = document.getElementById("menu");
  if (element.style.backgroundColor === "rgba(248, 248, 248, 0)") {
    element.style.backgroundColor = "#333";
  } else {
    element.style.backgroundColor = "rgba(248, 248, 248, 0)";
  }
}