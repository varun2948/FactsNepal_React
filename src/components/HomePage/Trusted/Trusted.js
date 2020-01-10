import React, { Component } from "react";
import Slider from "react-slick";
import axios from "axios";

export default class Trusted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trusted: [],
      slider_length: ""
    };
  }

  componentDidMount() {
    Promise.all([
      axios({
        method: "GET",
        url: `${process.env.API_URL}api/slider_list`,
        headers: {
          "content-type": "application/json",
          Accept: "application/json"
        }
      })
    ]).then(response => {
      // const sliced2Collaborators = response[0].data.collaborators.slice(0, 2);
      const slider_length =
        response[0].data.length > 5 ? 5 : response[0].data.length;
      this.setState({
        trusted: response[0].data,
        slider_length: slider_length
      });
      // console.log(this.state.casestudy, "cs");
    });
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
      slidesToShow: this.state.slider_length,
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
    const { trusted, slider } = this.state;
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
                {trusted &&
                  trusted.map((data, key) => {
                    return (
                      <div className="slider-img-item ">
                        <figure>
                          <img src={data.image} alt="" />
                        </figure>
                      </div>
                    );
                  })}

                {/* <div className="slider-img-item">
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
                </div> */}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
