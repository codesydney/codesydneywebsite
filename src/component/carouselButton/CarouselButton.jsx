import React from "react"

const CarouselButton = ({ index, onClickSetIndex }) => {
  let onClickHandler = (event) => {
    const { value } = event.target
    onClickSetIndex(parseInt(value))
  }
  return (
    <>
      <label className="custom-radio-button" id="carousel-button">
        <input
          onChange={onClickHandler}
          name="codesydney"
          type="radio"
          className="carousel-button"
          id="carousel-button"
          value={index}
        />
      </label>
    </>
  )
}

export default CarouselButton
