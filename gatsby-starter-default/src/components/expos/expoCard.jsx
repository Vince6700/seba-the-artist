import React, { useState } from "react"
import PropTypes from "prop-types"
import style from "./expoCard.module.scss"
import ExpoMap from "./expoMap"
import { getDateAndTime } from "../../helpers"

const ExpoCard = ({ expo }) => {
  const [seeMap, setSeeMap] = useState(false)
  const handleSeeMap = () => {
    setSeeMap(!seeMap)
  }
  return (
    <div className={style.container}>
      {!seeMap && (
        <div className={style.infos}>
          <h2>{expo.name}</h2>
          <p>{expo.description}</p>
          <p>{getDateAndTime(expo.date)}</p>
          <div onClick={handleSeeMap} className={style.openMap}>
            Voir la carte
          </div>
        </div>
      )}
      <div className={style.map}>
        <ExpoMap lat={expo.place.lat} lng={expo.place.lng} />
        <div className={style.closeMap} onClick={handleSeeMap}>
          cacher la carte
        </div>
      </div>
    </div>
  )
}

ExpoCard.propTypes = {
  expo: PropTypes.object,
}

export default ExpoCard
