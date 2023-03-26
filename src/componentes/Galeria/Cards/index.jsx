import React from "react";
import Card from "./Card";

export default function Cards({ itens, styles }) {
  return (
    <div className={styles.galeria__cards}>
      {itens.map((foto) => {
        return <Card key={foto.id} item={foto} styles={styles} />;
      })}
    </div>
  );
}
