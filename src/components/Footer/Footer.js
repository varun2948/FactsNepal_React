import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import axios from "axios";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sitedata: {}
    };
  }

  componentDidMount() {
    axios.get(`${process.env.API_URL}/api/siteapi`).then(response => {
      this.setState({
        sitedata: response.data[0].sitedata[0]
      });
    });
  }
  render() {
    const { sitedata } = this.state;
    return (
      <div>
        <Fade bottom duration={1000} delay={600} distance={"0px"}>
          <footer>
            <section className="footer-top">
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <figure>
                      <img src="img/factslogo.png" alt="Facts Nepal" />
                    </figure>
                  </div>
                  <div className="col-md-3">
                    <h6>Find Out More</h6>
                    <div className="footer-links">
                      <a href="#" className="footer-links__item no-decoration ">
                        {" "}
                        Home
                      </a>
                      <a href="#" className="footer-links__item no-decoration ">
                        {" "}
                        About
                      </a>
                      <a href="#" className="footer-links__item no-decoration ">
                        {" "}
                        Services
                      </a>
                      <a href="#" className="footer-links__item no-decoration ">
                        {" "}
                        Works
                      </a>
                      <a href="#" className="footer-links__item no-decoration ">
                        {" "}
                        Contact
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="contat-footer">
                      <h6> Contact Us</h6>
                      <div className="contact-footer__item">
                        <i className="la la-phone" />
                        <span> {sitedata.mobileno}</span>
                      </div>
                      <div className="contact-footer__item">
                        <i className="la la-phone" />
                        <span> {sitedata.phoneone}</span>
                      </div>
                      <div className="contact-footer__item">
                        <i className="la la-envelope" />
                        <span>
                          {" "}
                          {sitedata.email
                            ? sitedata.email
                            : sitedata.sikiptocontent}
                        </span>
                      </div>
                      <div className="contact-footer__item">
                        <i className="la la-map-marker" />
                        <span> {sitedata.addressone}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="download-btn">
                      <h6> Download Our App</h6>
                      <div className="flex linkHolder">
                        <a href="" className="no-decoration download-btn__item">
                          {" "}
                          <img
                            src="img/assets/googleplay.png"
                            alt="google Play"
                          />
                        </a>
                        <a href="" className="no-decoration download-btn__item">
                          {" "}
                          <img
                            src="img/assets/appstore.png"
                            alt="google Play"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </footer>
        </Fade>
      </div>
    );
  }
}
export default Footer;
