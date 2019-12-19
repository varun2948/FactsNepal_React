import React, { Component, Fragment } from "react";
import MobileAppDownloads from "../components/HomePage/MobileAppDownloads/MobileAppDownloads";
import Slider from "react-slick";
import NavBar from "../components/NavBar/NavBar";
import axios from "axios";
import ErrorBoundary from "../components/ErrorBoundary";
import { Link } from "react-router-dom";
import TimeAgo from "react-timeago";
import SliderItem from "../components/AllFacts/SliderItem";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

class AllFactsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facts: [],
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    Promise.all([
      axios.get(`${process.env.API_URL}api/factapi`)
      // axios.get(`${process.env.API_URL}/api/pollresultapi`)
    ]).then(response => {
      const newFacts = response[0].data[0].home.map(fact => ({
        ...fact
        // ...factoftheday,
      }));

      response[0].data[0].home = newFacts;
      // response[0].data[0].home = newFacts;

      this.setState({
        facts: response[0].data

        // pollResultApi: response[2].data
      });
      console.log(this.state.facts);
    });
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }
  render() {
    var settings = {
      dots: false,
      // className: "slider-container",
      infinite: true,
      focusOnSelect: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      // variableWidth: "206px",

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
    const { facts } = this.state;
    const AllSlider =
      facts &&
      facts[0] &&
      facts[0].category.map((data, key) => {
        <SliderItem classname={"red-bg"} url={"./img/all.svg"} title={"All"} />;
        // <SliderItem
        //   classname={"blue-bg"}
        //   url={"./img/all.svg"}
        //   title={"Agriculture"}
        // />
        // <SliderItem
        //   classname={"green-bg"}
        //   url={"./img/all.svg"}
        //   title={"Communication"}
        // />
        // <SliderItem
        //   classname={"orange-bg"}
        //   url={"./img/all.svg"}
        //   title={"Crime"}
        // />
        // <SliderItem
        //   classname={"blue-bg"}
        //   url={"./img/all.svg"}
        //   title={"Economy"}
        // />
        // <SliderItem
        //   classname={"green-bg"}
        //   url={"./img/all.svg"}
        //   title={"Finance"}
        // />
      });
    return (
      <ErrorBoundary>
        <Fragment>
          <NavBar />
          <section className="banner">
            <div className="container">
              <div className="banner-wrap pdt-40">
                <div className="title-block">
                  <div className="title-wrap">
                    <h1 className="banner-title pdb-25">Get the Facts.</h1>
                    <p className="banner-content">
                      Discover reliable, contextual and actionable information &
                      insights
                    </p>
                  </div>
                </div>
              </div>
              <section className="slider-facts-nav">
                <div className="slider pdt-100 pdb-20">
                  <div className="slider-container">
                    <Slider
                      {...settings}
                      asNavFor={this.state.nav1}
                      ref={slider => (this.slider2 = slider)}
                    >
                      {/* {facts[0].category.length > 0 &&
                      facts[0].category.map(data => {
                        return console.log("s");
                      })} */}
                    </Slider>
                  </div>
                </div>
              </section>
            </div>
          </section>

          <div className="grid-section-whole pdt-40 pdb-115">
            <div className="container">
              <div className="grid-section">
                {/* <div className="grid-title-wrap">
                <h4 className="factsNepal-subtitle">Next facts</h4>
              </div> */}
                <div className="grid-facts1 pdt-40">
                  <Slider
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)}
                  >
                    <div className="wrap pdb-60">
                      <div className="row">
                        <div className="col-7 offset-3 col-sm-8 offset-sm-2 offset-md-0 col-md-4">
                          <a href="#" className="grid-col-link">
                            <div className="grid-col" id="left">
                              <figure className="facts1-img">
                                <img
                                  className="grid-img"
                                  src="./img/crops production.png"
                                  alt="crops-production"
                                />
                              </figure>
                              <div className="content-wrap">
                                <span className="title span-12">
                                  Agriculture
                                </span>
                                <span className="gridcol-title span-22">
                                  Crops Production
                                </span>
                                <span className="title-date span-14">
                                  8h ago
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>

                        <div className="col-7 offset-3 col-sm-8 offset-sm-2 offset-md-0 col-md-4">
                          <a href="#" className="grid-col-link">
                            <div className="grid-col" id="mid">
                              <figure className="facts1-img">
                                <img
                                  className="grid-img"
                                  src="./img/internet-usage-statistics.png"
                                  alt="internet-usuage-statistics"
                                />
                              </figure>
                              <div className="content-wrap">
                                <span className="title span-12 span-color">
                                  Communication
                                </span>
                                <span className="gridcol-title span-22">
                                  Internet Usage <br />
                                  Statistics
                                </span>
                                <span className="title-date span-14">
                                  2d ago
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>

                        <div className="col-7 offset-3 col-sm-8 offset-sm-2 offset-md-0 col-md-4">
                          <a href="#" className="grid-col-link">
                            <div className="grid-col" id="right">
                              <figure className="facts1-img">
                                <img
                                  className="grid-img"
                                  src="./img/crops production.png"
                                  alt="crops-production"
                                />
                              </figure>
                              <div className="content-wrap">
                                <span className="title span-12">
                                  Agriculture
                                </span>
                                <span className="gridcol-title span-22">
                                  Crops Production
                                </span>
                                <span className="title-date span-14">
                                  8h ago
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="wrap">
                      <div className="row">
                        <div className="col-7 offset-3 col-sm-8 offset-sm-2 offset-md-0 col-md-4">
                          <a href="#" className="grid-col-link">
                            <div className="grid-col" id="left-l">
                              <figure className="facts1-img">
                                <img
                                  className="grid-img"
                                  src="./img/crops production.png"
                                  alt="crops-production"
                                />
                              </figure>
                              <div className="content-wrap">
                                <span className="title span-12">
                                  Agriculture
                                </span>
                                <span className="gridcol-title span-22">
                                  Crops Production
                                </span>
                                <span className="title-date span-14">
                                  8h ago
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>

                        <div className="col-7 offset-3 col-sm-8 offset-sm-2 offset-md-0 col-md-4">
                          <a href="#" className="grid-col-link">
                            <div className="grid-col" id="mid-m">
                              <figure className="facts1-img">
                                <img
                                  className="grid-img"
                                  src="./img/internet-usage-statistics.png"
                                  alt="internet-usuage-statistics"
                                />
                              </figure>
                              <div className="content-wrap">
                                <span className="title span-12 span-color">
                                  Communication
                                </span>
                                <span className="gridcol-title span-22">
                                  Internet Usage <br />
                                  Statistics
                                </span>
                                <span className="title-date span-14">
                                  2d ago
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>

                        <div className="col-7 offset-3 col-sm-8 offset-sm-2 offset-md-0 col-md-4">
                          <a href="#" className="grid-col-link">
                            <div className="grid-col" id="right-r">
                              <figure className="facts1-img">
                                <img
                                  className="grid-img"
                                  src="./img/crops production.png"
                                  alt="crops-production"
                                />
                              </figure>
                              <div className="content-wrap">
                                <span className="title span-12">
                                  Agriculture
                                </span>
                                <span className="gridcol-title span-22">
                                  Crops Production
                                </span>
                                <span className="title-date span-14">
                                  8h ago
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Slider>

                  <a
                    href="#collapse-div"
                    className="click-more link-toggle span-16 pdt-100"
                  >
                    See More
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* </div> */}

          <MobileAppDownloads techBg={true} />
        </Fragment>
      </ErrorBoundary>
    );
  }
}

export default AllFactsPage;
