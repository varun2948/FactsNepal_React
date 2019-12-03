import React, { Component, Fragment } from 'react';
import MobileAppDownloads from "../components/HomePage/MobileAppDownloads/MobileAppDownloads";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

class AllFactsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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
            <Fragment>
                <section className="banner">
                    <div className="container">
                        <div className="banner-wrap pdt-40">
                            <div className="title-block">
                                <div className="title-wrap">
                                    <h1 className="banner-title pdb-25">Get the Facts.</h1>
                                    <p className="banner-content">Discover reliable, contextual and actionable information &
                                insights</p>
                                </div>
                            </div>

                        </div>
                        <div className="slider pdt-100 pdb-20">
                            {/* <div className="slider-container"> */}
                            <Slider {...settings} >
                                {/* <div >
                                    <figure><img src="./img/all.svg" alt="" /></figure><span>All</span>
                                </div>
                                <div >
                                    <figure><img src="./img/all.svg" alt="" /></figure><span>fgsdf</span>
                                </div>
                                <div >
                                    <figure><img src="./img/all.svg" alt="" /></figure><span>gfsdf</span>
                                </div>
                                <div >
                                    <figure><img src="./img/all.svg" alt="" /></figure><span>dfg</span>
                                </div>  */}
                                <div className="slider-img-item red-bg">
                                    <figure><img src="./img/all.svg" alt="" /></figure><span>All</span>
                                </div>
                                <div className="slider-img-item green-bg">
                                    <figure><img src="./img/agriculture.svg" alt="" /></figure><span>Agriculture</span>
                                </div>
                                <div className="slider-img-item blue-bg">
                                    <figure><img src="./img/communication.svg" alt="" /></figure><span>Communication</span>
                                </div>
                                <div className="slider-img-item orange-bg">
                                    <figure><img src="./img/crime.svg" alt="" /></figure><span>Crime</span>
                                </div>
                                <div className="slider-img-item blue-bg">
                                    <figure><img src="./img/economy.svg" alt="" /></figure><span>Economy</span>
                                </div>
                                <div className="slider-img-item red-bg">
                                    <figure><img src="./img/all.svg" alt="" /></figure><span>New</span>
                                </div>
                            </Slider>
                        </div>
                        {/* </div> */}
                    </div>
                </section>


                <div className="grid-section-whole pdt-40 pdb-115">
                    <div className="container">

                        <div className="grid-section">
                            <div className="grid-title-wrap">
                                <h4 className="factsNepal-subtitle">Next facts</h4>
                            </div>

                            <div className="grid-facts1 pdt-40">
                                <div className="wrap pdb-60">
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

                                <div className="wrap">
                                    <div className="row">




                                        <div className="col-7 offset-3 col-sm-8 offset-sm-2 offset-md-0 col-md-4">
                                            <a href="#" className="grid-col-link">
                                                <div className="grid-col" id="left-l">
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
                                                <div className="grid-col" id="mid-m">
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
                                                <div className="grid-col" id="right-r">
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

                                <a href="#collapse-div" className="click-more link-toggle span-16 pdt-100">
                                    See More
                        </a>

                                <div id="collapse-div">
                                    <div className="wrap pdb-60">
                                        <div className="row">
                                            <div className="col-7 offset-3 col-sm-8 offset-sm-2 offset-md-0 col-md-4">
                                                <a href="#" className="grid-col-link">
                                                    <div className="grid-col" id="left-l">
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
                                                    <div className="grid-col" id="mid-m">
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
                                                    <div className="grid-col" id="right-r">
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

                                    <div className="wrap pdb-60">
                                        <div className="row">
                                            <div className="col-7 offset-3 col-sm-8 offset-sm-2 offset-md-0 col-md-4">
                                                <a href="#" className="grid-col-link">
                                                    <div className="grid-col" id="left-l">
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
                                                    <div className="grid-col" id="mid-m">
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
                                                    <div className="grid-col" id="right-r">
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

                                    <div className="wrap pdb-60">
                                        <div className="row">
                                            <div className="col-7 offset-3 col-sm-8 offset-sm-2 offset-md-0 col-md-4">
                                                <a href="#" className="grid-col-link">
                                                    <div className="grid-col" id="left-l">
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
                                                    <div className="grid-col" id="mid-m">
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
                                                    <div className="grid-col" id="right-r">
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
                </div>
                <MobileAppDownloads techBg={true} />
            </Fragment >
        );
    }
}

export default AllFactsPage;