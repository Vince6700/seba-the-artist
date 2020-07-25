import React, { useEffect, useLayoutEffect, useState } from "react"
import PropTypes from "prop-types"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import Img from "gatsby-image"
import style from "./gallery.module.scss"

const renderImages = (images, handleFullScreen, assetName) =>
  images.map((image, index) => (
    <GridListTile
      key={image.node.id}
      cols={image.node[assetName].asset.fluid.aspectRatio > 1 ? 2 : 1}
      rows={image.node[assetName].asset.fluid.aspectRatio > 1 ? 1 : 2}
      onClick={() => handleFullScreen(index)}
      classes={{ tile: style.imgContainer }}
    >
      <Img
        fluid={image.node[assetName].asset.fluid}
        objectFit={"cover"}
        objectPosition="50% 50%"
      />
    </GridListTile>
  ))

const Gallery = ({ images, handleFullScreen, assetName }) => {
  const [height, setHeight] = useState(380)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const updateSize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  })

  useEffect(() => {
    windowWidth > 992 && setHeight(380);
    windowWidth < 992 && setHeight(300);
    windowWidth < 768 && setHeight(220);
    windowWidth < 576 && setHeight(140)
  }, [windowWidth])

  return (
    <GridList cellHeight={height} cols={2} cellwidth={400} spacing={20}>
      {images.length > 0 && renderImages(images, handleFullScreen, assetName)}
    </GridList>
  )
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
  handleFullScreen: PropTypes.func.isRequired,
}

export default Gallery
