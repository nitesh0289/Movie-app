import React from "react";

import styles from "./button.module.scss";

function Button(props) {
  const { name, path, handler, children, className } = props;

  return (
    <a
      href={path ? path : ""}
      onClick={() => handler?.()}
      className={`${className} ${styles.button}`}
    >
      <span>{name}</span>
      {children}
    </a>
  );
}

export default Button;
