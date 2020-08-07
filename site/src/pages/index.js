import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "../components/index/slider"
import LandingBoxes from "../components/landingboxes/landingBoxes"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slider />
    <LandingBoxes/>
  </Layout>
)

export default IndexPage
