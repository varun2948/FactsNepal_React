$(document).ready(function () {

    /* toggle-button & menu dropdown */
    $('.toggle-button').on('click', function() {
        // console.log("hehre");
        $(this).toggleClass('active')
        $('#nav-links').toggle();
    })

    $('.dropdown-grid').click(function(){
      $('.grid-content').toggle('megamenu');
      
    });


    /* R&Dhtml slider */
    $('.slider-container').slick({
        
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: true,
      focusOnSelect: true,
      autoplay: true,
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
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },

          {
              breakpoint: 576,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
              }
          },

          {   
              breakpoint: 575,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
              }
          },
        ]
    });
    /* ---***---***---***---***---*** */


    /* index-slider */
    $('.slider-image-container').slick({
        
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        focusOnSelect: true,
        autoplay: true,
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
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },

            {   
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },

           
          ]
    });
    /* ---***---***---***---***---*** */


    /* testimonial-section slider */
    $('.testimonial-slider-content').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      autoplay: true,
      asNavFor: '.testimonial-slider'
    });
    $('.testimonial-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        focusOnSelect: true,
        autoplay: true,
    });
    /* ---***---***---***---***---*** */
    

    /* fact page slider */
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      autoplay: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      autoplay: true
    });
    /* ---***---***---***---***---*** */

    $(":radio").click(function() {
      // $(this).closest("div.inputform").css({top: 200, left: 200, position:'absolute'});
      $(this).closest("div.inputform").addClass("active").
      siblings("div.inputform.active").removeClass("active");
    });

     // Check #x
    $(":radio").click(function() {
      $(".custom-control-label").prop( "checked", true );
    })

    // Uncheck #x
    $(":radio").click(function() {
      $(".custom-control-label").prop( "checked", false);
    })

   /*  $(".image-content").hover(function(){
      $(figure).css("background-color", "yellow");
    }); */

  /* index page: --> general-info(to equalize 2divs*/
  function min_height() {
    var div1_height = $('.fact-info').height();
    var div2_height = $('.public-poll-info').height();

    if (div2_height < div1_height) {
      $('.public-poll-info').css({'min-height': div1_height});
    }
    console.log(div2_height);
  }
  $(document).ready(function(){
    min_height();
  });
  $(window).resize(function(){
    min_height();
  }); 

      
   /*fact page: --> three divs(to equalize three height) */
  function equal_height() {
  
    var mid_height = $('#mid').height();
    var left_height = $('#left').height();
    var right_height = $('#right').height();
    // console.log(div1_height);
   
    if (left_height < mid_height) {
      $('.left_height').css({'min-height': mid});
    }
    if (right_height < mid_height) {
      $('.right_height').css({'min-height': mid});
    }
    console.log(left_height);
    console.log(right_height);
    console.log(mid_height);
  }
  $(document).ready(function(){
      equal_height();
  });
  $(window).resize(function(){
      equal_height();
  });
    /* equal height js for general-info div( 2 divs) */
    /* function minHeight (){
      var programmeHeight = $('.fact-info-wrap').innerHeight();
      $('.public-poll-info-wrap').css({'min-height': programmeHeight});
      var winWidth = $( window ).width();
      if(winWidth <= 767){
        $('.public-poll-info-wrap').css({'min-height': 'auto'});
      }
    }
   minHeight(); */

  
 
  /* equal height js for grid-fact1 div( 3 divs) */
 /*   function minHeight (){
    var programmeHeight = $('.grid-mid').innerHeight();
    $('.grid-lr').css({'min-height': programmeHeight});
    var winWidth = $( window ).width();
    if(winWidth <= 767){
      $('.grid-lr').css({'min-height': 'auto'});
    }
   
  }
  minHeight();  */



})