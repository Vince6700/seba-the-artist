import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useExposQuery from "../hooks/useExposQuery"

const Expos = () => {
  const expos = useExposQuery()
  console.log(expos)
  return (
    <Layout>
      <SEO title="Expos" />
    </Layout>
  )
}

export default Expos
