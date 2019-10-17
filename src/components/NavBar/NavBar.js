import React from "react";
import NavBarLink from "./NavBarLink";



const navbar = {
  padding: "0.7894736842rem",
  background: "#f5efef"
};

const NavBar = () => (

  < React.Fragment >
    {/* {console.log(this.state.btnclick)} */}
    <button className=" btn btn-success  btn-lg heroleft__btn ploll-btn" >
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
    </header>
  </React.Fragment >
);

export default NavBar;
