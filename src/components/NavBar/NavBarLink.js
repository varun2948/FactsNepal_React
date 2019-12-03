import React from "react";
import LinkItem from "./LinkItem";
import { Link } from 'react-router-dom';
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
      <li className="menu-items dropdown-grid" id="dropdown">

        <LinkItem path="#" text="Services" className="drpbtn" id="toggle-link" />
        <div id="myGridcontent" className="grid-content">
          <div className="grid-container">
            <div className="row no-gutters">
              <div className="col-sm-7 col-8 col-md-4">

                <Link className="grid-col" to={{
                  pathname: `/researchdata`,
                }}>
                  <figure className="fig">
                    <img className="grid-img" src="./img/Services-icon-1.svg" alt="visual data" />
                  </figure>
                  <span className="grid-span span-12">Research & <br /> Data Analysis</span>
                </Link>
              </div>

              <div className="col-sm-7 col-8 col-md-4">

                <Link className="grid-col" to={{
                  pathname: `/strategycontent`,
                }}>
                  <figure className="fig">
                    <img className="grid-img" src="./img/Services-icon-2.svg" alt="file searcrhing" />
                  </figure>
                  <span className="grid-span span-12">Strategy & <br /> Content Development</span>
                </Link>
              </div>

              <div className="col-sm-7 col-8 col-md-4">
                <Link className="grid-col" to={{
                  pathname: `/infographics`,
                }}>
                  <figure className="fig">
                    <img className="grid-img" src="./img/Services-icon-3.svg" alt="file searcrhing" />
                  </figure>
                  <span className="grid-span span-12">Infographics <br /> Design</span>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </li>
      <li className="menu-items">
        <LinkItem path="/projects" text="Projects" />
      </li>
      <li className="menu-items">
        <LinkItem path="/allfacts" text="Facts" />
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
