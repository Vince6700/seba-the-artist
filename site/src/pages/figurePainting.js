import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/layout/container"
import useFigurePaintingQuery from "../hooks/useFigurePaintingQuery"

const FigurePainting = () => {
  const paintings = useFigurePaintingQuery();
  console.log(paintings);
  return (
    <Layout>
      <SEO title="Expos" />
      <Container>test</Container>
    </Layout>
  )
}

export default FigurePainting
