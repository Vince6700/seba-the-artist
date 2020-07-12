import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Modal from "@material-ui/core/Modal"
import style from "./lightbox.module.scss"

const LightBox = ({ painting, handleClose }) => {
  const [aspectRatio, setAspectRatio] = useState(0)
  const [styleObject, setStyle] = useState({})

  useEffect(() => {
    !!painting && setAspectRatio(painting.node.painting.asset.fixed.aspectRatio)
  }, [painting])

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

  return (
    <Modal open onClose={handleClose} disableAutoFocus disableEnforceFocus>
      <div className={style.lightBox}>
        <Img
          fixed={painting.node.painting.asset.fixed}
          imgStyle={{ width: "100%", height: "100%" }}
          style={styleObject}
        />
      </div>
    </Modal>
  )
}

LightBox.propTypes = {
  painting: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default LightBox
