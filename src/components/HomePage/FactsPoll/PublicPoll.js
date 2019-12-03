import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Moment from 'react-moment';

import Fade from "react-reveal/Fade";


const PublicPoll = ({ publicPoll }) => {
    console.log(publicPoll[0], 'pp');
    return (
        <div className="col-12 col-md-5" id="public-poll-info-div">
            <div className="public-poll-info-wrap">
                <h3 className="factsNepal-title">Public Poll</h3>
                <Link className="poll-link" to="/publicpoll" >
                    <div className="public-poll-info">
                        <div className="public-poll-flexcenter">
                            <span className="title">PRODUCT</span>
                            <h6>{publicPoll[0] && publicPoll[0].question}</h6>
                            <span className="date-time">
                                <Moment date={publicPoll[0] && publicPoll[0].poll_date}
                                    durationFromNow
                                /></span>
                            {/* <span className="date-time">1 day ago</span> */}
                            <span className="btn-vote">8 votes</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>


    )
}

export default PublicPoll;