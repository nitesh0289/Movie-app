import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

import Button from "../../../../components/atoms/button";

import styles from "./items.module.scss";

function CarouselItems(props) {
  const {
    image,
    title,
    genre,
    launchYear,
    duration,
    rating,
    description,
    watchNowHandler,
    watchLaterHandler,
  } = props.item;

  const formatMinute = (time) => {
    const hours = Math.floor(time / 60);
    const minutes = Math.floor(time % 60);

    return `${hours}:${minutes}:00`;
  };

  return (
    <article className={styles["carousel-item"]}>
      <img src={image} alt="avatar-home" />
      <div className={styles.content}>
        <div className={styles.btns}>
          <Button name={"Watch Now"} handler={watchNowHandler} className={styles.now}>
            <Icon icon="icon-park-solid:play" />
          </Button>
          <Button name={"Watch Later"} handler={watchLaterHandler} className={styles.later}>
            <Icon icon="mdi:clock" />
          </Button>
        </div>
        <article className={styles.footer}>
          <h2>{title}</h2>
          <div className={styles.genre}>
            <ul>
              {genre.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className={styles.meta}>
              <Icon icon={"simple-line-icons:calender"} />
              <span>{launchYear}</span>
            </div>
            <div className={styles.meta}>
              <Icon icon={"mdi:clock-outline"} />
              <span>{formatMinute(duration)}</span>
            </div>
            <div className={styles.meta}>
              <Icon icon={"mdi:star"} />
              <span>{rating}</span>
            </div>
          </div>
          <p>{description}</p>
        </article>
      </div>
    </article>
  );
}

export default CarouselItems;
