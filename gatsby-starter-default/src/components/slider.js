import React from "react"
import Slick from "react-slick"
import useExposQuery from "../hooks/useExposQuery"
import Slide from "./slide"

const settings = {
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 10000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const renderSlides = slides =>
  slides.map(slide => (
    <Slide
      img={slide.node.sliderImage.asset.fluid}
      title={slide.node.name}
      description={slide.node.description}
      date={slide.node.date}
      key={slide.node.id}
    />
  ))

const Slider = () => {
  const data = useExposQuery()

  return <Slick {...settings}>{renderSlides(data)}</Slick>
}

export default Slider
