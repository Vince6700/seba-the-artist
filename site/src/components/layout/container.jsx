import React from "react"
import PropTypes from "prop-types"
import style from "./container.module.scss"

const Container = ({ children }) => (
  <div className={style.container}>
    <div className={style.content}>{children}</div>
  </div>
)

Container.propTypes = {
  children: PropTypes.node,
}

export default Container
