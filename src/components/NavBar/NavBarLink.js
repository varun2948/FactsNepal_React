import React from "react";
import LinkItem from "./LinkItem";

const NavBarLink = () => (
  // <nav className="navitems" id="nav-links">
  //   <ul className="menu-lists">
  //     <LinkItem path="/services" text="Services" id="dropdown" />
  //     <LinkItem path="/projects" text="Projects" />
  //     <LinkItem path="/facts" text="Facts" />
  //     <LinkItem path="/about" text="About" />
  //     <LinkItem path="/contact" text="Contact" />
  //   </ul>
  // </nav>
  <nav className="navitems" id="nav-links">
    <ul className="menu-lists">
      <li className="menu-items dropdown-grid" id="dropdown" >

        <LinkItem path="/services" text="Services" className="drpbtn" />
        <div className="grid-content">
          <div className="grid-container">
            <div className="row no-gutters">

              <div className="col-md-4">
                <div className="grid-col">
                  <figure className="fig">
                    <img className="grid-img" src="./img/Services-icon-1.svg" alt="visual data" />
                  </figure>
                  <span className="grid-span span-12">Research & <br /> Data Analysis</span>
                </div>
              </div>

              <div className="col-md-4">
                <div className="grid-col">
                  <figure className="fig">
                    <img className="grid-img" src="./img/Services-icon-2.svg" alt="file searcrhing" />
                  </figure>
                  <span className="grid-span span-12">Strategy & <br /> Content Development</span>
                </div>
              </div>

              <div className="col-md-4">
                <div className="grid-col">
                  <figure className="fig">
                    <img className="grid-img" src="./img/Services-icon-3.svg" alt="file searcrhing" />
                  </figure>
                  <span className="grid-span span-12">Infographics <br /> Design</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </li>
      <li className="menu-items">
        <LinkItem path="/projects" text="Projects" />
      </li>
      <li className="menu-items">
        <LinkItem path="/facts" text="Facts" />
      </li>
      <li className="menu-items">
        <LinkItem path="/about" text="About" />
      </li>
      <li className="menu-items">
        <LinkItem path="/contact" text="Contact" />
      </li>

    </ul>
  </nav>
);

export default NavBarLink;
