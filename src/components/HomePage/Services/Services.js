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
      <div className="grid-section-whole pdb-120 pdt-115">
        <div className="container">
          <div className="grid-section">
            <div className="grid-title-wrap pdb-72">
              <span className="section-span pdb-40">SERVICES</span>
              <h3 className="factsNepal-title">Bridging information asymmetry through real, transparent data & statistics</h3>
            </div>
            <div className="grid-content">
              <div className="grid-container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="grid-col">
                      <figure className="fig">
                        <img className="grid-img" src="./img/Services-icon-1.svg" alt="visual data" />
                      </figure>
                      <h4 className="factsNepal-subtitle">Research & <br /> Data Analysis</h4>
                      <p className="factsNepal-para">Analyzing data in quantitative and qualitative Research</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="grid-col">
                      <figure className="fig">
                        <img className="grid-img" src="./img/Services-icon-2.svg" alt="file searcrhing" />
                      </figure>
                      <h4 className="factsNepal-subtitle">Strategy & <br /> Development</h4>
                      <p className="factsNepal-para">Planning, creation, delivery and governance of content</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="grid-col mb-0">
                      <figure className="fig">
                        <img className="grid-img" src="./img/Services-icon-3.svg" alt="file searcrhing" />
                      </figure>
                      <h4 className="factsNepal-subtitle">Infographics <br /> Design</h4>
                      <p className="factsNepal-para">Supplying you with relevant of information in graphic</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      // </section>
    );
  }
}

export default Services;
