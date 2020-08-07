import React from "react"
import useMenuQuery from "../../hooks/useMenuQuery"
import LandingBox from "./landingBox"
import Container from "../layout/container"
import style from "./landingBoxes.module.scss"

const LandingBoxes = () => {
  const menu = useMenuQuery()

  return (
    <Container>
      <div className={style.boxContainer}>
        <LandingBox
          text={menu.figurePainting.description}
          title="Peinture figurative"
          link={menu.figurePainting.link}
        />
        <LandingBox
          text={menu.abstractPainting.description}
          title="Peinture abstraite"
          link={menu.abstractPainting.link}
        />
        <LandingBox
          text={menu.tailoredPainting.description}
          title="Peinture sur mesure"
          link={menu.tailoredPainting.link}
        />
      </div>
    </Container>
  )
}

export default LandingBoxes
