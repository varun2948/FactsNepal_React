import React, { Component } from "react";

class GeographicalCoverage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="geographical-coverage-details pdt-47 pdb-47">
        <div className="container">
          <div className="geographical-details-wrap">
            <div class="sphere"></div>
            <div className="row">
              <div className="col-md-7">
                <div className="details-left">
                  <h3 className="headline2">Geographical coverage</h3>
                  <div className="para-center">
                    <p className="body-para">
                      We have carried out research projects in over 60 districts
                      (out of 75) across Nepal.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="details-right">
                  <div className="details-right-content">
                    {/* <button className="btn-case">Explore Map</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default GeographicalCoverage;
