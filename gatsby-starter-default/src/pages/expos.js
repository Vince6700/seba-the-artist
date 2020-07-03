import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useExposQuery from "../hooks/useExposQuery"
import ExpoCard from "../components/expos/expoCard";
import Container from "../components/layout/container";

const renderExpos = (expos) => (
    expos.map((expo) => (
        <ExpoCard expo={expo.node} key={expo.node.id}/>
    ))
);

const Expos = () => {
  const expos = useExposQuery()

  return (
    <Layout>
      <SEO title="Expos" />
      <Container>
        {renderExpos(expos)}
      </Container>
    </Layout>
  )
}

export default Expos
