import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import styled from "styled-components";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import About from "./components/About";
import Fade from "react-reveal/Fade";

const history = createBrowserHistory();

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
  }
*/
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
      <Router history={history}>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Wrapper key={Math.random()} style={{ overflow: "hidden" }}>
              <Fade bottom>
                <Hero></Hero>
              </Fade>
              <Fade bottom>
                <About></About>
              </Fade>
            </Wrapper>
          </Route>
          <Route exact path="/docs">
            <Wrapper key={Math.random()}></Wrapper>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
