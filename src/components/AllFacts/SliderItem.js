import React from "react";

const SliderItem = ({ classname, url, title }) => {
  return (
    <div className={`slider-img-item ${classname}`}>
      <figure>
        <img src={url} alt="" />
      </figure>
      <span>{title}</span>
    </div>
  );
};

export default SliderItem;
