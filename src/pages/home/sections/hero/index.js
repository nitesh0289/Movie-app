import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React from "react";

import CarouselItems from "../../partials/carousel-items";

import CarouselData from "../../../../data/Carousel";
import styles from "./hero.module.scss";

function Hero() {
  return (
    <section className={styles.container}>
      <Carousel showThumbs={false} className={styles.carousel}>
        {CarouselData.map((item, index) => (
          <CarouselItems
            item={item}
            key={index}
            watchNowHandler={() => console.log("watch now clicked")}
            watchLaterHandler={() => console.log("watch later handler")}
          />
        ))}
      </Carousel>
    </section>
  );
}

export default Hero;
