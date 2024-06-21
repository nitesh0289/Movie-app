import React from "react";

import Button from "../../../../components/atoms/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import * as assets from "../../../../assets";
import styles from "./hero.module.scss";

function Hero() {
  return (
    <section className={styles.container}>
      <img src={assets.Avatar} alt="avatar-home" />
      <article>
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
      </article>
    </section>
  );
}

export default Hero;
