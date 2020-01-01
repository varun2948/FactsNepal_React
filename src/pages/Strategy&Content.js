import React, { Component, Fragment } from "react";
import Testimonials from "../components/Testimonials/Testimonials";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/HomePage/Footer/Footer";

export default class StrategyContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <NavBar noBg={false} />
        <section className="banner">
          <div className="container">
            <div className="banner-content-wrap">
              <div className="row">
                <div className="col-md-5 order-md-2">
                  <div className="title-wrap">
                    <div className="title-center">
                      <span className="span-subtitle span-16">
                        Strategy & Content Development
                      </span>
                      <h3 className="factsNepal-title banner-heading">
                        Planning, creation, delivery, and governance of content
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 order-md-1">
                  <div className="image-wrap">
                    <img src="./img/Service-illustion3.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="info-content service-second pdt-90 pdb-120">
          <div className="container">
            <div className="content-wrap">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <div className="info-heading">
                    <div className="info-center">
                      <span className="title-info span-22 service2-span">
                        We help in improving your overall business efficiency.
                      </span>
                      <p className="para-title factsNepal-para">
                        We also help our clients develop evidence-based
                        marketing, communications and management strategies, and
                        make strategic decisions that help in improving their
                        overall business efficiency.
                      </p>
                      <p className="para-title factsNepal-para">
                        We have a team of in-house experts and experienced
                        consultants who specialise in strategy and content
                        development based on our clients' needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="lists-heading">
                    <ul className="list-wrap">
                      <li className="list-item">
                        <figure>
                          <img src="./img/idea.svg" alt="" />
                        </figure>
                        <div>
                          <span>Business, Brand & Communication</span>
                        </div>
                      </li>

                      <li className="list-item">
                        <figure>
                          <img src="./img/undraw_agreement_aajr.svg" alt="" />
                        </figure>
                        <div>
                          <span>Mass Media & Public Relations</span>
                        </div>
                      </li>

                      <li className="list-item">
                        <figure>
                          <img src="./img/social-media.svg" alt="" />
                        </figure>
                        <div>
                          <span>Digital & Social Media</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Testimonials />
        <Footer />
      </Fragment>
    );
  }
}

// export default ResearchData;
