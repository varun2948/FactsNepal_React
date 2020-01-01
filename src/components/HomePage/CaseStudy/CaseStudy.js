import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";


const headerData = {
    headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": "TuJoRzMGXIzBhy3OH8JJXFmoegsooPSCB5dnw5q4",
        "X-Requested-With": "XMLHttpRequest"
    }
};

class CaseStudy extends Component {
    state = {};

    render() {
        return (
            <section className="case-study pdt-127 pdb-142">
                <div className="container">
                    <div className="case-study-wrap">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="case-study-image">
                                    <figure className="figure-case-img">
                                        <img src="./img/bags-best-friends-daylight-1516440.png" alt="" />
                                    </figure>
                                </div>
                            </div>
                        
                            <div className="col-md-6">
                                <div className="case-study-content">
                                    <div className="case-study-content-wrap">
                                        <span className="sub-caption">July 2014</span>
                                        <h3 className="headline2">Student Perceptions of Leadership, Accountability, and Governance of Student Leaders and Unions</h3>
                                        <p className="body-para">The National Youth Policy has recognized that youth are an invaluable asset to the nation, acknowledging youths’ role as agents of economic, social, and political change.</p>
                                        <span className="caption">Funded by</span>
                                        <div className="img-wrap">
                                            <img className="sub-span-img" src="./img/SFCG_newlogo-960x170.png" alt="Search for Common Ground" />
                                        </div>
                                        <button className="btn-case">Read Case Study</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="case-study-wrap pdt-117">
                        <div className="row">
                            <div className="order-2 order-sm-2 order-md-1 col-md-6">  
                                <div className="case-study-content">
                                <div className="case-study-content-wrap">
                                    <span className="sub-caption">September 2016</span>
                                    <h3 className="headline2">Exploring the nature of VAWG, and its effects among migrant labour communities in Baglung district, Nepal</h3>
                                    <p className="body-para">This presentation shares the preliminary findings from the formative research conducted among communities engaged in migrant labour in Baglung district of Nepal.</p>
                                    <div className="logo-wrap">
                                        <div className="logo-mid">
                                            <img src="./img/vso.png" alt="vso" />
                                            <img src="./img/south-african-medical-research-council-samrc-vector-logo.png" alt="samrc" />
                                            <img src="./img/sdd_logo.png" alt="sdd" />
                                        </div>
                                    </div>
                                    <button className="btn-case">Read Case Study</button>
                                </div>
                            </div>
                            </div>
                            <div className="order-1 order-sm-1 order-md-2 col-md-6">
                                <div className="case-study-image">
                                    <figure className="figure-case-img">
                                        <img src="./img/matteo-vegetti-myanmar-06-monastery-kitchen.png" alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default CaseStudy;