import React, { Component, Fragment } from "react";
import Testimonials from "../components/Testimonials/Testimonials";
import NavBar from "../components/NavBar/NavBar";
import axios from "axios";
import Moment from "react-moment";
var moment = require("moment");

class SingleCaseStudy extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const caseid = this.props.match.params.id;
    console.log(caseid, "id");
    Promise.all([
      axios({
        method: "GET",
        url: `${process.env.API_URL}api/casestudy`,
        headers: {
          "content-type": "application/json",
          Accept: "application/json"
        }
      })
    ]).then(response => {
      const casearray = response[0].data.collaborators;
      console.log(casearray);
      const filteredId = casearray.filter(data => data.id == caseid);
      this.setState({
        casestudy: filteredId
      });
    });
  }

  render() {
    const { casestudy } = this.state;
    return (
      <Fragment>
        <NavBar noBg={true} />
        {casestudy && casestudy[0] && (
          <Fragment>
            <section className="case-study case-project-study">
              <div className="container">
                <div className="case-study-wrap">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="case-study-image">
                        <figure className="figure-case-img">
                          <img src={casestudy[0].image} alt="" />
                        </figure>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="case-study-content">
                        <div className="case-study-content-wrap">
                          <span className="date-time">
                            <Moment
                              date={casestudy[0].issued_date}
                              format="Do MMMM YYYY"
                            />
                          </span>
                          <h3 className="factsNepal-title">
                            {casestudy[0].title}
                          </h3>
                          <div className="collab-group">
                            <span className="title">Collaborators</span>
                            <div className="collab-row">
                              <div className="row">
                                <div className="col-6 col-sm-6 col-md-5">
                                  <div className="collab-span">
                                    <span>Geeta Pradhan</span>
                                    <span>Ratna Shrestha</span>
                                    <span>Abhina Adhikari</span>
                                    <span className="collab-org">
                                      VSO Nepal
                                    </span>
                                  </div>
                                </div>
                                <div className="col-6 col-sm-6 offset-sm-0 offset-md-1 col-md-5">
                                  <div className="collab-span">
                                    <span>Prabodh Acharya</span>
                                    <span>Nabin Rawal</span>
                                    <span className="collab-org">
                                      FACTS Research & Analytics
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="collab-row">
                              <div className="row">
                                <div className="col-6 col-sm-6 col-md-5">
                                  <div className="collab-span">
                                    <span>Nwabisa Shai</span>
                                    <span className="collab-org">SAMRC</span>
                                  </div>
                                </div>
                                <div className="col-6 col-sm-6 offset-sm-0 offset-md-1 col-md-5">
                                  <div className="collab-span">
                                    <span>Alice Kerr-Wilson</span>
                                    <span className="collab-org">
                                      Social Development Direct
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="intro-section">
              <div className="container">
                <div className="wrap">
                  <h3 className="factsNepal-sectitle">Introduction</h3>
                  {/* {casestudy[0].introduction} */}
                  <p className="factsNepal-secpara">
                    Traditional family structure is grounded in patriarchal
                    values of male dominance over women and respect for elders
                    in Nepal.
                  </p>
                  <p className="factsNepal-para">
                    Women and girls are disadvantaged by discriminatory
                    traditional practices. Male migration is a dominant source
                    of employment and livelihoods. Remittances play an important
                    macroeconomic role; amounting to 29.2% of GDP in Nepal
                    (World Bank, 2016). Women and girls’ social positions and
                    migration contribute to unequal power relations, limited
                    livelihoods, and exposure to DV and IPV.
                  </p>
                </div>
              </div>
            </section>

            <section className="objective-section">
              <div className="container">
                <div className="wrap">
                  <h3 className="factsNepal-sectitle">
                    Aim of the presentation
                  </h3>
                  {/* <div
                    dangerouslySetInnerHTML={{
                      __html: casestudy[0].aims_topic
                    }}
                  ></div> */}
                  <p className="factsNepal-para">
                    To share the preliminary findings from the formative
                    research conducted among communities engaged in migrant
                    labour in Baglung district of Nepal.{" "}
                  </p>
                  <p className="factsNepal-para para">The study explored:</p>
                  <div className="obj-lists">
                    <ul>
                      <li>
                        <span>
                          <img src="./img/24px (check-circle).svg" alt="" />
                        </span>
                        <span className="factsNepal-para">
                          the nature of VAWG and its effects
                        </span>
                      </li>
                      <li>
                        <span>
                          <img src="./img/24px (check-circle).svg" alt="" />
                        </span>
                        <span className="factsNepal-para">
                          the community response to VAWG
                        </span>
                      </li>
                      <li>
                        <span>
                          <img src="./img/24px (check-circle).svg" alt="" />
                        </span>
                        <span className="factsNepal-para">
                          the linkages between economic conditions and VAWG
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section className="conclude-section">
              <div className="container">
                <div className="wrap">
                  <h3 className="factsNepal-sectitle">
                    Discussion, Conclusion and Recommendation
                  </h3>
                  <ul>
                    <li>
                      <span>
                        <img src="./img/24px (check-circle).svg" alt="" />
                      </span>
                      <span className="factsNepal-para">
                        The family is the most critical place to change gender
                        norms
                      </span>
                    </li>
                    <li>
                      <span>
                        <img src="./img/24px (check-circle).svg" alt="" />
                      </span>
                      <span className="factsNepal-para">
                        Need for interventions to provide effective support
                        mechanisms for abused women and girls
                      </span>
                    </li>
                    <li>
                      <span>
                        <img src="./img/24px (check-circle).svg" alt="" />
                      </span>
                      <span className="factsNepal-para">
                        Need for interventions to provide effective support
                        mechanisms for abused women and girls
                      </span>
                    </li>
                    <li>
                      <span>
                        <img src="./img/24px (check-circle).svg" alt="" />
                      </span>
                      <span className="factsNepal-para">
                        Need for interventions to provide effective support
                        mechanisms for abused women and girls
                      </span>
                    </li>
                  </ul>
                  <div className="btn-wrap">
                    <form method="get" action={casestudy[0].file_url}>
                      <button type="submit">
                        <span>
                          <img src="./img/save_alt-24px.svg" alt="" />
                        </span>
                        Download PPT
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </Fragment>
        )}
        <Testimonials />
      </Fragment>
    );
  }
}

export default SingleCaseStudy;
