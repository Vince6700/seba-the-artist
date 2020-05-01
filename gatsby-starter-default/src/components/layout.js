import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
        <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
