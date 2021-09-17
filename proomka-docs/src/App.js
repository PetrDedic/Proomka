import "./App.css";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import Hero from "./components/Hero";

const Wrapper = styled.div`
  height: auto;
  min-height: 100vh;

  width: 80%;
  margin: auto;

  @media (max-width: 960px) {
    width: 90%;
  }
`;

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Wrapper>
        <Hero></Hero>
      </Wrapper>
    </div>
  );
}

export default App;
