import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar';
import axios from 'axios';
import {
    FacebookShareButton,
    FacebookIcon,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
} from 'react-share';
import TimeAgo from 'react-timeago'
import { Link } from "react-router-dom";

class PublicPollResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            polloutput: [],
        }
    }
    componentWillMount() {

    }
    componentDidMount() {

        // if (pollresponse && pollresponse) {
        //     this.setState({ polloutput: pollresponse });
        //     console.log(this.state.polloutput, "oit");

        // }
        // Promise.all([
        //     axios.get(`${process.env.API_URL}api/publicpoll_web`),
        //     // axios.get(`${process.env.API_URL}/api/pollresultapi`)
        // ]).then(response => {
        //     // const newFacts = response[0].data[0].home.map(fact => ({
        //     //     ...fact,
        //     //     // ...factoftheday,
        //     //     likeUpdated: false
        //     // }));

        //     // response[0].data[0].home = newFacts;
        //     // // response[0].data[0].home = newFacts;

        //     // this.setState({
        //     //     facts: response[0].data,
        //     //     factoftheday: response[0].data[0].home[0],
        //     //     publicPoll: response[1].data.publicpoll,
        //     //     // pollResultApi: response[2].data
        //     // });
        // });


    }
    componentWillUnmount() {
        localStorage.clear();
    }
    render() {
        const { data } = this.props.location;
        // console.log(data);
        if (data) {
            window.localStorage.setItem('pollresult', JSON.stringify(data));

        }
        const pollresponse = localStorage.getItem('pollresult') && JSON.parse(localStorage.getItem('pollresult'));
        const url_option_id = this.props.match.params.id
        const selectedpoll = pollresponse.options.filter(function (user) {

            return user.id == url_option_id
        });
        console.log(pollresponse, "poll");
        console.log(this.props.match.params.id, "id");

        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        var othertime = pollresponse.expiryDate;

        if (dateTime < othertime) {
            dateTime.setDate(dateTime.getDate() + 1);
        }

        var diff = dateTime - othertime;
        console.log(dateTime.replace('AM', ''), "Diff")
        console.log(othertime.replace('AM', ''), "Diff")
        var msec = diff;
        var hh = Math.floor(msec / 1000 / 60 / 60);
        msec -= hh * 1000 * 60 * 60;
        var mm = Math.floor(msec / 1000 / 60);
        msec -= mm * 1000 * 60;
        // var ss = Math.floor(msec / 1000);
        // msec -= ss * 1000;
        console.log(msec, "date");
        // console.log(selectedpoll, "fr");
        if (pollresponse && pollresponse) {
            return (

                <React.Fragment>
                    <NavBar noBg={false} bgGrey={true} />

                    <div className="banner-content bg-grey">

                        <div className="container">

                            <div className="publicpoll-wrap mrt-100">
                                <div className="wrap-center">
                                    <div className="title-wrap">
                                        <span className="title-span span-14">{pollresponse.category_title}</span>
                                        <h3 className="publicpoll-title">{pollresponse.question}</h3>
                                        <div className="btn-wrap">
                                            <button>{pollresponse.totalVotes} Votes</button>
                                            <span className="title-date span-12"><TimeAgo date={pollresponse.expiryDate} /></span>
                                        </div>
                                    </div>

                                    <div className="publicpoll-group">
                                        <form action="" className="publicpoll-form publicpoll-form2">
                                            {pollresponse && pollresponse.options.map((data, key) => {
                                                console.log((data.votes_count * 100) / pollresponse.totalVotes);
                                                const votes_percent = Math.round((data.votes_count * 100) / pollresponse.totalVotes);


                                                // if (selectedpoll[0].id == data.id) {
                                                //     console.log("true");
                                                //     return (

                                                //         <div className="form-group inputform active">
                                                //             <span className="input-title span-16 span-yellow">{data.question}</span>
                                                //             <div className="progress-status">
                                                //                 <div className="progress">
                                                //                     <div className="progress-bar active" role="progressbar" style={{ width: `${votes_percent}%` }} aria-valuemin="0" aria-valuemax="100"></div>
                                                //                 </div>
                                                //             </div>
                                                //             <span className="input-status span-16">{votes_percent}%</span>
                                                //         </div>
                                                //     )

                                                // } else {
                                                //     return (<div className="form-group inputform">
                                                //         <span className="input-title span-16 span-yellow">{data.question}</span>
                                                //         <div className="progress-status">
                                                //             <div className="progress">
                                                //                 <div className="progress-bar" role="progressbar" style={{ width: "20%" }} aria-valuemin="0" aria-valuemax="100"></div>
                                                //             </div>
                                                //         </div>
                                                //         <span className="input-status span-16">{votes_percent}%</span>
                                                //     </div>);
                                                // }
                                                return (
                                                    <div className={`form-group inputform ${selectedpoll[0].id == data.id ? 'active' : ''} `}>
                                                        <span className={`input-title span-16 ${selectedpoll[0].id == data.id ? 'active_text' : ''}`}>{data.question}</span>
                                                        <div className="progress-status">
                                                            <div className="progress">
                                                                <div className={`progress-bar ${selectedpoll[0].id == data.id ? 'active_bar' : ''}`} role="progressbar" style={{ width: `${votes_percent}%` }} aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                        <span className="input-status span-16">{votes_percent}%</span>

                                                    </div>
                                                );
                                            })}
                                            {/* <div className="form-group inputform">
                                                <span className="input-title span-16 span-yellow">Colgate</span>
                                                <div className="progress-status">
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <span className="input-status span-16">50%</span>
                                            </div>
    
    
                                            <div className="form-group inputform">
                                                <span className="input-title span-16">Pepsodent</span>
                                                <div className="progress-status">
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" style={{ width: "20%" }} aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <span className="input-status span-16">20%</span>
                                            </div>
    
                                            <div className="form-group inputform">
                                                <span className="input-title span-16">Sensodyne</span>
                                                <div className="progress-status">
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" style={{ width: "10%" }} aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <span className="input-status span-16">10%</span>
                                            </div>
    
                                            <div className="form-group inputform">
                                                <span className="input-title span-16">Others</span>
                                                <div className="progress-status">
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" style={{ width: "20%" }} aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <span className="input-status span-16">20%</span>
    
                                            </div> */}
                                        </form>
                                        <div className="wrapper" style={{ textAlign: "center" }}>
                                            <Link className="poll-link" to={{
                                                pathname: `/`,

                                            }} ><button style={{
                                                height: "37px",
                                                fontSize: "16px"
                                            }} className="btn-danger">Go To HomePage</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="publicpoll-grid">
                                <div className="row-wrap">
                                    <div className="row">
                                        <div className="col-md-7">

                                            <div className="col-wrap-banner">
                                                <figure><img src="./img/24px (check-circle).svg" alt="" /></figure>
                                                <span className="smbanner-span span-16">You voted <span className="colored-span">{selectedpoll[0].question}</span> on this poll.</span>
                                            </div>
                                        </div>

                                        <div className="col-md-5">
                                            <div className="col-wrap-link">
                                                <span className="social-media-span span-12">Share</span>
                                                <ul>
                                                    <li>



                                                        <div className="fb-share-button" data-href={window.location.href} data-layout="button_count" data-size="small"><a target="_blank" href={"https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href) + "&t=" + document.title} className="fb-xfbml-parse-ignore"><FacebookIcon
                                                            size={32}
                                                            round /><span className="span-link span-12 fb-share-button">Share on Facebook</span></a></div>
                                                    </li>

                                                    {/* <li>
                                                        <figure><img src="./img/Share-social-icon (3).svg" alt="" /></figure>
                                                        <a href="#"><span className="span-link span-12">Share on Twitter</span></a>
                                                    </li>

                                                    <li>
                                                        <figure><img src="./img/Share-social-icon (2).svg" alt="" /></figure>
                                                        <a href="#"><span className="span-link span-12">Share on LinkedIn</span></a>
                                                    </li>

                                                    <li>
                                                        <figure><img src="./img/Share-social-icon (4).svg" alt="" /></figure>
                                                        <a href="#"><span className="span-link span-12">Copy Link</span></a>
                                                    </li> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </React.Fragment>
            );
        }
    }

}

export default PublicPollResult;