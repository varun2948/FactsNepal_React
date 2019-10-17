import React, { Component } from "react";
import Fade from "react-reveal/Fade";

const sources = [1];

class WorksPage extends Component {
  constructor() {
    super();
    this.state = {
      target_val: ""
    };

    this.second = React.createRef();
    this.first = React.createRef();
  }

  scroll = ref => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    return (
      <div>
        {/* <HeaderBar /> */}
        <section className="work-banner">
          <div className="container">
            <div className="">
              <div className="row">
                <div className="col-lg-8 pr80">
                  <Fade bottom duration={1100} distance={"150px"}>
                    <h2 className="white">
                      {" "}
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod{" "}
                    </h2>
                    <p className="white textbanner">
                      {" "}
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et
                      ea rebum. Stet clita kasd gubergren, no sea takimata
                      sanctus est Lorem ipsum dolor sit ame{" "}
                    </p>
                  </Fade>
                  <Fade bottom duration={1100} distance={"150px"} delay={300}>
                    <button
                      className="btn btn-primary btn-lg heroleft__btn mr-3"
                      data-id="first"
                      ref="btns"
                      onClick={e => this.scroll(this.first)}
                    >
                      {" "}
                      <span className="fom "> Qualitative Research</span>
                    </button>
                    <button
                      className="btn btn-primary btn-lg heroleft__btn "
                      id="second"
                      onClick={e => this.scroll(this.second)}
                    >
                      {" "}
                      <span className="fom"> Quantitative Research</span>
                    </button>

                    {/*<button className="btn btn-primary btn-lg heroleft__btn mr-3 " id="first" onClick={(e) => { this.scroll(this.first) }}> <span className="fom "> Qualitative Research</span></button>
                                    <button className="btn btn-primary btn-lg heroleft__btn " id="second" onClick={(e) => { this.scroll(this.second) }}> <span className="fom"> Quantitative Research</span></button>*/}
                  </Fade>
                </div>
                <div className="col-lg-4 d-none d-lg-block">
                  <Fade bottom duration={1100} distance={"150px"} delay={300}>
                    <img className="max100" src="/img/nepal.png" />
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding-y">
          <div className="container">
            <div className="imgtagholder " id="1st" ref={this.first}>
              <Fade bottom duration={1000} distance={"150px"} delay={1000}>
                <div className="img text-center">
                  <img src="img/qualitative.png" />
                  <h3 className="headerQ"> Qualitative Research</h3>
                </div>
              </Fade>
              <div className="research-list">
                <Fade bottom duration={1200} distance={"100px"}>
                  <div className="research-list__item">
                    <h4>
                      {" "}
                      Student Perceptions of Leadership, Accountability, and
                      Governance of Student Leaders and Unions, 2012 [for Search
                      for Common Ground;
                    </h4>
                    <p className="nomargin owner">
                      {" "}
                      project funded by FCO/DFID]
                    </p>
                  </div>
                </Fade>
                <Fade bottom duration={1200} distance={"100px"} delay={500}>
                  <div className="research-list__item">
                    <h4>
                      Formative research to "Explore the nature of VAWG, and its
                      effects among migrant labour communities in Baglung
                      district, Nepal"
                    </h4>
                    <p className="nomargin owner">
                      for VSO Nepal and South African Medical Research Council
                      (SAMRC), 2016
                    </p>
                  </div>
                </Fade>
                <Fade bottom duration={1200} distance={"100px"} delay={600}>
                  <div className="research-list__item">
                    <h4>
                      Formative research to "Explore the nature of VAWG, and its
                      effects among migrant labour communities in Baglung
                      district, Nepal"
                    </h4>
                    <p className="nomargin owner">
                      for VSO Nepal and South African Medical Research Council
                      (SAMRC), 2016
                    </p>
                  </div>
                </Fade>
              </div>
            </div>

            <div
              className="imgtagholder section-padding-y"
              id="second"
              ref={this.second}
            >
              <Fade bottom duration={1000} distance={"150px"}>
                <div className="img text-center">
                  <img src="img/quantative.png" />
                  <h3 className="headerQ"> Quantative Research</h3>
                </div>
              </Fade>
              <div className="research-list">
                <Fade bottom duration={1200} distance={"100px"}>
                  <div className="research-list__item">
                    <h4>
                      {" "}
                      Student Perceptions of Leadership, Accountability, and
                      Governance of Student Leaders and Unions, 2012 [for Search
                      for Common Ground;
                    </h4>
                    <p className="nomargin owner">
                      {" "}
                      project funded by FCO/DFID]
                    </p>
                  </div>
                </Fade>
                <Fade bottom duration={1200} distance={"100px"} delay={500}>
                  <div className="research-list__item">
                    <h4>
                      Formative research to "Explore the nature of VAWG, and its
                      effects among migrant labour communities in Baglung
                      district, Nepal"
                    </h4>
                    <p className="nomargin owner">
                      for VSO Nepal and South African Medical Research Council
                      (SAMRC), 2016
                    </p>
                  </div>
                </Fade>
                <Fade bottom duration={1200} distance={"100px"} delay={600}>
                  <div className="research-list__item">
                    <h4>
                      Formative research to "Explore the nature of VAWG, and its
                      effects among migrant labour communities in Baglung
                      district, Nepal"
                    </h4>
                    <p className="nomargin owner">
                      for VSO Nepal and South African Medical Research Council
                      (SAMRC), 2016
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  // scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop);
}

export default WorksPage;
