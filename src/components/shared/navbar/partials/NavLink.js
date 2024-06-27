import React from "react";

function NavLink(props) {
  const { link, path, className } = props;
  return (
    <a href={path} className={className}>
      {link}
    </a>
  );
}

export default NavLink;
