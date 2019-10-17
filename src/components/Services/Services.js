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
    axios
      .get(`${process.env.API_URL}/api/servicesapi`)
      .then(res => {
        console.log("res", res);
        this.setState({ services: res.data[0].services });
      })
      .catch(err => console.log("Services Err", err));
  }

  render() {
    const { services } = this.state;
    return (
      <section className="services ">
        <Particles
          params={{
            particles: {
              number: {
                value: 40
              },
              size: {
                value: 3
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                }
              }
            }
          }}
        />
        <div className="serviceInner">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="left-title section-padding-y">
                  <h3 className="text-white overprimary mt-5 outservices">
                    Our Services
                  </h3>
                  <p className="text-white overprimary mt-3">
                    several of them er asked how satisfied they are with our
                    services. here are their statement
                  </p>
                </div>
              </div>
              <div className="col-md-9">
                <div className="row">
                  {services.map(service => (
                    <Service service={service} key={service.id} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
