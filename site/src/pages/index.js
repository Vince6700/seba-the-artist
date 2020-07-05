import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "../components/index/slider"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slider />
  </Layout>
)

export default IndexPage
