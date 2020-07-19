import React from "react"
import PropTypes from "prop-types"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import Img from "gatsby-image"
import LightBox from "./lightBox"

const renderImages = (images, handleFullScreen) =>
  images.map((image, index) => (
    <GridListTile
      key={image.node.id}
      cols={image.node.painting.asset.fluid.aspectRatio > 1 ? 2 : 1}
      rows={image.node.painting.asset.fluid.aspectRatio > 1 ? 1 : 2}
      onClick={() => handleFullScreen(index)}
    >
      <Img
        fluid={image.node.painting.asset.fluid}
        objectFit={"cover"}
        objectPosition="50% 50%"
      />
    </GridListTile>
  ))

const Gallery = ({ images, handleFullScreen }) => {
  return (
    <GridList cellHeight={400} cols={2} cellwidth={400} spacing={20}>
      {images.length > 0 && renderImages(images, handleFullScreen)}
    </GridList>
  )
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
  handleFullScreen: PropTypes.func.isRequired,
}

export default Gallery
