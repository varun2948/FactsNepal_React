import React, { Component } from "react";
import axios from "axios";
import Initiative from "./Initiative";

class Initiatives extends Component {
  state = {
    initiatives: []
  };

  componentDidMount() {
    axios
      .get(`${process.env.API_URL}/api/inititivesapi`)
      .then(response => {
        this.setState({
          initiatives: response.data[0].ourinititives
        });
      })
      .catch(err => console.log("Initiative Err", err));
  }

  render() {
    const { initiatives } = this.state;
    return (
      <section className="section-padding-y initiatives relative">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="left-title">
                <h3>Our Initiatives</h3>
                <p>
                  several of them er asked how satisfied they are with our
                  services. here are their statement
                </p>
              </div>
            </div>
            <div className="col-md-9 leftpadding">
              <div className="row five">
                {initiatives.map(initiative => (
                  <Initiative initiative={initiative} key={initiative.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Initiatives;
