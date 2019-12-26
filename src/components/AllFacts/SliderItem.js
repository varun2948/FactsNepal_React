import React from "react";

const SliderItem = ({ classname, url, title, clickFunction, key }) => {
  return (
    <div
      key={key}
      className={`slider-img-item ${classname}`}
      onClick={clickFunction}
    >
      <figure>
        <img src={url} alt="" />
      </figure>
      <span>{title}</span>
    </div>
  );
};

export default SliderItem;
