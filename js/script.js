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

    function minHeight (){
      var programmeHeight = $('.fact-info').innerHeight();
      $('.public-poll-info').css({'min-height': programmeHeight});
      var winWidth = $( window ).width();
      if(winWidth <= 767){
        $('.public-poll-info').css({'min-height': 'auto'});
      }
     
    }
   minHeight();

   function minHeight (){
    var programmeHeight = $('.grid-mid').innerHeight();
    $('.grid-lr').css({'min-height': programmeHeight});
    var winWidth = $( window ).width();
    if(winWidth <= 767){
      $('.grid-lr').css({'min-height': 'auto'});
    }
   
  }
 minHeight();

})
