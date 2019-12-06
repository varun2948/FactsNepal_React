import React, { Component } from 'react';
import { Link } from "react-router-dom";
import TimeAgo from 'react-timeago';

import Fade from "react-reveal/Fade";


const PublicPoll = ({ publicPoll }) => {
    return (
        <div className="col-12 col-md-5" id="public-poll-info-div">
            {publicPoll && publicPoll[0] &&
                <div className="public-poll-info-wrap">
                    <h3 className="factsNepal-title">Public Poll</h3>
                    <Link className="poll-link" to={{
                        pathname: `/publicpoll/${publicPoll[0].id}`,
                        poll_data: publicPoll[0]
                    }} >
                        <div className="public-poll-info">
                            <div className="public-poll-flexcenter">
                                <span className="title">PRODUCT</span>
                                <h6>{publicPoll[0].question}</h6>
                                <span className="date-time">
                                    <TimeAgo date={publicPoll[0].publishedDate} /></span>
                                {/* <span className="date-time">1 day ago</span> */}
                                <span className="btn-vote">{publicPoll[0].totalVotes} Votes</span>
                            </div>
                        </div>
                    </Link>
                </div>
            }
        </div>


    )
}

export default PublicPoll;