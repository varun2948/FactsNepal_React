import React, { Component, ReactDOM } from "react";
import NavBarLink from "./NavBarLink";
import { Link } from "react-router-dom";

// const navbar = {
//   padding: "0.7894736842rem",
//   background: "#f5efef"
// };

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.childDiv = React.createRef();
    this.state = {};
  }
  componentDidMount = () => this.handleScroll();

  componentDidUpdate = () => this.handleScroll();

  handleScroll = () => {
    console.log(this._div.current);

    const { index, selected } = this.props;
    if (index === selected) {
      setTimeout(() => {
        this._div.scrollIntoView({ behavior: "instant" });
      }, 500);
    }
  };
  render() {
    return (
      <React.Fragment>
        {/* {console.log(this.state.btnclick)} */}

        <header
          className={`site-header  pdb-100 ${this.props.noBg ? "no-bg" : ""} ${
            this.props.bgGrey ? "bg-grey" : ""
          }`}
        >
          <div ref={ref => (this._div = ref)} className="wrap">
            <div className="container full-width-container">
              <div className="header-top">
                <div className="logo">
                  <Link
                    className="poll-link"
                    to={{
                      pathname: `/`
                    }}
                  >
                    <div className="logo-img">
                      <img
                        src="./img/logo.svg"
                        alt="Facts Nepal"
                        className="logo-icon"
                      />
                    </div>
                  </Link>
                </div>

                <NavBarLink />
                <div className="toggle-button">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* <button className=" btn btn-success  btn-lg heroleft__btn ploll-btn" >
      {" "}
      <span className="fom"> Public Poll</span>
      <i className="la la-bar-chart-o" />
    </button>
    <div id="overlay">
      <div id="text">Overlay Text</div>
    </div>
    <header className="flex" style={navbar}>
      <figure>
        <img src="img/factslogo.png" alt="Facts Nepal" />
      </figure>
      <NavBarLink />
    </header> */}
      </React.Fragment>
    );
  }
}

export default NavBar;
