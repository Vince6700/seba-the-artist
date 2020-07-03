import React from "react"
import PropTypes from "prop-types"
import style from "./expoCard.module.scss"
import ExpoMap from "./expoMap"

const ExpoCard = ({ expo }) => (
  <div className={style.container}>
    <div className={style.infos}>
      <h2>{expo.name}</h2>
      <p>{expo.description}</p>
    </div>
    <div className={style.map}>
      <ExpoMap lat={expo.place.lat} lng={expo.place.lng} />
    </div>
  </div>
)

ExpoCard.propTypes = {
  expo: PropTypes.object,
}

export default ExpoCard
