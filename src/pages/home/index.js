import React from "react";

import Recommended from "./sections/recommended";
import NewRelease from "./sections/new-releases";
import Trending from "./sections/trending";
import Recents from "./sections/recents";
import Hero from "./sections/hero";

import styles from "./home.module.scss";

function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Recents />
      <Trending />
      <NewRelease title={"Movies"} />
      <NewRelease title={"Series"} />
      <Recommended />
    </main>
  );
}

export default Home;
