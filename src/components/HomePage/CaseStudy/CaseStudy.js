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
            <section className="case-study pdt-120 pdb-150">
                <div className="container">
                    <div className="case-study-wrap pdb-130">
                        <div className="case-study-image">
                            <figure className="figure-case-img">
                                <img src="./img/bags-best-friends-daylight-1516440.png" alt="" />
                            </figure>
                        </div>

                        <div className="case-study-content">
                            <div className="case-study-content-wrap">
                                <span className="date-time">July 2014</span>
                                <h3 className="factsNepal-title">Student Perceptions of Leadership, Accountability, and Governance of Student Leaders and Unions</h3>
                                <p className="factsNepal-para">The National Youth Policy has recognized that youth are an invaluable asset to the nation, acknowledging youths’ role as agents of economic, social, and political change.</p>
                                <span className="sub-span">Funded by</span>
                                <div className="img-wrap">
                                    <img className="sub-span-img" src="./img/SFCG_newlogo-960x170.png" alt="Search for Common Ground" />
                                </div>
                                <button className="btn-case"><span>Read Case Study</span></button>
                            </div>
                        </div>
                    </div>
                    <div className="case-study-wrap">
                        <div className="case-study-content">
                            <div className="case-study-content-wrap">
                                <span className="date-time">September 2016</span>
                                <h3 className="factsNepal-title">Exploring the nature of VAWG, and its effects among migrant labour communities in Baglung district, Nepal</h3>
                                <p className="factsNepal-para">This presentation shares the preliminary findings from the formative research conducted among communities engaged in migrant labour in Baglung district of Nepal.</p>
                                <div className="logo-wrap">
                                    <div className="logo-mid">
                                        <img src="./img/vso.png" alt="vso" />
                                        <img src="./img/south-african-medical-research-council-samrc-vector-logo.png" alt="samrc" />
                                        <img src="./img/sdd_logo.png" alt="sdd" />
                                    </div>
                                </div>
                                <button className="btn-case"><span>Read Case Study</span></button>
                            </div>
                        </div>
                        <div className="case-study-image">
                            <figure className="figure-case-img">
                                <img src="./img/matteo-vegetti-myanmar-06-monastery-kitchen.png" alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default CaseStudy;