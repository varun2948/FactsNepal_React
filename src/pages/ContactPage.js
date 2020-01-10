import React, { Component } from "react";

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enquiry_selectValue: "General"
    };
  }

  Enquiry_HandleChange = e => {
    const enquiry_val = e.target.value;
    console.log(enquiry_val);
    this.setState(() => {
      return {
        enquiry_selectValue: enquiry_val
      };
    });
  };

  render() {
    const general_form = (
      <div>
        <h4> Contact Us</h4>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="Name">Full Name</label>
              <input type="text" className="form-control" id="Name" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="Phone">Phone No</label>
              <input type="number" className="form-control" id="Phone" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" className="form-control" id="subject" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="enquiry">Enquiry</label>
              <textarea type="text" className="form-control" id="enquiry" />
            </div>
          </div>
          <div className="col-md-6">
            <label className="block">Gender</label>
            <div className="form-group d-flex  radio-holder">
              <span>
                <input type="radio" id="test1" name="radio-group" />
                <label htmlFor="test1">Male</label>
              </span>

              <span>
                <input type="radio" id="test2" name="radio-group" />
                <label htmlFor="test2">Female</label>
              </span>
            </div>
          </div>
        </div>
        <div className="btn-holder-contact d-flex justify-content-end mt-2f">
          <button className="btn btn-primary btn-lg heroleft__btn ">
            {" "}
            <span className="fom"> Submit</span>
          </button>
        </div>
      </div>
    );

    const business_form = (
      <div>
        {/* <h4> Contact Us</h4> */}
        <p>
          <strong>
            Do you have a project that FACTS can help you with? To help us
            understand your needs and better estimate the duration and budget
            required, answering the following questions will expedite the
            process.
          </strong>
        </p>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="Name">Name of Your Organization</label>
              <input type="text" className="form-control" id="Name" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="Mission">What is Your Mission?</label>
              <input type="text" className="form-control" id="Mission" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="project_about">What is the Project About?</label>
              <input type="text" className="form-control" id="project_about" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="objectives">
                What are the Objectives of the Project?Is there a problem that
                you are looking to tackle?
              </label>
              <input type="text" className="form-control" id="objectives" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="background">
                Do you want to provide a brief background of the project?
              </label>
              <input type="text" className="form-control" id="background" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="deliverables">
                What type of deliverables are you expecting?
              </label>
              <input type="text" className="form-control" id="deliverables" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="deadlines">
                Do you have a specific time period or deadlines for the project?
              </label>
              <input type="text" className="form-control" id="deadlines" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="budget">
                What is your estimated budget for this project?
              </label>
              <input type="text" className="form-control" id="budget" />
            </div>
          </div>
        </div>
        <div className="btn-holder-contact d-flex justify-content-end mt-2f">
          <button className="btn btn-primary btn-lg heroleft__btn ">
            {" "}
            <span className="fom"> Submit</span>
          </button>
        </div>
      </div>
    );

    const carrer_form = (
      <div>
        <p>
          <strong>
            Are you interested in working with us? Please fill up the following
            form and send your CV along at info@factsnepal.com
          </strong>
        </p>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="Name">Full Name</label>
              <input type="text" className="form-control" id="Name" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input type="text" className="form-control" id="dob" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <input type="text" className="form-control" id="gender" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="marital">Martial Status</label>
              <input type="text" className="form-control" id="marital" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="residential_address">Residential Address</label>
              <input
                type="text"
                className="form-control"
                id="residential_address"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" className="form-control" id="email" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="Phone">Phone No</label>
              <input type="number" className="form-control" id="Phone" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="why_facts">Why Do You want To Join FACTS?</label>
              <input type="text" className="form-control" id="why_facts" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="strength">
                What Strength of yours,do you think can contribute to FACTS?
              </label>
              <input type="text" className="form-control" id="strength" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
          </div>
        </div>

        <div className="btn-holder-contact d-flex justify-content-end mt-2f">
          <button className="btn btn-primary btn-lg heroleft__btn ">
            {" "}
            <span className="fom"> Submit</span>
          </button>
        </div>
      </div>
    );

    return (
            <section className="form-section contact-form">
                <div className="container">
                    <div className="form-bg pdt-56 pdb-62">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="form-left">
                                    <div className="form-left-title">
                                        <h3 className="headline2">Ready to get the Facts?</h3>
                                        <span className="caption">Fill in this form or send us an e-mail.</span>
                                    </div>
                                    <div className="form-wrap">
                                        <form>
                                            <div className="form-group">
                                                <input type="text" name="name" id="inputname" className="form-control" placeholder="" required />
                                                <label for="inputname">Name</label>
                                                <span className="border-span"></span>
                                            </div>

                                            <div className="form-group">
                                                <input type="text" name="email" id="inputemail"  className="form-control" placeholder="" required />
                                                <label for="inputemail">Email</label>
                                                <span className="border-span"></span>
                                            </div>
                                            
                                            <div className="form-group">
                                                <input type="tel" name="phone" id="inputphone" className="form-control" placeholder="" required />
                                                <label for="inputphone">Phone</label>
                                                <span className="border-span"></span>
                                            </div>

                                            <div className="form-group">
                                                <input type="text" name="proj-details" id="inputtext" className="form-control" placeholder="" required />
                                                <label for="inputtext">Project Details</label>
                                                <span className="border-span"></span>
                                            </div>
                                            <button type="submit" className="btn">Send</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 offset-0 offset-md-1 col-md-5">
                                <div className="form-right">
                                    <div className="form-right-title">
                                        <h3 className="headline2">Contact</h3>
                                    </div>
                                    <div className="form-address">
                                        <ul className="addr-list">
                                            <li className="addr">
                                                <span><img src="./img/24px (2).svg" alt=""/></span><span className="caption">8973 NPC 678, 394-Radha Mohan Marga Minbhawan Kharibot, Kathmandu, Nepal</span>
                                            </li>

                                            <li className="addr">
                                                <span><img src="./img/24px.svg" alt=""/></span><span className="caption">+977-1-4469924</span>
                                            </li>

                                            <li className="addr">
                                                <span><img src="./img/24px (1).svg" alt=""/></span> <span><a href="#" className="caption">info@factsnepal.com</a></span>
                                            </li>
                                        </ul>
                                    
                                    </div>
                                    <div className="form-btn-wrap">
                                        <span className="caption">Available for your smartphone</span>
                                        <div className="btn-content">
                                            <a><img src="./img/appstore.png" alt="appstore"/></a>
                                            <a><img src="./img/googleplay.png" alt="googleplay"/></a>
                                        </div>
                                    </div>
                                    <div className="social-icon-wrap">
                                        <a href="#"><figure><img src="./img/Social-media-icon (4).svg" alt=""/></figure></a>
                                        <a href="#"><figure><img src="./img/Social-media-icon (1).svg" alt=""/></figure></a>
                                        <a href="#"><figure><img src="./img/Social-media-icon (2).svg" alt=""/></figure></a>
                                        <a href="#"><figure><img src="./img/Social-media-icon (5).svg" alt=""/></figure></a>
                                        <a href="#"><figure><img src="./img/Social-media-icon (3).svg" alt=""/></figure></a>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>

                    <div className="footer">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="footer-left">
                                    <span className="copyright sm-caption">© 2019<span className="subtitle"> FACTS Research & Analytics.</span></span>
                                </div>
                            </div>
                            <div className="col-12 offset-0 offset-md-1 col-md-5">
                                <div className="footer-right">
                                    <span className="site-design-title sm-caption">Designed by <span className="site-design">NAXA</span></span> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
  }
}

export default ContactPage;
