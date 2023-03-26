import React from "react";
import styles from "./Banner.module.scss";

export default function Banner({ imagem, texto, alt }) {
  return (
    <div className={styles.banner}>
      <h1>{texto}</h1>
      <img src={imagem} alt={alt} />
    </div>
  );
}
