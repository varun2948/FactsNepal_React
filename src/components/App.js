import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "../../scss/style.scss";

// components
import Navbar from "../components/NavBar/NavBar";
// pages
import HomePage from "../pages/HomePage";
import PublicPoll from "../pages/PublicPoll";
import FactsPage from "../pages/FactsPage";
import ResearchData from "../pages/Research&Data";
import StrategyContent from "../pages/Strategy&Content";
import InfographicsDesign from "../pages/InfographicsDesign";
import AboutPage from "../pages/AboutPage";
import ServicePage from "../pages/ServicePage";
import AllFactsPage from "../pages/AllFactsPage";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer/Footer";
import PublicPollResult from "../pages/PublicPollResult";
import Projects from "../pages/Projects";
import About from "../pages/About";
import ContactPage from "../pages/ContactPage";
import Contact from "../pages/Contact";
import SingleCaseStudy from "../pages/SingleCaseStudy";

// const Footer = () => (<h1> FOOTER </h1>);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page">
        <Router>
          <ScrollToTop />
          {/* <Navbar noBg={true} /> */}
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/publicpoll" component={PublicPoll} />
            <Route path="/facts/:id" component={FactsPage} />
            <Route path="/researchdata" component={ResearchData} />
            <Route path="/strategycontent" component={StrategyContent} />
            <Route path="/infographics" component={InfographicsDesign} />
            <Route path="/allfacts" component={AllFactsPage} />
            <Route path="/publicpollresult/:id" component={PublicPollResult} />
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
            <Route path="/contactpage" component={ContactPage} />
            <Route path="/contact" component={Contact} />
            <Route path="/casestudy/:id" component={SingleCaseStudy} />
            {/* <Route path="/works" component={WorksPage} /> */}
            {/* <Route path="/contact" component={ContactPage} /> */}
          </Switch>
          {/* <Footer /> */}
        </Router>
      </div>
    );
  }
}
export default App;
