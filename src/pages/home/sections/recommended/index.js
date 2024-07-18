import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";

import Tab from "../../../../components/atoms/tab";

import styles from "./recommended.module.scss";
import Movie from "../../../../components/cards/movie";

function Recommended() {
  const [active, setActive] = useState("movies");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/${active}/recommended`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(`Can't fetch recommended ${active}`));
  }, [active]);

  return (
    <section className={styles.container}>
      <header>
        <div className={styles.left}>
          <h1>Recommended</h1>
          <Tab
            text={"Movies"}
            className={active === "movies" ? styles.active : styles.inactive}
            onClick={() => setActive("movies")}
          />
          <Tab
            text={"Series"}
            className={active === "series" ? styles.active : styles.inactive}
            onClick={() => setActive("series")}
          />
        </div>
        <p>
          View All <Icon icon={"maki:arrow"} />
        </p>
      </header>
      <main>
        {data.map((item, i) => {
          return (
            <Movie
              key={i}
              type={active}
              name={item.title}
              src={item.videoSrc}
              duration={item.duration}
              thumbnail={item.thumbnailImage}
            />
          );
        })}
      </main>
    </section>
  );
}

export default Recommended;
