import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import axios from "axios";
import Service from "./Service";
import Particles from "react-particles-js";

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
            <div class="grid-title-wrap pdb-85">
              <span class="sec-caption">SERVICES</span>
              <h3 class="headline2">Bridging information asymmetry through real, transparent data & statistics</h3>
            </div>
            <div className="grid-content">
              <div className="grid-container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="grid-col">
                      <figure className="fig">
                        <img className="bg-img bg-lg-img" src="./img/ICON-shape2.svg" />  
                        <img className="grid-img" src="./img/Services-icon-1.svg" alt="visual data" />
                        <img className="bg-img bg-sm-img" src="./img/ICON-shape1.svg" />
                      </figure>
                      <h4 class="headline4">Research & <br></br> Data Analysis</h4>
                        <div class="para-center">
                            <p class="body-para">Analyzing data in quantitative and qualitative Research</p>
                        </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="grid-col">
                      <figure className="fig bg-alter">
                        <img className="bg-img bg-lg-img" src="./img/ICON-shape2.svg" />
                        <img className="grid-img" src="./img/Services-icon-2.svg" alt="file searcrhing" />
                        <img className="bg-img bg-sm-img" src="./img/ICON-shape1.svg" />
                      </figure>
                      <h4 class="headline4">Strategy & <br></br> Development</h4>
                      <div class="para-center">
                          <p class="body-para">Planning, creation, delivery and governance of content</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="grid-col mb-0">
                      <figure className="fig bg-alter-left">
                        <img class="bg-img bg-lg-img" src="./img/ICON-shape2.svg" />
                        <img className="grid-img" src="./img/Services-icon-3.svg" alt="file searcrhing" />
                        <img className="bg-img bg-sm-img" src="./img/ICON-shape1.svg"></img>
                      </figure>
                      <h4 class="headline4">Infographics <br></br> Design</h4>
                      <div class="para-center">
                          <p class="body-para">Supplying you with relevant of information in graphic</p>
                      </div>
                    </div>
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
