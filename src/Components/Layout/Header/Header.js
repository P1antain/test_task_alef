import React from "react";
import styles from "../Layout.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../Logo.svg";
export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <img src={Logo} alt="Logo company" className={styles.logo} />
        <div className={styles.elem}>
          <NavLink to={"/form"} className={styles.link}>
            Форма
          </NavLink>
          <NavLink to={"/preview"} className={styles.link}>
            Превью
          </NavLink>
        </div>
      </header>
    </>
  );
}
