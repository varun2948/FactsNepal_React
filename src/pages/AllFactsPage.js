import React, { Component, Fragment } from "react";
import MobileAppDownloads from "../components/HomePage/MobileAppDownloads/MobileAppDownloads";
import Slider from "react-slick";
import NavBar from "../components/NavBar/NavBar";
import axios from "axios";
import ErrorBoundary from "../components/ErrorBoundary";
import { Link } from "react-router-dom";
import TimeAgo from "react-timeago";
import SliderItem from "../components/AllFacts/SliderItem";
import Footer from "../components/Footer/Footer";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const headerData = {
  headers: {
    "Content-Type": "application/json",
    "X-CSRF-TOKEN": "TuJoRzMGXIzBhy3OH8JJXFmoegsooPSCB5dnw5q4",
    "X-Requested-With": "XMLHttpRequest"
  }
};

class AllFactsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facts: [],
      category: [],
      page: 1,
      categoryId: 0,
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    Promise.all([
      axios({
        method: "POST",
        url: `${process.env.API_URL}api/factapi?page=${this.state.page}`,
        headers: {
          "content-type": "application/json",
          Accept: "application/json"
        },
        data: {
          categories: this.state.categoryId // This is the body part
        }
      })
    ]).then(response => {
      console.log(response[0]);
      const categoryfacts = response[0].data[0].home.data.map(fact => ({
        ...fact
      }));

      response[0].data[0].home.data = categoryfacts;

      this.setState({
        facts: response[0].data[0].home.data,
        category: response[0].data[0].category
      });
      this.setState(prevState => ({
        page: prevState.page + 1
        // categoryId: this.state.categoryId
      }));
      // return console.log(this.state.page);
      console.log(this.state.category);
    });

    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }
  categoryClick = category => {
    console.log(category);
    const categoryid = category;
    // this.setState({ categoryId: category });
    // console.log(this.state.categoryId, "catestate");
    Promise.all([
      axios({
        method: "POST",
        url: `${process.env.API_URL}api/factapi?page=1`,
        headers: {
          "content-type": "application/json",
          Accept: "application/json"
        },
        data: {
          categories: category // This is the body part
        }
      })
    ]).then(response => {
      console.log(response[0].data[0].home.data);
      // const categoryfacts = response[0].data[0].home.data.map(fact => ({
      //   ...fact
      // }));

      // response[0].data[0].home.data = categoryfacts;

      this.setState({
        facts: response[0].data[0].home.data,
        page: 2,
        categoryId: category
      });

      console.log(this.state.facts);
    });
  };

  loadMore = () => {
    console.log(this.state);
    // if (this.state.page != 1) {
    Promise.all([
      axios({
        method: "POST",
        url: `${process.env.API_URL}api/factapi?page=${this.state.page}`,
        headers: {
          "content-type": "application/json",
          Accept: "application/json"
        },
        data: {
          categories: this.state.categoryId // This is the body part
        }
      })
    ]).then(response => {
      // const categoryfacts = response[0].data[0].home.data.map(fact => {
      //   return { ...fact };
      // });

      // response[0].data[0].home.data = categoryfacts;

      // this.setState({
      //   facts: this.state.facts.concat(response[0].data[0].home.data),
      //   page :
      // });
      this.setState(prevState => ({
        facts: prevState.facts.concat(response[0].data[0].home.data),
        page: prevState.page + 1
      }));
      console.log(this.state.facts);
    });
    // } else {
    //   alert("no-data");
    // }
  };
  render() {
    var settings = {
      dots: false,
      infinite: true,
      draggable: false,
      focusOnSelect: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      afterChange: index => this.categoryClick(index),

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

    const { facts, category } = this.state;

    return (
      <ErrorBoundary>
        <Fragment>
          <NavBar />
          <section className="banner">
            <div className="container">
              <div className="banner-wrap fact-banner-wrap">
                <div className="title-block">
                  <div className="title-wrap">
                    <h1 className="headline1">Get the Facts.</h1>
                    <p className="headline5">
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
                      // asNavFor={this.state.nav1}
                      // ref={slider => (this.slider2 = slider)}
                    >
                      <SliderItem
                        classname={"red-bg"}
                        url="./img/all.svg"
                        title="All"
                        clickFunction={() => {
                          this.categoryClick(0);
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
                                this.categoryClick(data.id);
                              }}
                              // category={data.id}
                            />
                          );
                        })}
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
                        {facts &&
                          facts.map(data => {
                            return (
                              <div className="col-7 offset-3 col-sm-8 offset-sm-2 offset-md-0 col-md-4">
                                <Link
                                  className="grid-col-link"
                                  to={{
                                    pathname: `/facts/${data.id}`
                                    // factid: data
                                  }}
                                >
                                  <div className="grid-col" id="left">
                                    <figure className="facts1-img">
                                      <img
                                        className="grid-facts-img"
                                        src={data.image}
                                        alt="crops-production"
                                      />
                                    </figure>
                                    <div className="content-wrap">
                                      <span className="sm-caption">
                                        {data.category_title}
                                      </span>
                                      <span className="headline4">
                                        {data.title}
                                      </span>
                                      <span className="caption">
                                        <TimeAgo date={data.public_date} />
                                      </span>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </Slider>
                  <div class="next-link-wrap">
                    <a>
                    <a
                      // href="#collapse-div"
                      onClick={this.loadMore}
                      className="click-more link-toggle"
                    >
                      See More
                    </a>
                      <figure><img src="./img/see-morelink.svg" alt="see more"></img></figure>

                    </a>

                  </div>
                
                </div>
              </div>
            </div>
          </div>

          {/* </div> */}

          <MobileAppDownloads techBg={true} />
          <Footer />
        </Fragment>
      </ErrorBoundary>
    );
  }
}

export default AllFactsPage;
