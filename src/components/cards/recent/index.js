import React from "react";

import styles from "./recent.module.scss";

function Recent(props) {
  const { name, thumbnail, videoSrc, seasons, releaseDate } = props;

  return (
    <article className={styles.card}>
      <a href={videoSrc} target="_blank"></a>
      <img src={thumbnail} alt={`recent-${name}`} />
      <div className={styles.right}>
        <h3>{name}</h3>
        <p>{seasons} Seasons</p>
        <p>{releaseDate}</p>
      </div>
    </article>
  );
}

export default Recent;
