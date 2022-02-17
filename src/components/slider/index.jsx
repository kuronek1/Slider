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

export default function Slider() {

const [slide, setSlide] = useState(0);

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
    <Slides>
      <img src={sliderList[slide]} alt={"slide № " + slide} />
    </Slides>
  </Div>
)
}
