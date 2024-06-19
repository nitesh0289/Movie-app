import React from "react";
import { Icon } from "@iconify/react";

import styles from "./section.module.scss";

function SearchBar() {
  return (
    <article className={styles.bar}>
      <input placeholder="search movies...." />
      <Icon icon={"mdi:search"} />
    </article>
  );
}

export default SearchBar;
