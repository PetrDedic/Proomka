import styled from "styled-components";
import Fade from "react-reveal/Fade";

const StyledBasics = styled.div`
  height: auto;
  width: 100%;

  background-color: black;

  margin-top: 8rem;

  scroll-margin: 3rem;

  h2 {
    padding: 2rem;
    font-size: 6rem;
    font-weight: 700;
    text-align: center;

    background: linear-gradient(
      45deg,
      var(--primary),
      var(--secondary),
      var(--primary)
    );
    background-size: 200% auto;

    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: shine 5s ease-in-out infinite;
    @keyframes shine {
      to {
        background-position: 200% center;
      }
    }
  }

  h3 {
    padding: 1.5rem 0;
    margin-left: 10%;
    font-size: 4rem;
    font-weight: 700;

    background: linear-gradient(
      45deg,
      var(--primary),
      var(--secondary),
      var(--primary)
    );
    background-size: 200% auto;

    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: shine 5s ease-in-out infinite;
    @keyframes shine {
      to {
        background-position: 200% center;
      }
    }
  }

  p {
    font-size: 2rem;
    color: white;
    opacity: 0.85;
    font-weight: 200;

    width: 80%;
    padding: 4rem 10%;
    height: auto;

    span {
      font-weight: 400;
    }

    &.desc {
      font-style: italic;
      opacity: 0.5;
    }

    &.short {
      max-width: 50%;
    }
  }
`;

const ExampleBox = styled.div`
  width: 75%;
  padding: 0 5%;

  height: auto;
  min-height: 4rem;
  overflow: auto;

  border-radius: 2rem;

  margin: auto;

  background-color: white;
`;

const StyledColorExample = styled.div`
  float: left;
  text-align: center;

  border-radius: 2rem;

  margin: 0.75rem 2rem;
  padding: 0 1rem;

  .colorExample {
    float: left;
    padding: 0.5rem;
  }
  .color {
    color: ${(props) => (props.darkText ? "black" : props.color)};
  }
  .color-button {
    background-color: ${(props) => props.color};
    color: ${(props) => (props.darkText ? "black" : "white")};
    border-radius: 2rem;
    padding: 0.5rem 1.5rem;
  }
`;

const ColorExample = (props) => {
  return (
    <StyledColorExample color={props.color} darkText={props.darkText}>
      <div className="color colorExample">{props.color}</div>
      <div className="color-button colorExample">{props.text}</div>
    </StyledColorExample>
  );
};

const Basics = (props) => {
  return (
    <StyledBasics id="basics">
      <h2>Základy</h2>
      <p className="desc">
        To nejdůležitější, co tato dokumentace nabízí. Ať už se jedná o
        barvičky, zakulacené hrany nebo celkový mood aplikace...
      </p>
      <Fade bottom>
        <h3>Barvy</h3>
        <p className="short">
          Napříč aplikacemi budete používat spoustu různých barviček. Proto je
          dobré si určit nějaké základní a pojmenovat je.
        </p>
        <ExampleBox>
          <ColorExample color="#007784" text="Primary (blue)" />
          <ColorExample color="#d05555" text="Danger (red)" />
          <ColorExample color="#00ae7c" text="Accept (green)" />
          <ColorExample color="#d0b055" text="Warning (yellow)" />
          <ColorExample
            color="#f7f7f7"
            text="Light Background (bgLight)"
            darkText
          />
          <ColorExample color="#2b313a" text="Dark Background (bgDark)" />
        </ExampleBox>

        <p className="short">
          Barvy se dají dobře využít, například při stylování{" "}
          <span>tlačítek a pozadí</span>.
        </p>
      </Fade>
    </StyledBasics>
  );
};

export default Basics;
