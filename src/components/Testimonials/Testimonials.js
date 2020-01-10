import React, { Component } from "react";
import Slider from "react-slick";
import axios from "axios";
import TestimonialsItem from "./TestimonialsItem";
class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonials: []
    };
  }

  componentDidMount() {
    Promise.all([
      axios({
        method: "GET",
        url: `${process.env.API_URL}api/testimonials`,
        headers: {
          "content-type": "application/json",
          Accept: "application/json"
        }
      })
    ]).then(response => {
      console.log(response[0].data);
      // const sliced2Collaborators = response[0].data.collaborators.slice(0, 2);
      this.setState({
        testimonials: response[0].data
      });
      // console.log(this.state.casestudy, "cs");
    });
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 0);
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

    const { testimonials } = this.state;
    return (
      <div className="testimonials-section pdt-91 pdb-91">
        <div className="container">
          <div className="testimonials-title">
            <span className="sec-caption">TESTIMONIALS</span>
            <h3 className="headline2">Meet a few of our happy partners</h3>
          </div>
          {/* <div className="testimonials-content">
            <div className="testimonials-content-center">
              <div className="silder testimonial-slider-content">
                <Slider ref="slick" {...settings}>
                  {testimonials &&
                    testimonials.map((data, key) => {
                      return <TestimonialsItem data={data} />;
                    })}
                </Slider>
              </div>
            </div>
          </div> */}
          {/* <div className="slider slider-for slider-content pdt-40"> */}
          <Slider {...settings}>
            {testimonials &&
              testimonials.map((data, key) => {
                return <TestimonialsItem data={data} />;
              })}
          </Slider>
          {/* </Slider> */}
        </div>
      </div>
    );
  }
}

export default Testimonials;
