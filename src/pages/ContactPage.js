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
      <div>
        <section className="map-holder">
          <div className="container-fluid">
            <div className="custom-container">
              <div className="map-holder__inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14131.428516947946!2d85.3429673!3d27.6908103!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x857b4d5307df8061!2sFacts+Research+and+Analytics!5e0!3m2!1sen!2snp!4v1555475561046!5m2!1sen!2snp"
                  width="600"
                  height="450"
                  frameBorder="0"
                  style={{ border: 0 }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="contact-form">
          <div className="container">
            <div className="contact-form__inner">
              <div className="row no-gutters">
                <div className="col-md-8 form-holder">
                  <div className="contact-form__right">
                    <div className="form-group">
                      <label htmlFor="sel1">Type of Enquiry</label>
                      <select
                        className="form-control"
                        id="sel1"
                        onChange={this.Enquiry_HandleChange}
                      >
                        <option value="General">General Enquiry</option>
                        <option value="Business">Business Enquiry</option>
                        <option value="Carrer">Career</option> Enquiry
                      </select>
                    </div>

                    {this.state.enquiry_selectValue === "General"
                      ? general_form
                      : this.state.enquiry_selectValue === "Business"
                      ? business_form
                      : carrer_form}
                  </div>
                </div>
                <div className="col-md-4 rbg">
                  <div className="contact-form__left">
                    <h4 className="textcontact">Contact Information</h4>
                    <div className="location contact-form__items  relative textcontact">
                      394-Radha Mohan Marga <br />
                      Minbhawan Kharibot <br />
                      kathmandu, Nepal <br />
                    </div>
                    <div className="phone contact-form__items relative  textcontact">
                      +977-1-4469924
                    </div>
                    <div className="email contact-form__items relative textcontact">
                      info@factsnepal.com
                    </div>
                    <div className="contact-form__socialshare relative textcontact">
                      <i className="la la-facebook-square" />
                      <i className="la la-twitter-square" />
                      <i className="la la-linkedin-square" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ContactPage;
