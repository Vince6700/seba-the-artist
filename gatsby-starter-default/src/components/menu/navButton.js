import React from "react"
import PropTypes from "prop-types"
import style from "./navButton.module.scss"
import MenuSharpIcon from "@material-ui/icons/MenuSharp"
import { StylesProvider } from "@material-ui/core/styles"

const NavButton = ({ handleMenu }) => (
  <div className={style.container} onClick={handleMenu}>
    <StylesProvider injectFirst>
      <MenuSharpIcon
        fontSize={"large"}
        classes={{ root: style.icon, fontSizeLarge: style.fontsize }}
      />
    </StylesProvider>
  </div>
)

NavButton.propTypes = {
  handleMenu: PropTypes.func,
}

export default NavButton
