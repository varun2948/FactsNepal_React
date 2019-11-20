import React, { Component } from 'react';

class MobileAppDownloads extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="tech-section pdt-130 pdb-120">
                <div className="container">
                    <div className="tech-section-wrap">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="tech-section-left">
                                    <div className="img-center">
                                        <img src="./img/smartphones.png" alt="smartphones" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="tech-section-right">
                                    <div className="tech-section-right-content">
                                        <h3 className="factsNepal-title">All the power of accurate and contextual data at your fingertips.</h3>
                                        <div className="btn-wrap">
                                            <span>Available for your smartphone</span>
                                            <div className="btn-content">
                                                <a><img src="./img/app-store (1).svg" alt="app-store" /></a>
                                                <a><img src="./img/google-play-badge (1).svg" alt="google-play" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default MobileAppDownloads;