import React from "react";
import Fade from "react-reveal/Fade";


const FactList = ({ fact, handleLike, likeUpdated }) => {
    if (fact) {
        return fact.home.map((factItem, key) => (
            console.log(key),
            < div className="previousFact" >
                {/* {console.log(fact)} */}
                < div className="img-wpr" width="100%">
                    <img src={factItem.image} height="121px" width="118px" alt="todaysfact" />
                </div>
                <div className="factsod__detail">
                    <h5>
                        <a className="facts_detail_link">
                            {factItem.description}
                        </a>
                    </h5>
                    <div className="cholder">
                        <div className="factsod__counts">
                            <Fade
                                left
                                duration={1000}
                                delay={1000}
                                distance={"20px"}
                            />
                            <span className="time">
                                <i className="la la-calendar-o" />

                                <span>1hr ago</span>
                            </span>
                            <span
                                id={factItem.id}
                                className="likecount"
                                style={factItem.likeUpdated ? { background: "#fde2e4", borderRadius: "7px" } : { background: null }}
                                onClick={() => handleLike(factItem.id, "singlelike")}
                            >
                                <i
                                    style={likeUpdated ? { color: "#a93c46" } : { color: "black" }}
                                    className="la la-thumbs-o-up"
                                />{" "}
                                <span> {factItem.like}</span>
                            </span>
                        </div>
                        <div className="factsod__facts-share">
                            <a href="" className="no-decoration">
                                <i className="la la-facebook" />
                            </a>
                            <a href="" className="no-decoration">
                                <i className="la la-twitter" />
                            </a>
                            <a href="" className="no-decoration">
                                <i className="la la-instagram" />
                            </a>
                        </div>
                    </div>
                </div>


            </div >
        ))


    }


    return <h1>Loading...</h1>


}



// factalldata.map(data => <FactList name={data.name} />)

export default FactList;