import React, { Component } from "react";
import Slider from "react-slick";

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="testimonials-section pdt-120 pdb-120">
        <div className="container">
          <div className="testimonials-title">
            <span className="section-caption">TESTIMONIALS</span>
            <h3 className="factsNepal-title">
              Meet a few of our happy partners
            </h3>
          </div>
          <div className="testimonials-content">
            <div className="testimonials-content-center">
              <div className="silder testimonial-slider-content">
                <Slider {...settings}>
                  <div className="para-wrap">
                    <h4 className="factsNepal-subtitle">
                      Awesome! Superb team work and very professional.
                      Shockingly accurate! Very fine Infographics, illustrations
                      and videos. Work is really great, keep going!
                    </h4>
                    <img
                      className="quote-img"
                      src="./img/quote.svg"
                      alt="quote"
                    />
                    <div className="span-testimonials-wrap">
                      <span className="testimonial-name">
                        Krishna Prasad Sharma
                      </span>
                      <span className="testimonial-position">
                        CEO, Him Electronics
                      </span>
                    </div>
                    <div className="testimonial-slider-item">
                      <img src="./img/7client-cocacola.png" alt="cocacola" />
                    </div>
                  </div>
                  <div className="para-wrap">
                    <h4 className="factsNepal-subtitle">
                      Awesome! Superb team work and very professional.
                      Shockingly accurate! Very fine Infographics, illustrations
                      and videos. Work is really great, keep going!
                    </h4>
                    <img
                      className="quote-img"
                      src="./img/quote.svg"
                      alt="quote"
                    />
                    <div className="span-testimonials-wrap">
                      <span className="testimonial-name">
                        Shyam Prasad Thapa
                      </span>
                      <span className="testimonial-position">
                        Managing Director, Roses Foundation
                      </span>
                    </div>
                    <div className="testimonial-slider-item">
                      <img src="./img/7client-cocacola.png" alt="cocacola" />
                    </div>
                  </div>
                  <div className="para-wrap">
                    <h4 className="factsNepal-subtitle">
                      Awesome! Superb team work and very professional.
                      Shockingly accurate! Very fine Infographics, illustrations
                      and videos. Work is really great, keep going!
                    </h4>
                    <img
                      className="quote-img"
                      src="./img/quote.svg"
                      alt="quote"
                    />
                    <div className="span-testimonials-wrap">
                      <span className="testimonial-name">Kamal Kaki</span>
                      <span className="testimonial-position">
                        Founder, Fullbright International
                      </span>
                    </div>
                    <div className="testimonial-slider-item">
                      <img src="./img/7client-cocacola.png" alt="cocacola" />
                    </div>
                  </div>
                  <div className="para-wrap">
                    <h4 className="factsNepal-subtitle">
                      Awesome! Superb team work and very professional.
                      Shockingly accurate! Very fine Infographics, illustrations
                      and videos. Work is really great, keep going!
                    </h4>
                    <img
                      className="quote-img"
                      src="./img/quote.svg"
                      alt="quote"
                    />
                    <div className="span-testimonials-wrap">
                      <span className="testimonial-name">Shruti Paudel</span>
                      <span className="testimonial-position">
                        CEO, Himalaya Construction Company
                      </span>
                    </div>
                    <div className="testimonial-slider-item">
                      <img src="./img/7client-cocacola.png" alt="cocacola" />
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonials;
