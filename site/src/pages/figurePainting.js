import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/layout/container"
import useFigurePaintingQuery from "../hooks/useFigurePaintingQuery"
import LightBox from "../components/gallery/lightBox"
import Gallery from "../components/gallery/gallery"
import useLightBox from "../hooks/useLightbox"

const FigurePainting = () => {
  const paintings = useFigurePaintingQuery()
  const {
    fullScreenIndex,
    handleFullScreen,
    handleCloseModal,
    handleNext,
    handlePrevious,
  } = useLightBox(paintings)

  return (
    <Layout>
      <SEO title="Expos" />
      <Container>
        <Gallery
          handleFullScreen={handleFullScreen}
          images={paintings}
          assetName="painting"
        />
        {(fullScreenIndex || fullScreenIndex === 0) && (
          <LightBox
            image={paintings[fullScreenIndex]}
            handleClose={handleCloseModal}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            aspectRatio={
              paintings[fullScreenIndex].node.painting.asset.fixed.aspectRatio
            }
            fixedImg={paintings[fullScreenIndex].node.painting.asset.fixed}
          />
        )}
      </Container>
    </Layout>
  )
}

export default FigurePainting
