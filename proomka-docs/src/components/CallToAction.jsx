import styled from "styled-components";
import { useHistory } from "react-router-dom";

const StyledAction = styled.button`
  height: auto;
  min-height: 3rem;
  width: auto;
  min-width: 6rem;

  padding: 2rem 4rem;

  font-size: 1.5rem;
  font-weight: 600;

  background-color: var(--background-color);
  color: white;

  border-radius: 2rem;
  border: 0.25rem solid white;

  display: block;
  margin: auto;
  margin-bottom: ${(props) => (props.bottomMargin ? "4rem" : "0")};

  transition: 250ms ease-in-out;

  &:hover {
    background-color: var(--primary);
    color: white;
    cursor: pointer;
    border: 0.25rem solid var(--primary);
  }
`;

const CallToAction = (props) => {
  const history = useHistory();

  return (
    <StyledAction
      bottomMargin={props.bottomMargin}
      onClick={() => {
        history.push("/docs");
        window.scrollTo(0, 0);
        setTimeout(() => {
          document.querySelector("body").scrollTo(0, 0);
        }, 0); //behaviour = instant
      }}
    >
      Šup na to
    </StyledAction>
  );
};

export default CallToAction;
