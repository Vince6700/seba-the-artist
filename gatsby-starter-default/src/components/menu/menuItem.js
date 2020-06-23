import React from "react"
import PropTypes from "prop-types"
import ListItem from "@material-ui/core/ListItem"
import { Link } from "gatsby"
import style from "./menuItem.module.scss"

const MenuItem = ({ link, text, background }) => (
  <Link to={link}>
    <ListItem classes={{root: style.root}}>{text}</ListItem>
  </Link>
)

MenuItem.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  background: PropTypes.string,
}

export default MenuItem
