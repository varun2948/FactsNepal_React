import React, { Component } from "react";
import axios from "axios";

class ResourcesBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resources: []
    };
  }
  componentDidMount() {
    Promise.all([
      axios({
        method: "GET",
        url: `${process.env.API_URL}api/resources`,
        headers: {
          "content-type": "application/json",
          Accept: "application/json"
        }
      })
    ]).then(response => {
      console.log(response[0].data);
      // const sliced2Collaborators = response[0].data.collaborators.slice(0, 2);
      this.setState({
        resources: response[0].data
      });
      // console.log(this.state.casestudy, "cs");
    });
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 0);
  }
  render() {
    const { resources } = this.state;
    return (
      <section className="resources-section pdt-150 pdb-150">
        <div className="container">
          <div className="resources-section-wrap">
            <div className="resources-title">
              <h3 className="headline2">Resources</h3>
              <p className="body-para">
                Welcome to read the issue of Facts Nepal books and publications.
              </p>
            </div>
            <div className="resources-grid-content">
              <div className="grid-container">
                <div className="row">
                  {resources &&
                    resources.map(data => {
                      return (
                        <div className="col-12 col-md-4">
                          <div className="grid-col resources-grid-lft">
                            <div className="grid-content-wrap">
                              <div className="grid-image">
                                <img src={data.image} alt={data.slug} />
                              </div>
                              <div className="grid-content">
                                <h4 className="headline4">{data.title}</h4>
                                <div className="para-center">
                                  <p className="body-para">
                                    {data.description}
                                  </p>
                                </div>
                              </div>
                              <div className="grid-button">
                                <a href={data.file_url} download>
                                  <button>Read</button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                  {/* <div className="col-12 col-md-4">
                    <div className="grid-col resources-grid-mid">
                      <div className="grid-content-wrap">
                        <div className="grid-image">
                          <img
                            src="./img/Facts-of-Gandaki-2018-book.png"
                            alt="Facts of Gandaki 2018"
                          />
                        </div>
                        <div className="grid-content">
                          <h4 className="headline4">Facts of Gandaki 2018</h4>
                          <p className="body-para">
                            This Book is focused in developing reading habit
                            among children by developing children's literature
                            for early grades.
                          </p>
                        </div>
                        <div className="grid-button">
                          <button>Read</button>
                          <button>Download</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-4">
                    <div className="grid-col resources-grid-rght mb-0">
                      <div className="grid-content-wrap">
                        <div className="grid-image">
                          <img
                            src="./img/Facts-of-Nepal-2018-book.png"
                            alt="Facts of Nepal 2018"
                          />
                        </div>
                        <div className="grid-content">
                          <h4 className="headline4">Facts of Nepal 2018</h4>
                          <p className="body-para">
                            The yearbook comprises compilation of information
                            and data of various sectors of Nepal presented in a
                            manner that would visually appeal to the readers.
                          </p>
                        </div>
                        <div className="grid-button">
                          <button>
                            <span>Read</span>
                          </button>
                          <button>
                            <span>Download</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ResourcesBooks;
