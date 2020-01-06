import React, { Component } from "react";
import Slider from "react-slick";

export default class Trusted extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      arrows: false,
      speed: 2000,
      autoplaySpeed: 2000,
      slidesToShow: 5,
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
      <section
        className={`${
          this.props.pink == false ? "slider pdt-88" : "slider-section pdt-88"
        }`}
      >
        <div className="container">
          <span className="caption">Trusted by the best</span>
          <div className="slider pdb-115">
            <div className="slider-image-container">
              <Slider {...settings}>
                <div className="slider-img-item img-scale00">
                  <figure>
                    <img src="./img/1client-ekantipur.png" alt="" />
                  </figure>
                </div>
                <div className="slider-img-item">
                  <figure>
                    <img src="./img/2client-restless.png" alt="" />
                  </figure>
                </div>
                <div className="slider-img-item img-scale02">
                  <figure>
                    <img src="./img/4client-wwf.png" alt="" />
                  </figure>
                </div>
                <div className="slider-img-item img-scale03">
                  <figure>
                    <img src="./img/5client-bajekosekwa.png" alt="" />
                  </figure>
                </div>
                <div className="slider-img-item">
                  <figure>
                    <img src="./img/6client-philips.png" alt="" />
                  </figure>
                </div>
                <div className="slider-img-item">
                  <figure>
                    <img src="./img/7client-cocacola.png" alt="" />
                  </figure>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
