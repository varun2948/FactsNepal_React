import React, { Component, Fragment } from "react";
import Testimonials from "../components/Testimonials/Testimonials";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

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
              <div className="row no-gutters">
                <div className="col-md-5 order-md-2">
                  <div className="title-wrap">
                    <div className="title-center">
                      <span className="sec-caption">
                        Strategy & Content Development
                      </span>
                      <h3 className="headline2">
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
        <div className="info-content service-second pdt-150 pdb-119">
          <div className="container">
            <div className="content-wrap">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <div className="info-heading">
                    <div className="info-center">
                      <h3 className="headline3">
                        We help in improving your overall business efficiency.
                      </h3>
                      <p className="body-para">
                        We also help our clients develop evidence-based
                        marketing, communications and management strategies, and
                        make strategic decisions that help in improving their
                        overall business efficiency.
                      </p>
                      <p className="body-para">
                        We have a team of in-house experts and experienced
                        consultants who specialise in strategy and content
                        development based on our clients' needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="lists-heading">
                    <ul className="list-wrap body-para-second">
                      <li className="list-item ">
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
