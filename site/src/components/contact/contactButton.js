import React from "react"
import PropTypes from "prop-types"
import style from "./contactButton.module.scss"
import { StylesProvider } from "@material-ui/core/styles"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"

const ContactButton = ({ handleForm }) => {
  return (
    <div className={style.container} onClick={handleForm}>
      <StylesProvider injectFirst>
        <ChatBubbleOutlineIcon
          fontSize={"large"}
          classes={{ root: style.icon, fontSizeLarge: style.fontsize }}
        />
      </StylesProvider>
    </div>
  )
}

ContactButton.propTypes = {
  handleForm: PropTypes.func.isRequired,
}

export default ContactButton
