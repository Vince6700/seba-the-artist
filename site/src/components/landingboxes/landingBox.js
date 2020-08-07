import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import style from "./landingBox.module.scss"

const LandingBox = ({ text, title, link }) => (
  <div className={style.box}>
    <Link to={link} className={style.link}>
      <h2>{title}</h2>
      <p>{text}</p>
    </Link>
  </div>
)

LandingBox.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default LandingBox
