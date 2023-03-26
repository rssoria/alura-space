import React from "react";
import styles from "./Rodape.module.scss";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

export default function Rodape() {
  return (
    <div className={styles.rodape}>
      <ul>
        <li>
          <a href="/" target="_blank">
            <img src={facebook} alt="facebook" />
          </a>
        </li>
        <li>
          <a href="/" target="_blank">
            <img src={twitter} alt="twitter" />
          </a>
        </li>
        <li>
          <a href="/" target="_blank">
            <img src={instagram} alt="instagram" />
          </a>
        </li>
      </ul>
      <div>Desenvolvido por Renata Soria.</div>
    </div>
  );
}
