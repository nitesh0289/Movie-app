import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import { Icon } from "@iconify/react";

import Recent from "../../../../components/cards/recent";
import styles from "./recents.module.scss";
import "swiper/css/effect-coverflow";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css";

function Recents() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/series/recent", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <section className={styles.container}>
      <header>
        <h1>Recently Updated</h1>
      </header>
      <main>
        <div className={`${styles["nav-button"]} ${styles["prev"]}`} id="recentPrev">
          <Icon icon={"mdi:keyboard-arrow-left"} />
        </div>
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          freeMode={true}
          pagination={false}
          modules={[FreeMode, Navigation]}
          navigation={{
            prevEl: "#recentPrev",
            nextEl: "#recentNext",
          }}
          className={styles["recent-swiper"]}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <Recent
                key={i}
                name={item.title}
                src={item.videoSrc}
                seasons={item.seasons}
                episodes={item.episodes}
                releaseDate={item.releaseDate}
                thumbnail={item.thumbnailImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={`${styles["nav-button"]} ${styles["next"]}`} id="recentNext">
          <Icon icon="mdi:keyboard-arrow-right" />
        </div>
      </main>
    </section>
  );
}

export default Recents;
