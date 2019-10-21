import React from "react";
// import NavBarLink from "./NavBarLink";



// const navbar = {
//   padding: "0.7894736842rem",
//   background: "#f5efef"
// };

const NavBar = () => (

  < React.Fragment >

    {/* {console.log(this.state.btnclick)} */}
    <header className="site-header pdb-100">
      <div className="wrap">
        <div className="container full-width-container">
          <div className="header-top">
            <div className="logo">
              <div className="logo-img">
                <img src="./img/logo.svg" alt="Facts Nepal" className="logo-icon" />
              </div>
            </div>
            <nav className="navitems" id="nav-links">
              <ul className="menu-lists">
                <li className="menu-items" id="dropdown"><a href="">Services</a></li>
                <li className="menu-items"><a href="">Projects</a></li>
                <li className="menu-items"><a href="">Facts</a></li>
                <li className="menu-items"><a href="">About</a></li>
                <li className="menu-items"><a href="">Contact</a></li>
              </ul>
            </nav>
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
  </React.Fragment >
);

export default NavBar;
