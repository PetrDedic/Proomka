import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import styled from "styled-components";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import About from "./components/About";
import CallToAction from "./components/CallToAction";
import DocsHero from "./components/DocsHero";
import Basics from "./components/Basics";
import ScrollToTop from "./components/ScrollToTop";
import Components from "./components/Components";
import NavigationMenu from "./components/NavigationMenu";

const Wrapper = styled.div`
  /*animation: fadeInDown 1s;

  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translateY(-5rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }*/

  height: auto;

  width: 80%;
  margin: auto;

  @media (max-width: 960px) {
    width: 90%;
  }

  padding-top: ${(props) => (props.topPadding ? "8rem" : "0")};
`;

const Hider = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;

  background-color: var(--background-color);
`;

const MaxCenterDiv = styled.div`
  width: 100%;
`;

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Wrapper key={Math.random()} style={{ overflow: "hidden" }}>
              <Hero></Hero>
              <About></About>
              <MaxCenterDiv>
                <CallToAction bottomMargin />
              </MaxCenterDiv>
            </Wrapper>
          </Route>
          <Route exact path="/docs">
            <NavigationMenu />
            <Hider className="overflow">
              <Wrapper key={Math.random()} topPadding>
                <DocsHero></DocsHero>
              </Wrapper>
              <Basics></Basics>
              <Components></Components>
            </Hider>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
