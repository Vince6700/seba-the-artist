import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { getDateAndTime } from "../../helpers"
import { navigate } from "gatsby"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"

import styles from "./slide.module.css"

const Slide = ({ img, title, description, date }) => (
  <div className={styles.containerFluid}>
    <Img
      fluid={img}
      objectFit={"cover"}
      objectPosition="50% 50%"
      className={styles.img}
    />
    <div
      className={styles.infos}
      onClick={() => {
        navigate("/expos")
      }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{getDateAndTime(date)}</p>
      <p className={styles.knowMore}>
        Plus d'infos&nbsp;
        <ArrowForwardIcon />
      </p>
    </div>
  </div>
)

Slide.propTypes = {
  img: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  date: PropTypes.string,
}

export default Slide
