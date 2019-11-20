import React, { Component } from 'react';

class ResourcesBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <section className="resources-section pdt-115 pdb-115">
                <div className="container">
                    <div className="resources-section-wrap">
                        <div className="resources-title">
                            <h3 className="factsNepal-title">Resources</h3>
                            <p className="factsNepal-para">Welcome to read the issue of Facts Nepal books and publications.</p>
                        </div>
                        <div className="resources-grid-content">
                            <div className="grid-container">
                                <div className="row">
                                    <div className="col-12 col-md-4">
                                        <div className="grid-col resources-grid-lft">
                                            <div className="grid-content-wrap">
                                                <div className="grid-image">
                                                    <img src="./img/Facts-of-Nepal-2019-book.png" alt="Facts of Nepal 2019" />
                                                </div>
                                                <div className="grid-content pdb-40">
                                                    <h4 className="factsNepal-subtitle">Facts of Nepal 2019</h4>
                                                    <p className="factsNepal-para">Facts Research and Analytics unveiled the latest edition of its yearbook</p>
                                                </div>
                                                <div className="grid-button">
                                                    <div className="btn-wrap">
                                                        <button><span>Read</span></button>
                                                        <button><span>Download</span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4">
                                        <div className="grid-col resources-grid-mid">
                                            <div className="grid-content-wrap">
                                                <div className="grid-image">
                                                    <img src="./img/Facts-of-Gandaki-2018-book.png" alt="Facts of Gandaki 2018" />
                                                </div>
                                                <div className="grid-content pdb-40">
                                                    <h4 className="factsNepal-subtitle">Facts of Gandaki 2018</h4>
                                                    <p className="factsNepal-para">This Book is focused in developing reading habit among children by developing children's literature for early grades.</p>
                                                </div>
                                                <div className="grid-button">
                                                    <div className="btn-wrap">
                                                        <button><span>Read</span></button>
                                                        <button><span>Download</span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4">
                                        <div className="grid-col resources-grid-rght mb-0">
                                            <div className="grid-content-wrap">
                                                <div className="grid-image">
                                                    <img src="./img/Facts-of-Nepal-2018-book.png" alt="Facts of Nepal 2018" />
                                                </div>
                                                <div className="grid-content pdb-40">
                                                    <h4 className="factsNepal-subtitle">Facts of Nepal 2018</h4>
                                                    <p className="factsNepal-para">The yearbook comprises compilation of information and data of various sectors of Nepal presented in a manner that would visually appeal to the readers.</p>
                                                </div>
                                                <div className="grid-button">
                                                    <div className="btn-wrap">
                                                        <button><span>Read</span></button>
                                                        <button><span>Download</span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>);
    }
}

export default ResourcesBooks;