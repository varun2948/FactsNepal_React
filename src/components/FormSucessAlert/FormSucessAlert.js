import React, { Component } from "react";

class FormSucessAlert extends Component {
  render() {
    return (
      <section class="banner delievered-banner">
        <div class="circle orange-gradient sphere1"></div>
        <div class="circle red-gradient sphere2"></div>
        <div class="circle pink-gradient sphere3"></div>
        <div class="container">
          <div class="banner-wrap">
            <div class="message-wrapper">
              <span class="check-circle"></span>
              <div class="message-box">
                <h4 class="headline4">Form Sent</h4>
                <h5 class="headline5">Thanks for sending us your message</h5>
              </div>
              <span data-dismiss="modal" class="ok-span">
                ok
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FormSucessAlert;
