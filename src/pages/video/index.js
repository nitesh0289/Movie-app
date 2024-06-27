import React, { useState } from "react";

import styles from "./video.module.scss";

const images = [
  "https://m.media-amazon.com/images/I/71eUwDk8z+L._SY550_.jpg",
  "https://m.media-amazon.com/images/I/71mh8ZJZFuL._SY550_.jpg",
  "https://m.media-amazon.com/images/I/71vSLpVgZpL._SY550_.jpg",
];

function Video() {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageChange = (image) => {
    setSelectedImage(image);
  };

  return (
    <section className={styles.container}>
      <p>Clothing & Accessories &gt; T-shirts, Polo & Shirts &gt; Polos</p>
      <article>
        <div className={styles.left}>
          {images.map((image, i) => (
            <img src={image} alt={`image-${i}`} onClick={() => handleImageChange(image)} />
          ))}
        </div>
        <div className={styles.right}>
          <img src={selectedImage} alt="selected-image" />
        </div>
      </article>
    </section>
  );
}

export default Video;
