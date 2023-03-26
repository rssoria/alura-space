import React from "react";
import imagensMenu from "./imagens-menu.json";
import styles from "./Menu.module.scss";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        {imagensMenu.map((imagem) => {
          return (
            <li className={styles.menu__item}>
              <img src={imagem.path} alt={imagem.alt} />
              <a href="/">{imagem.texto}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
