import React from "react";

const TestimonialsItem = ({ data }) => {
  return (
    <div className="testimonials-content">
      <div className="testimonials-content-center">
        <div className="silder testimonial-slider-content">
          <div className="para-wrap" style={{ width: "100%" }}>
            <img className="quote-img" src="./img/quote.svg" alt="quote" />
            <h4 className="factsNepal-subtitle">{data.partners_description}</h4>
            <img className="quote-img" src="./img/quote.svg" alt="quote" />
            <div className="span-testimonials-wrap">
              <span className="testimonial-name">{data.partners_name}</span>
              <span className="testimonial-position">
                {data.partners_position}
              </span>
            </div>
            <div className="testimonial-slider-item">
              <img
                src={data.partners_image}
                width="88px"
                height="165px"
                alt="cocacola"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsItem;
