$(document).ready(function () {

    /* toggle-button & menu dropdown */
    $('.toggle-button').on('click', function() {
        // console.log("hehre");
        $(this).toggleClass('active')
        $('#nav-links').toggle();
    })

    $('.slider-image-container').slick({
        
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        focusOnSelect: true,
        // autoplay: true,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },

            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },

            {
              breakpoint: 992,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },

            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },

            {   
                breakpoint: 575,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
          ]
    });

    $('.testimonial-slider').slick({
        
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        focusOnSelect: true,
        // autoplay: true,
    });

    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      centerMode: true,
      focusOnSelect: true
    });

    $(":radio").click(function() {
      // $(this).closest("div.inputform").css({top: 200, left: 200, position:'absolute'});
      $(this).closest("div.inputform").addClass("active").
      siblings("div.inputform.active").removeClass("active");
    });

    $(".image-content").hover(function(){
      $(figure).css("background-color", "yellow");
    });

    /* equal height js for general-info div( 2 divs) */
    function minHeight (){
      var programmeHeight = $('.fact-info-wrap').innerHeight();
      $('.public-poll-info-wrap').css({'min-height': programmeHeight});
      var winWidth = $( window ).width();
      if(winWidth <= 767){
        $('.public-poll-info-wrap').css({'min-height': 'auto'});
      }
     
    }
   minHeight();

  /* equal height js for grid-fact1 div( 3 divs) */
  function minHeight (){
    var programmeHeight = $('.grid-mid').innerHeight();
    $('.grid-lr').css({'min-height': programmeHeight});
    var winWidth = $( window ).width();
    if(winWidth <= 767){
      $('.grid-lr').css({'min-height': 'auto'});
    }
   
  }
  minHeight();

  /* equal height js for general-info div( 3 divs) */
  function minHeight (){
    var programmeHeight = $('.resources-grid-rght').innerHeight();
    $('.resouces-grid-mid').css({'min-height': programmeHeight});
    $('.resouces-grid-lft').css({'min-height': programmeHeight});
    var winWidth = $( window ).width();
    if(winWidth <= 767){
      $('.resources-grid-mid').css({'min-height': 'auto'});
      $('.resources-grid-lft').css({'min-height': 'auto'});
    }
   
  }
  minHeight();

})
