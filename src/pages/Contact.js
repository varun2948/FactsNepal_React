import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <NavBar noBg={false} />
        <section className="banner contact-banner pdb-85">
          <div className="container">
            <div className="banner-wrap">
              <div className="title-block">
                <div className="title-wrap">
                  <h1 className="headline1">Contact</h1>
                  <p className="headline5">Feel free to contact us anytime</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Contact;
