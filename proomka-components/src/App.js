import { createBrowserHistory } from "history";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import styled from "styled-components";
import Alert from "./lib/components/Alert";

const StyledWrapper = styled.div`
  min-height: 100vh;
  min-width: 100%;

  background-color: #0b111b;

  display: grid;
  place-items: center;

  font-family: "Poppins", sans-serif;
`;

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <StyledWrapper>
        <Router history={history}>
          <Switch>
            <Route path="/alert" element={<Alert />} />
          </Switch>
        </Router>
      </StyledWrapper>
    </div>
  );
}

export default App;
