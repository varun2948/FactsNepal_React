import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import { Helmet } from "react-helmet";
import MobileAppDownloads from "../components/HomePage/MobileAppDownloads/MobileAppDownloads";
import {
  FacebookShareButton,
  FacebookIcon,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';
import TimeAgo from 'react-timeago';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Fact from "../components/HomePage/Fact/Fact";
import NavBar from "../components/NavBar/NavBar";

const headerData = {
  headers: {
    "Content-Type": "application/json",
    "X-CSRF-TOKEN": "TuJoRzMGXIzBhy3OH8JJXFmoegsooPSCB5dnw5q4",
    "X-Requested-With": "XMLHttpRequest"
  }
};

export default class FactsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      nav3: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
      nav3: this.slider3
    });
    const { number } = this.props.match.params


    // console.log(facts);
    // axios.get(`${process.env.API_URL}/api/factapi`).then(response => {
    //   const newFacts = response.data[0].home.map(fact => ({
    //     ...fact,
    //     likeUpdated: false
    //   }));
    //   this.setState({
    //     facts: newFacts
    //   });
    //   console.log("fact State", this.state.facts);
    // });
  }

  // componentWillUnmount() {
  //   localStorage.clear();
  // }

  handleLike = id => {
    // const fact = this.state.facts.find(fact => fact.id === id);
    // if (!fact.likeUpdated) {
    //   const postData = {
    //     method: "POST",
    //     name: id,
    //     type: "json",
    //     data: {
    //       post_id: id,
    //       post_like: 1
    //     },
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json"
    //     }
    //   };

    //   axios
    //     .post(`${process.env.API_URL}/api/POST_like`, postData, headerData)
    //     .then(response => {
    //       const updatedFacts = [...this.state.facts];
    //       const filteredFact = updatedFacts.find(fact => fact.id === id);
    //       filteredFact.like += 1;
    //       filteredFact.likeUpdated = true;
    //       this.setState({
    //         facts: updatedFacts
    //       });
    //     })
    //     .catch(err => console.log("handleLike err", err));
    // }
  };

  render() {
    const shareUrl = window.location.href;
    const { facts_data } = this.props.location
    // console.log(facts_data);

    if (facts_data) {
      window.localStorage.setItem('facts', JSON.stringify(facts_data));

    }
    // const title = 'GitHub';
    const facts = localStorage.getItem('facts') && JSON.parse(localStorage.getItem('facts'));
    console.log(facts, 'facts');
    return (
      // <div className="col-md-8 offset-md-2 relative allfacts">
      //   {facts.map((fact, index) => (
      //     <div
      //       className="factsod"
      //       style={
      //         facts.length - 1 === index
      //           ? { borderRadius: "8px" }
      //           : { marginBottom: "16px", borderRadius: "8px" }
      //       }
      //       key={fact.id}
      //     >
      //       <Fact
      //         fact={fact}
      //         handleLike={handleLike}
      //         likeUpdated={fact.likeUpdated}
      //       />
      //     </div>
      //   ))}
      // </div>
      <Fragment>
        <NavBar noBg={true} />
        <div>
          <div className="banner-content">
            <div className="container">
              <div className="top-content-wrap pdb-25">
                <div className="top-wrapper">
                  <span className="title span-16">{facts.category_title}</span>
                  <h3 className="h3-title">{facts.title}</h3>
                  <span className="title-date span-14"><TimeAgo date={facts.public_date} /></span>
                </div>
              </div>

              <div className="mid-content-wrap pdb-25">
                <div className="slider-carousel">

                  <div className="slider slider-for">
                    <Slider
                      asNavFor={this.state.nav3}
                      ref={slider => (this.slider1 = slider)}
                    >
                      <figure className="portrait-fix">
                        <img src={facts.image} alt="cereal-crop1" />
                      </figure>
                      {
                        facts && facts.multiple_images &&
                        facts.multiple_images.map((data, key) => {
                          return (<li key={key} className="image-content" >
                            <figure className="portrait-fix">
                              <img src={data.thumbnailImageUrl} alt="cereal-crop1" />
                            </figure>
                          </li>)
                        })

                      }

                    </Slider>
                  </div>


                  <div className="slider slider-nav">
                    <Slider
                      asNavFor={this.state.nav1}
                      ref={slider => (this.slider2 = slider)}
                      slidesToShow={2}
                      swipeToSlide={true}
                      focusOnSelect={true}

                    >
                      {/* 
                      <div className="image-content">
                        <figure>
                          <img src={facts.image} alt="cereal-crop1" />
                        </figure>
                      </div> */}
                      {
                        facts ?
                          facts && facts.multiple_images &&
                          facts.multiple_images.map((data, key) => {
                            return (
                              <div key={key} className="image-content">
                                <figure>
                                  <img src={data.thumbnailImageUrl} alt="cereal-crop1" />
                                </figure>
                              </div>)
                          }) :
                          ""

                      }

                    </Slider>
                  </div>


                  <div className="slider slider-for slider-content pdt-40">
                    <Slider
                      asNavFor={this.state.nav1}
                      ref={slider => (this.slider3 = slider)}
                      slidesToShow={1}
                      swipeToSlide={true}
                      focusOnSelect={true}
                      arrows={false}
                    >
                      {
                        facts && facts.multiple_images &&
                        facts.multiple_images.map((data, key) => {
                          return (
                            <div key={key} className="image-content">
                              <p className="factsNepal-para">{data.thumbnailImageDesc}</p>
                            </div>)
                        })

                      }
                    </Slider>
                  </div>

                </div>

              </div>

              <div className="bottom-content-wrap pdt-100 pdb-80">
                <div className="social-icon">
                  <span className="span-14">Shares</span>
                  <div className="social-icon-wrap">
                    <Helmet>
                      {/* <link rel="canonical" href={window.location.href} /> */}
                      {/* <title>Test React Helmetp</title>
                      <meta property="og:url" content="http://139.59.67.104:3000/facts/3" data-react-helmet="true" />
                      <meta property="og:type" content="article" data-react-helmet="true" />
                      <meta property="og:title" content="Varun Title Helmet" data-react-helmet="true" />
                      <meta property="og:description" content="Varun Description Helmet" data-react-helmet="true" />
                      <meta property="og:image"
                        content="https://images.unsplash.com/photo-1575305422825-77afccb6c73d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                        data-react-helmet="true" /> */}

                      {/* <meta name="image" content={facts.image} /> */}
                    </Helmet>
                    <div className="fb-share-button" data-href={window.location.href} data-layout="button_count" data-size="small"><a target="_blank" href={"https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href) + "&t=" + document.title} className="fb-xfbml-parse-ignore"><FacebookIcon
                      size={32}
                      round /></a></div>
                    {/* <a href=""><figure><img src="./img/facebook-letter-logo.svg" alt="facebook-letter-logo" /></figure></a>
                    <a href="#"><figure><img src="./img/008-twitter.svg" alt="twitter" /></figure></a>
                    <a href="#"><figure><img src="./img/linkedin-logo.svg" alt="linkedin-logo" /></figure></a> */}
                  </div>
                </div>
              </div>
            </div>

          </div>


          <div className="grid-section-whole pdt-40 pdb-115">
            <div className="container">

              <div className="grid-section">

                <div className="grid-title-wrap">
                  <h4 className="factsNepal-subtitle">Next facts</h4>
                </div>

                <div className="grid-facts1 pdt-40">
                  <div className="wrap">
                    <div className="row">
                      <div className="col-7 offset-3 col-sm-8 offset-sm-2 offset-md-0 col-md-4">
                        <a href="#" className="grid-col-link">
                          <div className="grid-col" id="left">
                            <figure className="facts1-img">
                              <img className="grid-img" src="./img/crops production.png" alt="crops-production" />
                            </figure>
                            <div className="content-wrap">
                              <span className="title span-12">Agriculture</span>
                              <span className="gridcol-title span-22">Crops Production</span>
                              <span className="title-date span-14">8h ago</span>
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="col-7 offset-3 col-sm-8 offset-sm-2 offset-md-0 col-md-4">
                        <a href="#" className="grid-col-link">
                          <div className="grid-col" id="mid">
                            <figure className="facts1-img">
                              <img className="grid-img" src="./img/internet-usage-statistics.png" alt="internet-usuage-statistics" />
                            </figure>
                            <div className="content-wrap">
                              <span className="title span-12 span-color">Communication</span>
                              <span className="gridcol-title span-22">Internet Usage <br />Statistics</span>
                              <span className="title-date span-14">2d ago</span>
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="col-7 offset-3 col-sm-8 offset-sm-2 offset-md-0 col-md-4">
                        <a href="#" className="grid-col-link">
                          <div className="grid-col" id="right">
                            <figure className="facts1-img">
                              <img className="grid-img" src="./img/crops production.png" alt="crops-production" />
                            </figure>
                            <div className="content-wrap">
                              <span className="title span-12">Agriculture</span>
                              <span className="gridcol-title span-22">Crops Production</span>
                              <span className="title-date span-14">8h ago</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
        <MobileAppDownloads techBg={true} />
      </Fragment >
    );
  }
}
