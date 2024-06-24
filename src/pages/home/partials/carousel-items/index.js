import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

import Button from "../../../../components/atoms/button";

import styles from "./items.module.scss";

function CarouselItems(props) {
  const { image, watchNowHandler, watchLaterHandler } = props.item;
  return (
    <article className={styles["carousel-item"]}>
      <img src={image} alt="avatar-home" />
      <div className={styles.content}>
        <div className={styles.btns}>
          <Button
            name={"Watch Now"}
            handler={() => console.log("clicked watch")}
            className={styles.now}
          >
            <Icon icon="icon-park-solid:play" />
          </Button>
          <Button
            name={"Watch Later"}
            handler={() => console.log("clicked watch")}
            className={styles.later}
          >
            <Icon icon="mdi:clock" />
          </Button>
        </div>
      </div>
    </article>
  );
}

export default CarouselItems;
