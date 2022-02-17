import { useState, useEffect } from "react"
import sliderList from "../../images/imageConst.js"
import styled from "styled-components"


const Div = styled.div`
  position: relative;
  width: 1360px;
  border: 5px solid black;
  overflow: hidden;
`
const Slides = styled.div`
  display: flex;
  height: 768px;
`
const Btn = styled.img`
  position: absolute;
  top: 50%;
  right: 5%;
  z-index: 10;
  &:nth-child(even) {
    transform: rotate(180deg);
    left: 5%;
  }
`

export default function Slider() {

const [slide, setSlide] = useState(0);

const onClickNext = () => {
  setSlide((prevSlide) => (prevSlide + 1) % sliderList.length);
}
const onClickPrev = () => {
  if(slide === 0) {
    setSlide(sliderList.length)
  }
  setSlide((prevSlide) => (prevSlide - 1) % sliderList.length);
}

useEffect(() => {
  const interval = setInterval(() => {
    setSlide((prevSlide) => (prevSlide + 1) % sliderList.length);
  }, 2000);
  console.log("slide №" + slide);
  return () => {
    clearInterval(interval);
  };
}, [slide]);

return (
  <Div >
    <Btn 
      src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/ffffff/external-arrow-arrow-flatart-icons-solid-flatarticons-6.png" 
      id="nextBtn"
      onClick={onClickPrev}
      />
    <Btn 
      src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/ffffff/external-arrow-arrow-flatart-icons-solid-flatarticons-6.png" 
      id="prevBtn"
      onClick={onClickNext}
    />
  
    <Slides>
      <img src={sliderList[slide]} alt={"slide № " + slide} />
    </Slides>
  </Div>
)
}
