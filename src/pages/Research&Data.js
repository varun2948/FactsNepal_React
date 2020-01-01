import React, { Component, Fragment } from "react";
import Testimonials from "../components/Testimonials/Testimonials";
import NavBar from "../components/NavBar/NavBar";

class ResearchData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <NavBar noBg={false} />
        <section className="banner pdt-40">
          <div className="container">
            <div className="banner-content-wrap">
              <div className="row">
                <div className="col-md-6">
                  <div className="title-wrap">
                    <div className="title-center">
                      <span className="sec-caption">
                        Research and data analysis
                      </span>
                      <h3 className="headline2">
                        Analyzing Data in quantitative and qualitative research
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="image-wrap">
                    <img src="./img/Service-illustion1.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="info-content pdt-126 pdb-126">
          <div className="container">
            <div className="content-wrap">
              <div className="row">
                <div className="col-md-6">
                  <div className="info-heading">
                    <div className="info-center">
                      <h3 className="headline3">
                        We provide our clients the customised research services
                        that are tailor-made for their requirements.
                      </h3>
                      <p className="body-para">
                        Using structured and semi-structured questionnaires,
                        in-depth interviews, focus group discussions, key
                        informant interviews, observations, and GIS mapping
                        among a number of others, we collect reliable and
                        contextual data that generate powerful insights.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-lists">
                    <ul className="info-list-wrap body-para-second">
                      <li className="list-item">Quantitative Research</li>
                      <li className="list-item">Qualitative research</li>
                      <li className="list-item">
                        Data collection(Qualitative & quantitative)
                      </li>
                      <li className="list-item">
                        Market/product feasibility Studies
                      </li>
                      <li className="list-item">Media research & monitoring</li>
                      <li className="list-item">
                        Brand/Product campaign pre-testing
                      </li>
                      <li className="list-item">Brand Perception studies</li>
                      <li className="list-item">
                        Evaluation Studoies(base-line, mid-line, end-line)
                      </li>
                      <li className="list-item">Pre/Post event analysis</li>
                      <li className="list-item">product/service ratings</li>
                      <li className="list-item">GIS mapping</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Testimonials />
      </Fragment>
    );
  }
}

export default ResearchData;
