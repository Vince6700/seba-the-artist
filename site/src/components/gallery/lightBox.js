import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Modal from "@material-ui/core/Modal"
import CancelRoundedIcon from "@material-ui/icons/CancelRounded"
import NavigateNextRoundedIcon from "@material-ui/icons/NavigateNextRounded"
import NavigateBeforeRoundedIcon from "@material-ui/icons/NavigateBeforeRounded"
import style from "./lightbox.module.scss"

const LightBox = ({
  fixedImg,
  handleClose,
  handleNext,
  handlePrevious,
  aspectRatio,
}) => {
  const [styleObject, setStyle] = useState({})

  useEffect(() => {
    const windowHeight = window.innerHeight
    const windowWidth = window.innerWidth
    if (aspectRatio >= 1) {
      const maxHeight = windowHeight * 0.9
      const width = windowWidth * 0.9
      const height = width / aspectRatio
      height > maxHeight
        ? setStyle({
            width: `${width / (height / maxHeight)}px`,
            height: `${height / (height / maxHeight)}px`,
          })
        : setStyle({ width: `${width}px`, height: `${height}px` })
    }
    if (aspectRatio < 1) {
      const maxWidth = windowWidth * 0.8
      const height = windowHeight * 0.8
      const width = height * aspectRatio
      width > maxWidth
        ? setStyle({
            width: `${width / (width / maxWidth)}px`,
            height: `${height / (width / maxWidth)}px`,
          })
        : setStyle({ width: `${width}px`, height: `${height}px` })
    }
  }, [aspectRatio])

  const handleKeyNav = event => {
    event.key === "ArrowRight" && handleNext()
    event.key === "ArrowLeft" && handlePrevious()
    event.key === "Escape" && handleClose()
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyNav)
    return () => {
      document.removeEventListener("keydown", handleKeyNav)
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
