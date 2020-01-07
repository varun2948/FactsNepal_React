import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import axios from "axios";
import FeedbackForm from "./FeedbackForm";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sitedata: {},
      isSubmitted: false
    };
  }
  handler = () => {
    this.setState({
      isSubmitted: true
    });
  };
  componentDidMount() {
    // axios.get(`${process.env.API_URL}/api/siteapi`).then(response => {
    //   this.setState({
    //     sitedata: response.data[0].sitedata[0]
    //   });
    // });
  }
  render() {
    return (
      // <Fade bottom duration={1000} delay={600} distance={"0px"}>
      <section className="form-section pdt-111 pdb-50">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="form-left">
                <Fade bottom duration={600} delay={400} distance={"0px"}>
                  <div className="circle sphere-gradient1 form-sphere"></div>
                  <div className="form-left-title">
                    <div className="circle sphere-gradient1 form-sphere"></div>
                    <h3 className="headline2">Ready to get the Facts?</h3>
                    <span className="caption">
                      Fill in this form or send us an e-mail.
                    </span>
                  </div>
                </Fade>
                <div className="form-wrap">
                  <Fade bottom duration={900} delay={600} distance={"0px"}>
                    <FeedbackForm handler={this.handler} />
                  </Fade>
                  {/* <span className="copyright">© 2019<span className="subtitle"> FACTS Research & Analytics.</span></span> */}
                </div>
              </div>
            </div>
            <div className="col-12 offset-0 offset-md-1 col-md-5">
              <div className="form-right">
                <Fade bottom duration={800} delay={500} distance={"0px"}>
                  <div className="form-right-title">
                    <div className="circle sphere-gradient2 form-circle"></div>
                    <h3 className="headline2">Contact</h3>
                  </div>
                </Fade>
                <Fade bottom duration={900} delay={600} distance={"0px"}>
                  <div className="form-address">
                    <ul className="addr-list caption">
                      <li className="addr">
                        <span>
                          <img src="./img/24px (2).svg" alt="map" />
                        </span>
                        <span>
                          8973 NPC 678, 394-Radha Mohan Marga Minbhawan
                          Kharibot, Kathmandu, Nepal
                        </span>
                      </li>

                      <li className="addr">
                        <span>
                          <img src="./img/24px.svg" alt="phone " />
                        </span>
                        <span>+977-1-4469924</span>
                      </li>

                      <li className="addr">
                        <span>
                          <img src="./img/24px (1).svg" alt="phone" />
                        </span>
                        <span>
                          <a href="mailto: info@factsnepal.com">
                            info@factsnepal.com
                          </a>
                        </span>
                      </li>
                    </ul>
                    {/* <span><img src="./img/24px (2).svg" alt="map" /></span>
                  <span><img src="./img/24px.svg" alt="phone" /></span>
                  <span><img src="./img/24px (1).svg" alt="mail" /></span> */}
                  </div>
                </Fade>
                <Fade bottom duration={1000} delay={800} distance={"0px"}>
                  <div className="form-btn-wrap">
                    <span className="caption">
                      Available for your smartphone
                    </span>
                    <div className="circle sphere-gradient3 form-sphere"></div>
                    <div className="btn-content">
                      <a>
                        <img src="./img/appstore.png" alt="appstore" />
                      </a>
                      <a>
                        <img src="./img/googleplay.png" alt="googleplay" />
                      </a>
                    </div>
                  </div>
                  <div className="social-icon-wrap">
                    <a href="https://www.facebook.com/factsnepal/">
                      <figure>
                        <img src="./img/Social-media-icon (4).svg" alt="" />
                      </figure>
                    </a>
                    <a href="https://www.youtube.com/channel/UChsaoWvm30EN04vfeYGFWQQ/featured">
                      <figure>
                        <img src="./img/Social-media-icon (1).svg" alt="" />
                      </figure>
                    </a>
                    <a href="https://twitter.com/FACTSNepal">
                      <figure>
                        <img src="./img/Social-media-icon (2).svg" alt="" />
                      </figure>
                    </a>
                    <a href="https://www.linkedin.com/company/facts-research-&-analytics/about/">
                      <figure>
                        <img src="./img/Social-media-icon (5).svg" alt="" />
                      </figure>
                    </a>
                    <a href="https://www.instagram.com/naxanp">
                      <figure>
                        <img src="./img/Social-media-icon (3).svg" alt="" />
                      </figure>
                    </a>
                  </div>
                </Fade>
              </div>
            </div>
          </div>

          <div className="footer">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="footer-left">
                  <div className="circle orange-gradient form-sphere"></div>
                  <span className="copyright sm-caption">
                    © 2019
                    <span className="subtitle">
                      {" "}
                      FACTS Research & Analytics.
                    </span>
                  </span>
                </div>
              </div>
              <div className="col-12 offset-0 offset-md-1 col-md-5">
                <div className="footer-right">
                  <span className="site-design-title sm-caption">
                    Designed by <span className="site-design">NAXA</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      // </Fade>
    );
  }
}
export default Footer;
