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
        <section className="banner banner-rd banner-rd2">
          <div className="circle orange-gradient sphere1"></div>
          <div className="circle red-gradient sphere2"></div>
          <div className="circle pink-gradient sphere3"></div>
          <div className="container">
            <div className="banner-content-wrap">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <div className="title-wrap">
                    <div className="title-center">
                      <span className="sec-caption">
                        Infographics Design
                      </span>
                      <h3 className="factsNepal-title banner-heading">
                        Supplying you with relevant of information in graphic
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="image-wrap service3-img-wrap">
                    <img src="./img/Service-illustion2.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="info-content service-third pdt-148 pdb-110">
          <div className="container">
            <div className="content-wrap">
              <div className="heading-wrap">
                <div className="span-center">
                    <h3 className="headline3">Data in its raw form is, in most cases, complex, vast and highly intricate.</h3>
                </div>
                <p className="body-para-second">
                    Quantitative data is usually served by numeric values on tables and charts, whereas qualitative findings tend to delve deeper and frequently encompasses textual information.
                </p>
              </div>
              <div className="row">
      <div className="col-12 col-md-6">
        <p className="para-width-first body-para">
            But the biggest problem about data is its presentation and communication with an audience. The sheer complexity and limited ways of presentation makes the communication of data rather challenging. This is where FACTS' expertise comes in.
        </p>
      </div>
      <div className="col-12 col-md-6">
          <p className="para-width-second body-para">
              Our team of researchers and designers are not only familiar with data presentation, but they have a vast experience in the same. We have been publishing data in the form of visual representations, better known as infographics, to present data in a form that is simple and easy to understand by the masses. We take data from our clients, pick out the important portions, ‘the juice’, and design simple, contextual and impactful infographics, for the general public as well as specific target audience of the client.
          </p>
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
