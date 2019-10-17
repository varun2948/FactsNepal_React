import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import axios from "axios";

const ServiceItem = ({ service, index }) => {
  if (!(index % 2)) {
    return (
      <div className="row section-padding">
        <Fade bottom duration={1000} distance={"20px"} delay={1000}>
          <div className="col-md-4 o1">
            <div className="service-list__imgholder text-center">
              <img src={service.image} alt={service.title} />
            </div>
          </div>
        </Fade>
        <Fade bottom duration={1000} distance={"20px"} delay={1500}>
          <div className="col-md-8 pl150 o2">
            <h3 key={index}>{service.title}</h3>
            <p>{service.description} </p>
          </div>
        </Fade>
      </div>
    );
  } else {
    return (
      <div className="row section-padding">
        <Fade bottom duration={1000} distance={"20px"} delay={1500}>
          <div className="col-md-8 o2" style={{ paddingRight: "150px" }}>
            <h3 key={index}>{service.title}</h3>
            <p>{service.description} </p>
          </div>
        </Fade>
        <Fade bottom duration={1000} distance={"20px"} delay={1000}>
          <div className="col-md-4 o1">
            <div className="service-list__imgholder text-center">
              <img src={service.image} alt={service.title} />
            </div>
          </div>
        </Fade>
      </div>
    );
  }
};

class ServicePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      services: []
    };
  }

  componentDidMount() {
    axios.get(`${process.env.API_URL}/api/servicesapi`).then(response => {
      this.setState({
        services: response.data[0].services
      });
      console.log(this.state.services);
    });
  }
  render() {
    const { services } = this.state;

    return (
      <div>
        <section className="service-top section-padding">
          <div className="container">
            <div className="">
              <div className="row align-items-center">
                <Fade bottom duration={1000} distance={"20px"} delay={500}>
                  <div className="col-md-7">
                    <h2 className="white ">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </h2>
                    <p className="white big overtext">
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type specimen
                      book. It has survived not only five centuries, but also
                      the leap into electronic typesetting, remaining
                      essentially unchanged Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,.{" "}
                    </p>
                    <button className="btn btn-primary btn-lg heroleft__btn revert  mt30">
                      {" "}
                      <span className="fom"> Find Out More</span>
                      <i className="la la-arrow-right" />
                    </button>
                  </div>
                </Fade>
                <Fade bottom duration={1000} distance={"20px"}>
                  <div className="col-md-5 text-center hidesm">
                    <img src="img/services.png" alt="services" />
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </section>
        <section className="service-list">
          <div className="container">
            {services.map((service, index) => (
              <ServiceItem service={service} index={index} key={service.id} />
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default ServicePage;
