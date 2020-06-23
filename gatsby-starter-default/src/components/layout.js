import React, { useState } from "react"
import PropTypes from "prop-types"
import "./layout.scss"
import Footer from "./footer"
import NavButton from "./menu/navButton"

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <>
      <NavButton handleMenu={handleMenu} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
