import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/HomePage/Footer/Footer";
import Testimonials from "../components/Testimonials/Testimonials";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <NavBar noBg={false} />
        <section className="banner project-banner">
          <div className="container">
            <div className="banner-wrap">
              <div className="row">
                <div className="col-md-6">
                  <div className="title-block">
                    <div className="title-wrap">
                      <h1 className="banner-title pdb-25">We find solutions</h1>
                      <p className="banner-content">
                        Offering total research solutions, customised according
                        to the client’s needs
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="image-content">
                    <figure>
                      <img src="./img/updated-organized.svg" alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="case-study">
          <div className="container">
            <div className="case-study-wrap pdb-130">
              <div className="row">
                <div className="col-md-6">
                  <div className="case-study-image">
                    <figure className="figure-case-img">
                      <img
                        src="./img/bags-best-friends-daylight-1516440.png"
                        alt=""
                      />
                    </figure>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="case-study-content">
                    <div className="case-study-content-wrap">
                      <span className="date-time">July 2014</span>
                      <h3 className="factsNepal-title">
                        Student Perceptions of Leadership, Accountability, and
                        Governance of Student Leaders and Unions
                      </h3>
                      <p className="factsNepal-para">
                        The National Youth Policy has recognized that youth are
                        an invaluable asset to the nation, acknowledging youths’
                        role as agents of economic, social, and political
                        change.
                      </p>
                      <span className="caption">Funded by</span>
                      <div className="img-wrap">
                        <img
                          className="sub-span-img"
                          src="./img/SFCG_newlogo-960x170.png"
                          alt="Search for Common Ground"
                        />
                      </div>
                      <button className="btn-case">
                        <span>Read Case Study</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="case-study-wrap">
              <div className="row">
                <div className="order-2 order-sm-2 order-md-1 col-md-6">
                  <div className="case-study-content">
                    <div className="case-study-content-wrap">
                      <span className="date-time">September 2016</span>
                      <h3 className="factsNepal-title">
                        Exploring the nature of VAWG, and its effects among
                        migrant labour communities in Baglung district, Nepal
                      </h3>
                      <p className="factsNepal-para">
                        This presentation shares the preliminary findings from
                        the formative research conducted among communities
                        engaged in migrant labour in Baglung district of Nepal.
                      </p>
                      <div className="logo-wrap">
                        <div className="logo-mid">
                          <img src="./img/vso.png" alt="vso" />
                          <img
                            src="./img/south-african-medical-research-council-samrc-vector-logo.png"
                            alt="samrc"
                          />
                          <img src="./img/sdd_logo.png" alt="sdd" />
                        </div>
                      </div>
                      <button className="btn-case">
                        <span>Read Case Study</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="order-1 order-sm-1 order-md-2 col-md-6">
                  <div className="case-study-image">
                    <figure className="figure-case-img">
                      <img
                        src="./img/matteo-vegetti-myanmar-06-monastery-kitchen.png"
                        alt=""
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Testimonials />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Projects;