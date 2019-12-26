import React, { Component } from "react";
import Slider from "react-slick";
import SliderItem from "../../components/AllFacts/SliderItem";

class CustomSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { category } = this.props;

    var settings = {
      dots: false,
      infinite: true,
      draggable: false,
      focusOnSelect: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Slider
        {...settings}
        // asNavFor={this.state.nav1}
        // ref={slider => (this.slider2 = slider)}
      >
        <SliderItem
          classname={"red-bg"}
          url="./img/all.svg"
          title="All"
          clickFunction={() => {
            this.props.categoryClick(0);
          }}
        />
        {category &&
          category.map(data => {
            return (
              <SliderItem
                classname={"blue-bg"}
                url={data.image}
                title={data.title}
                clickFunction={() => {
                  this.props.categoryClick(data.id);
                }}
                // category={data.id}
              />
            );
          })}
      </Slider>
    );
  }
}

export default CustomSlider;
