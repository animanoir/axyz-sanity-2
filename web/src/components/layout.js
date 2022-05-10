import React from "react";
import Header from "./header";
import ThreeCanvas from "./three-canvas";

import "../styles/layout.css";
import * as styles from "./layout.module.css";

const Layout = ({ children, onHideNav, onShowNav, showNav }) => (
  <>
  <div id={styles.backgroundNoise}></div>
  <div className={styles.wrapper}>
    <Header siteTitle="Óscar A. Montiel" onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <main className={styles.content}>
      <ThreeCanvas />
      {children}
      <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          {new Date().getFullYear()} — Óscar A. Montiel
        </div>
      </div>
    </footer>
    </main>
    </div>
  </>
);

export default Layout;
