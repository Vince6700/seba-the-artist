import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/layout/container"
import useFigurePaintingQuery from "../hooks/useFigurePaintingQuery"
import Img from "gatsby-image"
import GridList from "@material-ui/core/GridList"
import LightBox from "../components/gallery/lightBox"
import GridListTile from "@material-ui/core/GridListTile"

const renderPaintings = (paintings, handleFullScreen) =>
  paintings.map((painting, index) => (
    <GridListTile
      key={painting.node.id}
      cols={painting.node.painting.asset.fluid.aspectRatio > 1 ? 2 : 1}
      rows={painting.node.painting.asset.fluid.aspectRatio > 1 ? 1 : 2}
      onClick={() => handleFullScreen(index)}
    >
      <Img
        fluid={painting.node.painting.asset.fluid}
        objectFit={"cover"}
        objectPosition="50% 50%"
      />
    </GridListTile>
  ))

const imageModal = (painting, handleClose, handleNext, handlePrevious) => {
  return (
    <LightBox
      painting={painting}
      handleClose={handleClose}
      handleNext={handleNext}
      handlePrevious={handlePrevious}
    />
  )
}

const FigurePainting = () => {
  const paintings = useFigurePaintingQuery()
  const [fullScreenIndex, setFullScreenIndex] = useState(null)

  const handleFullScreen = index => {
    setFullScreenIndex(index)
  }

  const handleCloseModal = () => {
    setFullScreenIndex(null)
  }

  const handleNext = () => {
    let newIndex
    fullScreenIndex === paintings.length - 1
      ? (newIndex = 0)
      : (newIndex = fullScreenIndex + 1)
    setFullScreenIndex(newIndex)
  }

  const handlePrevious = () => {
    let newIndex
    fullScreenIndex === 0
      ? (newIndex = paintings.length - 1)
      : (newIndex = fullScreenIndex - 1)
    setFullScreenIndex(newIndex)
  }

  return (
    <Layout>
      <SEO title="Expos" />
      <Container>
        <GridList cellHeight={400} cols={2} cellwidth={400} spacing={20}>
          {paintings.length > 0 && renderPaintings(paintings, handleFullScreen)}
        </GridList>
        {(fullScreenIndex || fullScreenIndex === 0) &&
          imageModal(
            paintings[fullScreenIndex],
            handleCloseModal,
            handleNext,
            handlePrevious
          )}
      </Container>
    </Layout>
  )
}

export default FigurePainting