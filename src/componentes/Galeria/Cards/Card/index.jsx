import React from "react";
import favorito from "./favorito.png";
import open from "./open.png";

export default function Card({ item, styles }) {
  return (
    <div className={styles.galeria__card}>
      <img
        className={styles.galeria__imagem}
        src={item.imagem}
        alt={item.titulo}
      />
      <p className={styles.galeria__descricao}>{item.titulo}</p>
      <div>
        <p>{item.creditos}</p>
        <span>
          <img src={favorito} alt="icone coração de curtir" />
          <img src={open} alt="icone de abrir modal" />
        </span>
      </div>
    </div>
  );
}
