import banner from "assets/banner.png";
import styles from "./PaginaInicial.module.scss";

import Cabecalho from "componentes/Cabecalho";
import Menu from "componentes/Menu";
import Banner from "componentes/Banner";
import Rodape from "componentes/Rodape";
import Galeria from "componentes/Galeria";
import Populares from "componentes/Populares";

export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main>
        <section className={styles.principal}>
          <Menu />
          <Banner
            texto="A galeria mais completa do espaço"
            imagem={banner}
            alt="A Terra vista do espaço"
          />
        </section>
        <div className={styles.galeria}>
          <Galeria />
          <Populares />
        </div>
      </main>
      <Rodape />
    </>
  );
}
