import React from "react";
import styles from "./Populares.module.scss";
import fotosPopulares from "./fotos-populares.json";
import Botao from "componentes/Botao/botao";

export default function Populares() {
  return (
    <aside className={styles.populares}>
      <h2>Populares</h2>
      <div className={styles.populares__imagens}>
        {fotosPopulares.map((fotoPopular) => (
          <img
            key={fotoPopular.id}
            src={fotoPopular.path}
            alt={fotoPopular.alt}
          />
        ))}
      </div>
      <Botao>Ver mais fotos</Botao>
    </aside>
  );
}
