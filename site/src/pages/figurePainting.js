import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/layout/container"
import useFigurePaintingQuery from "../hooks/useFigurePaintingQuery"
import LightBox from "../components/gallery/lightBox"
import Gallery from "../components/gallery/gallery"

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

  return (
    <Layout>
      <SEO title="Expos" />
      <Container>
        <Gallery handleFullScreen={handleFullScreen} images={paintings} />
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
