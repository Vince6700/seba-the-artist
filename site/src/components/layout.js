import React, { useState } from "react"
import PropTypes from "prop-types"
import "./layout.scss"
import Footer from "./footer"
import NavButton from "./menu/navButton"
import NavMenu from "./menu/navMenu"
import ContactButton from "./contact/contactButton"
import ContactForm from "./contact/contactForm"
import { ThemeProvider } from "@material-ui/core/styles"
import { theme } from "../theme/theme"
import useContactForm from "../hooks/useContactForm"
import MailNotification from "./contact/mailNotification"

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const {
    handleSubmit,
    handleForm,
    form,
    isSubmitting,
    errors,
    contactForm,
    isSnackBarOpen,
    handleSnackBar,
    isContactOpen,
    setIsContactOpen,
  } = useContactForm()

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
    <ThemeProvider theme={theme}>
      <NavButton handleMenu={handleMenu} />
      <NavMenu open={isMenuOpen} handleMenu={handleMenu} />
      <main>{children}</main>
      <ContactButton handleForm={handleContact} />
      <ContactForm
        isOpen={isContactOpen}
        onClose={handleContact}
        handleSubmit={handleSubmit}
        handleForm={handleForm}
        form={form}
        isSubmitting={isSubmitting}
        errors={errors}
        contactForm={contactForm}
      />
      <Footer />
      <MailNotification handleSnackBar={handleSnackBar} isSnackbarOpen={isSnackBarOpen} />
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        hidden
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="email" />
        <input type="hidden" name="subject" />
        <input type="hidden" name="message" />
      </form>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
