import Slider from "./components/slider/index.jsx"
import styled from "styled-components";

const FullDiv = styled.div`
  height: 98vh;
  width: 98vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <FullDiv>
      <Slider />
    </FullDiv>
  );
}

export default App;
