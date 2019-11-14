import React, { Component } from 'react';
import Fade from "react-reveal/Fade";


const FactsoftheDay = ({ fact, handleLike, likeUpdated }) => (
    <div className="fact-info">
        <div className="row">
            <div className="col-12 col-md-4">
                <div className="fact-info-img">
                    <figure>
                        <img src="./img/according_facts1.png" alt="fact-img" />
                    </figure>
                </div>
            </div>
            <div className="col-12 col-md-8">
                <div className="fact-info-content">
                    <div className="fact-info-content-wrap">
                        <div className="center">
                            <span className="title">DEMOCRACY</span>
                            <p className="factsNepal-para">According to the National Economic Census Report 2018, there were 923,356 establishments in Nepal as of 14 April 2018. The number....</p>
                            <span className="date-time">14th April, 2018</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


);

export default FactsoftheDay;