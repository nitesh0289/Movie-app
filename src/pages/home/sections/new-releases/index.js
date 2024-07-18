import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

import Movie from "../../../../components/cards/movie";
import styles from "./releases.module.scss";

function NewRelease(props) {
  const { title } = props;
  const [data, setData] = useState([]);

  const fetchData = () => {
    if (title === "Movies")
      fetch("http://localhost:3001/api/movies", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setData(data));
    else if (title === "Series")
      fetch("http://localhost:3001/api/series", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setData(data));
  };

  useEffect(() => {
    fetchData(title);
  }, [title]);

  return (
    <section className={styles.container}>
      <header>
        <h1>New Release - {title}</h1>
        <p>
          View All <Icon icon={"maki:arrow"} />
        </p>
      </header>
      <main>
        {data.map((item, i) => (
          <Movie
            key={i}
            type={title}
            name={item.title}
            src={item.videoSrc}
            duration={item.duration}
            thumbnail={item.thumbnailImage}
          />
        ))}
      </main>
    </section>
  );
}

export default NewRelease;
