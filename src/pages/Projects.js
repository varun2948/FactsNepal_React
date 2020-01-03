import React, { Component } from "react";
import axios from "axios";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Testimonials from "../components/Testimonials/Testimonials";
import CaseStudyData from "../components/HomePage/CaseStudy/CaseStudyData";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      casestudy: []
    };
  }
  componentDidMount() {
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
      console.log(response[0].data.collaborators);
      const sliced2Collaborators = response[0].data.collaborators.slice(0, 2);
      this.setState({
        casestudy: sliced2Collaborators
      });
      // console.log(this.state.casestudy, "cs");
    });
  }
  render() {
    const { casestudy } = this.state;
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
            <CaseStudyData casestudy={casestudy} />
          </div>
        </section>
        <Testimonials />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Projects;
