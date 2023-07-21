import React from 'react'
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";
import styles from "./Rodape.module.scss";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
        <div className={styles.rodape__div}>
            <a className={styles.rodape__div__link} href="http://">
                <img src={facebook} alt="logo-facebook" />
            </a>
            <a className={styles.rodape__div__link} href="http://">
                <img src={twitter} alt="logo-twitter" />
            </a>
            <a className={styles.rodape__div__link} href="http://">
                <img src={instagram} alt="logo-instagram" />
            </a>
        </div>
        <p className={styles.rodape__texto}>Desenvolvido por Alura</p>
    </footer>
  )
}
