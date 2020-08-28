import React, { Fragment } from "react";

const HeroIllustration = () => {
  return (
    <Fragment>
      <div className="hero-squares hero-squares-1 is-revealing">
        <span style={{ color: "white" }}>서비스 예시</span>
      </div>
      <div className="hero-illustration-browser is-revealing">
        <img
          src="/sample.png"
          alt="alt"
          style={{
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
          }}
        ></img>
      </div>
    </Fragment>
  );
};

export default HeroIllustration;
