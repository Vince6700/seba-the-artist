import { useState } from "react"

const useLightBox = images => {
  const [fullScreenIndex, setFullScreenIndex] = useState(null)

  const handleFullScreen = index => {
    setFullScreenIndex(index)
  }

  const handleCloseModal = () => {
    setFullScreenIndex(null)
  }

  const handleNext = () => {
    let newIndex
    fullScreenIndex === images.length - 1
      ? (newIndex = 0)
      : (newIndex = fullScreenIndex + 1)
    setFullScreenIndex(newIndex)
  }

  const handlePrevious = () => {
    let newIndex
    fullScreenIndex === 0
      ? (newIndex = images.length - 1)
      : (newIndex = fullScreenIndex - 1)
    setFullScreenIndex(newIndex)
  }

  return {
    fullScreenIndex,
    setFullScreenIndex,
    handleFullScreen,
    handleCloseModal,
    handleNext,
    handlePrevious,
  }
}

export default useLightBox
