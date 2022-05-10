import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";
import LastFmData from "./lastFmData";
import animanoirLogo from "../images/animanoir-oscar-a-montiel-logo.png";

import * as styles from "./header.module.css";

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to="/">{siteTitle}</Link>
        <LastFmData />
        </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol="hamburger" />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to="/archive/">About</Link>
          </li>
          <li>
            <Link to="/archive/">Proyects</Link>
          </li>
          <li>
            <Link to="/archive/">Experiments</Link>
          </li>
          <li>
            <Link to="/archive/">Contact</Link>
          </li>
        </ul>
      </nav>
      <img src={animanoirLogo} alt="Óscar A. Montiel" className={styles.headerLogo} />
    </div>
  </div>
);

export default Header;
