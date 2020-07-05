import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"
import style from "./menuItem.module.scss"

const MenuItem = ({ link, text, background }) => (
  <div className={style.container}>
      <Link to={link} className={style.link}>
          {text}
      </Link>
      <Img
          fluid={background}
          objectFit="cover"
          objectPosition="50% 50%"
          alt={"background image"}
          className={style.image}
      />
  </div>
)

MenuItem.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  background: PropTypes.object,
}

export default MenuItem
