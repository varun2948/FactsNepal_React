import React from "react";

const url = {
  twitter: "https://twitter.com/home?status=http%3A//139.59.67.104%3A8002",
  facebook:
    "https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F139.59.67.104%3A8002%2F&amp;src=sdkpreparse",
  linkedin:
    "https://www.linkedin.com/shareArticle?mini=true&url=http%3A//139.59.67.104%3A8002&title=Facts%20Nepal&summary=&source="
};

const FactShare = () => (
  <div className="factsod__facts-share">
    <a target="_blank" href={url.facebook} className="no-decoration">
      <i className="la la-facebook" />
    </a>
    <a target="_blank" href={url.twitter} className="no-decoration">
      <i className="la la-twitter" />
    </a>
    <a target="_blank" href={url.linkedin}>
      <i className="la la-linkedin" />
    </a>
  </div>
);

export default FactShare;
