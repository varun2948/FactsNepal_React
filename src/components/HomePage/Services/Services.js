import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";

class Services extends Component {
  state = {
    services: []
  };

  componentDidMount() {
    // axios
    //   .get(`${process.env.API_URL}api/servicesapi`)
    //   .then(res => {
    //     console.log("res", res);
    //     this.setState({ services: res.data[0].services });
    //   })
    //   .catch(err => console.log("Services Err", err));
  }

  render() {
    const { services } = this.state;
    return (
      // <section className="services">
      <section className="grid-section-whole pdt-113 pdb-134">
        <div className="container">
          <div className="grid-section">
            <div className="grid-title-wrap pdb-85">
              <span className="sec-caption">SERVICES</span>
              <h3 className="headline2">
                Bridging information asymmetry through real, transparent data &
                statistics
              </h3>
            </div>
            <div className="grid-content">
              <div className="grid-container">
                <div className="row">
                  <div className="col-md-4">
                    <Link
                      to={{
                        pathname: `/researchdata`
                      }}
                    >
                      <div className="grid-col">
                        <figure className="fig">
                          <img
                            className="bg-img bg-lg-img"
                            src="./img/ICON-shape2.svg"
                          />
                          <img
                            className="grid-img"
                            src="./img/Services-icon-1.svg"
                            alt="visual data"
                          />
                          <img
                            className="bg-img bg-sm-img"
                            src="./img/ICON-shape1.svg"
                          />
                        </figure>
                        <h4 className="headline4">
                          Research & <br></br> Data Analysis
                        </h4>
                        <div className="para-center">
                          <p className="body-para">
                            Analyzing data in quantitative and qualitative
                            Research
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-4">
                    <Link
                      to={{
                        pathname: `/strategycontent`
                      }}
                    >
                      <div className="grid-col">
                        <figure className="fig bg-alter">
                          <img
                            className="bg-img bg-lg-img"
                            src="./img/ICON-shape2.svg"
                          />
                          <img
                            className="grid-img"
                            src="./img/Services-icon-2.svg"
                            alt="file searcrhing"
                          />
                          <img
                            className="bg-img bg-sm-img"
                            src="./img/ICON-shape1.svg"
                          />
                        </figure>
                        <h4 className="headline4">
                          Strategy & <br></br> Development
                        </h4>
                        <div className="para-center">
                          <p className="body-para">
                            Planning, creation, delivery and governance of
                            content
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-4">
                    <Link
                      to={{
                        pathname: `/infographics`
                      }}
                    >
                      <div className="grid-col mb-0">
                        <figure className="fig bg-alter-left">
                          <img
                            className="bg-img bg-lg-img"
                            src="./img/ICON-shape2.svg"
                          />
                          <img
                            className="grid-img"
                            src="./img/Services-icon-3.svg"
                            alt="file searcrhing"
                          />
                          <img
                            className="bg-img bg-sm-img"
                            src="./img/ICON-shape1.svg"
                          ></img>
                        </figure>
                        <h4 className="headline4">
                          Infographics <br></br> Design
                        </h4>
                        <div className="para-center">
                          <p className="body-para">
                            Supplying you with relevant of information in
                            graphic
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      // </section>
    );
  }
}

export default Services;
