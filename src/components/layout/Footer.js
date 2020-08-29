import React from "react";
import NavLinks from "./NavLinks";
import classnames from "classnames";

const Footer = props => {
  const classNameForNavLinks = classnames(props.className, "footer-links")
  const classNameForCopyRight = classnames(props.className, "footer-copyright")

  return (
    <footer className="site-footer text-light">
      <div className="container">
        <div className="site-footer-inner">
          <NavLinks className={classNameForNavLinks} />
          {/*<SocialLinks className="footer-social-links" />*/}
          <div className={classNameForCopyRight}>
            &copy; 2020 한글 공부, all rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
