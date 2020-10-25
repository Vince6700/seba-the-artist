import React, { useState } from "react"
import PropTypes from "prop-types"
import "./layout.scss"
import Footer from "./footer"
import NavButton from "./menu/navButton"
import NavMenu from "./menu/navMenu"
import ContactButton from "./contact/contactButton"
import ContactForm from "./contact/contactForm"

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  const handleMenu = event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setIsMenuOpen(!isMenuOpen)
  }

  const handleContact = () => {
    setIsContactOpen(!isContactOpen)
  }

  return (
    <>
      <NavButton handleMenu={handleMenu} />
      <NavMenu open={isMenuOpen} handleMenu={handleMenu} />
      <main>{children}</main>
      <ContactButton handleForm={handleContact} />
      <ContactForm isOpen={isContactOpen} onClose={handleContact} />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
