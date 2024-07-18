import React from "react";

import styles from "./tab.module.scss";

function Tab(props) {
  const { text, className, onClick } = props;
  return (
    <div onClick={() => onClick?.()} className={`${styles.tab} ${className}`}>
      {text}
    </div>
  );
}

export default Tab;
