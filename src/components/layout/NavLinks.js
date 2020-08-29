import React from "react";
import { NavLink } from "react-router-dom";
import classnames from "classnames";

export default props => {
  const links = [
    { text: "PRO SERVICE", href: "/premium" },
    { text: "Contact", href: "/contact" },
    { text: "Terms", href: "/terms" }
  ];

  const classNames = classnames("list-reset", props.className);

  return (
    <ul className={classNames} style={{ fontSize: "18px" }}>
      {links.map((link, index) => (
        <li key={index}>
          <NavLink to={link.href} activeClassName="is-active">
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
