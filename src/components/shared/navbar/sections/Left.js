import React from "react";

import NavLink from "../partials/NavLink";

import styles from "./section.module.scss";

function Left() {
  return (
    <section className={styles.container}>
      <NavLink link="Home" path="/home" className={styles.nav} />
      <NavLink link="Genre" path="/genre" className={styles.nav} />
      <NavLink link="Country" path="/country" className={styles.nav} />
    </section>
  );
}

export default Left;
