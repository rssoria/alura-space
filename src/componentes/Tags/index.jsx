import React from "react";
import styles from "./Tags.module.scss";

export default function Tags({ tags, aoFiltrar }) {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__lista}>
        {tags.map((tag) => (
          <li key={tag} onClick={() => aoFiltrar(tag)}>
            {tag}
          </li>
        ))}
        <li key="todas" onClick={() => aoFiltrar("todas")}>
          Todas
        </li>
      </ul>
    </div>
  );
}
