$(document).ready(function() {

  // Logo animation after loading Greensock
  TweenMax.from(".logo", 2, {x:500, opacity:0, scale:0.5});

  // Inputmask jquery
  $('[data-mask]').inputmask();

  // Select style uijquery
  $('select').selectmenu();

  // isotope
  $('.tabs_block').isotope({
    itemSelector: '.tab_col',
    filter: ".kitchen"
  });

  $('.tabs_menu li').click(function(){
    var selector = $(this).attr('data-filter');

    $('.tabs_block').isotope({
      filter: selector,
    })

    $('.tabs_menu li.active').removeClass('active');
    $(this).addClass('active');
  });

  // set text on a circle 
  $(".name").lettering();

  // Slick slider

  $('.master-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.master-nav,.master-paging'
  });
  $('.master-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.master-for,.master-paging',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true
  });
  $('.master-paging').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.master-nav,.master-for',
    dots: false,
    vertical: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: 0,
    responsive: [
    {
      breakpoint: 992,
      settings: {
        vertical: false,
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
    ]
  });

  // Sticky header

  $(window).scroll(function() {
  if ($(document).scrollTop() >= 200) {
    $('.header_sticky').addClass("sticky");
  }
  else{
    $('.header_sticky').removeClass("sticky");
  }
});

  var navLink = $('.menu_js li a');

  navLink.on('click', function (event) {
    event.preventDefault();
    var target = $(this).attr('href');
    var top = $(target).offset().top;
    $('html, body').animate({scrollTop: top}, 500);
  })


  // AOS plagin
  AOS.init();

});

