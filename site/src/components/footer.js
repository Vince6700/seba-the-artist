import React from "react"
import { Link } from "gatsby"
import styles from "./footer.module.scss"
import useMenuQuery from "../hooks/useMenuQuery"

const Footer = () => {
  const menu = useMenuQuery()
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.linkContainer}>
          <Link to={menu.home.link}>Accueil</Link>
          <Link to={menu.expos.link}>Expositions</Link>
          <Link to={menu.figurePainting.link}>Peinture Figurative</Link>
          <Link to={menu.abstractPainting.link}>Peinture Abstraite</Link>
          <Link to={menu.tailoredPainting.link}>Peinture sur mesure</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
