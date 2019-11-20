import React, { Component } from 'react';

class PublicPoll extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="banner-content">

                <div className="container">

                    <div className="publicpoll-wrap mrt-100">
                        <div className="wrap-center">
                            <div className="title-wrap">
                                <span className="title-span span-14">Product</span>
                                <h3 className="publicpoll-title">Which brand of toothpaste do you use?</h3>
                                <div className="btn-wrap">
                                    <button>8 votes</button>
                                    <span className="title-date span-12">1 day ago</span>
                                </div>
                            </div>

                            <div className="publicpoll-group">
                                <form action="" className="publicpoll-form">
                                    <div className="form-group inputform">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" className="custom-control-input" id="customControlValidation1" name="radio-stacked" required />
                                            <label className="custom-control-label" htmlFor="customControlValidation1">Colgate</label>
                                        </div>
                                    </div>
                                    <div className="form-group inputform">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" className="custom-control-input" id="customControlValidation2" name="radio-stacked" required />
                                            <label className="custom-control-label" htmlFor="customControlValidation2">Pepsodent</label>
                                        </div>
                                    </div>
                                    <div className="form-group inputform">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" className="custom-control-input" id="customControlValidation3" name="radio-stacked" required />
                                            <label className="custom-control-label" htmlFor="customControlValidation3">Sensodyne</label>
                                        </div>
                                    </div>
                                    <div className="form-group inputform">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" className="custom-control-input" id="customControlValidation4" name="radio-stacked" required />
                                            <label className="custom-control-label" htmlFor="customControlValidation4">Others</label>
                                        </div>
                                    </div>
                                    <button className="btn span-10">Button</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default PublicPoll;