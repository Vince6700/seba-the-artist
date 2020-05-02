import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import styles from "./slide.module.css"
import { getDateAndTime } from "../helpers"

const Slide = ({ img, title, description, date }) => {
  return (
    <div className={styles.containerFluid}>
      <Img
        fluid={img}
        objectFit={"cover"}
        objectPosition="50% 50%"
        className={styles.img}
      />
      <div className={styles.infos}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{getDateAndTime(date)}</p>
      </div>
    </div>
  )
}

Slide.propTypes = {
  img: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  date: PropTypes.string,
}

export default Slide
