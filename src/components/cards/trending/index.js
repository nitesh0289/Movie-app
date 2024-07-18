import React from "react";

import styles from "./recent.module.scss";
import Tab from "../../atoms/tab";

function Trending(props) {
  const {
    title,
    thumbnailImage,
    videoSrc = "https://www.google.com",
    genres,
    duration,
    voteAverage,
  } = props;

  return (
    <article className={styles.card}>
      <a href={videoSrc} target="_blank">
        <img src={thumbnailImage} alt={`recent-${title}`} />
        <div className={styles.right}>
          <h3>{title}</h3>
          {genres.split(",").map((genre, i) => (
            <Tab text={genre} key={i} />
          ))}
        </div>
      </a>
    </article>
  );
}

export default Trending;
