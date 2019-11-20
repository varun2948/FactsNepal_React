import React, { Component } from 'react';

class GeographicalCoverage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <section className="geographical-coverage-details pdt-60 pdb-50">
                <div className="container">
                    <div className="geographical-details-wrap">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="details-left">
                                    <h3 className="factsNepal-title">Geographical coverage</h3>
                                    <p className="factsNepal-para">We have carried out research projects in over 60 districts (out of 75) across Nepal.</p>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="details-right">
                                    <div className="details-right-content">
                                        <button>Explore Map</button>
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