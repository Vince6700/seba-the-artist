import React from "react"
import PropTypes from "prop-types"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import List from "@material-ui/core/List"
import MenuItem from "./menuItem"
import style from "./navMenu.module.scss"
import { StylesProvider } from "@material-ui/core/styles"
import useMenuQuery from "../../hooks/useMenuQuery";

const menuItems = {
  home: {
    text: "Accueil",
    link: "/",
    background: null,
  },
  expos: {
    text: "Expos",
    link: "/expos",
    background: null,
  },
}

const NavMenu = ({ open, handleMenu }) => {
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const menu = useMenuQuery();
  console.log(menu);

  const renderMenu = () =>
    Object.values(menuItems).map(item => (
      <MenuItem
        text={item.text}
        link={item.link}
        background={item.background}
        key={item.link}
      />
    ))
  return (
    <StylesProvider injectFirst>
      <SwipeableDrawer
        anchor={"right"}
        open={open}
        onOpen={handleMenu}
        onClose={handleMenu}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        <List
          classes={{ root: style.root, padding: style.padding }}
          component="nav"
        >
          {renderMenu()}
        </List>
      </SwipeableDrawer>
    </StylesProvider>
  )
}

NavMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  handleMenu: PropTypes.func.isRequired,
}

export default NavMenu
