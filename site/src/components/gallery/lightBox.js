import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Modal from "@material-ui/core/Modal"
import CancelRoundedIcon from "@material-ui/icons/CancelRounded"
import NavigateNextRoundedIcon from "@material-ui/icons/NavigateNextRounded"
import NavigateBeforeRoundedIcon from "@material-ui/icons/NavigateBeforeRounded"
import style from "./lightbox.module.scss"

const LightBox = ({ fixedImg, handleClose, handleNext, handlePrevious, aspectRatio }) => {
  const [styleObject, setStyle] = useState({})

  useEffect(() => {
    if (aspectRatio >= 1) {
      const windowWidth = window.innerWidth
      const width = windowWidth * 0.9
      const height = width / aspectRatio
      setStyle({ width: `${width}px`, height: `${height}px` })
    }
    if (aspectRatio < 1) {
      const windowHeight = window.innerHeight
      const height = windowHeight * 0.9
      const width = height * aspectRatio
      setStyle({ width: `${width}px`, height: `${height}px` })
    }
  }, [aspectRatio])

  const handleKeyNav = event => {
    event.key === "ArrowRight" && handleNext()
    event.key === "ArrowLeft" && handlePrevious()
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyNav)
    return () => {
      window.removeEventListener("keydown", handleKeyNav)
    }
  }, [fixedImg])

  return (
    <Modal open onClose={handleClose} disableAutoFocus disableEnforceFocus>
      <div className={style.lightBox}>
        <CancelRoundedIcon
          className={style.closeButton}
          onClick={handleClose}
        />
        <NavigateNextRoundedIcon
          onClick={handleNext}
          className={style.nextButton}
        />
        <NavigateBeforeRoundedIcon
          className={style.previousButton}
          onClick={handlePrevious}
        />
        <Img
          fixed={fixedImg}
          imgStyle={{ width: "100%", height: "100%" }}
          style={styleObject}
        />
      </div>
    </Modal>
  )
}

LightBox.propTypes = {
  image: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handlePrevious: PropTypes.func.isRequired,
}

export default LightBox
