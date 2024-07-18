import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";
import React from "react";

import utils from "../../../utils";
import Tab from "../../atoms/tab";

import styles from "./movie.module.scss";

function Movie(props) {
  const { type, thumbnail, src, name, duration, className } = props;
  const navigate = useNavigate();
  return (
    <article className={`${styles.container} ${className}`} onClick={() => navigate(src)}>
      <img src={thumbnail} alt={`${name}-thumbnail`} />
      <footer>
        <h3>{name}</h3>
        <div>
          {type === "Movies" || "movies" ? (
            <>
              <Tab text={"HD"} />
              <div>
                <Icon icon={"mdi:clock"} />
                <p>{utils.formatMinute(duration)}</p>
              </div>
            </>
          ) : (
            <div>Season 1</div>
          )}
        </div>
      </footer>
    </article>
  );
}

export default Movie;
