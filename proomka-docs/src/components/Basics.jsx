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
    font-size: 4.5rem;
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

    @media (max-width: 720px) {
      font-size: 2.75rem;
      padding: 1rem;
    }
  }

  h3 {
    padding: 1.5rem 0;
    margin-left: 10%;
    font-size: 4rem;
    font-weight: 700;
    margin-top: 6rem;

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

    @media (max-width: 720px) {
      font-size: 2.75rem;
      margin-top: 3rem;
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

    @media (max-width: 720px) {
      font-size: 1.75rem;
      padding: 2rem 10%;
    }

    &.desc {
      font-style: italic;
      opacity: 0.5;
      font-size: 1.75rem;

      @media (max-width: 720px) {
        font-size: 1.25rem;
      }
    }

    &.short {
      max-width: 50%;

      @media (max-width: 720px) {
        max-width: 100%;
      }
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

  &.img {
    background: linear-gradient(
      45deg,
      var(--primary),
      var(--secondary),
      var(--primary)
    );
  }
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
    box-shadow: 0 8px 20px 0px #0000003b;
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

const StyledCard = styled.div`
  background-color: #f7f7f7;
  border-radius: 2.5rem;
  box-shadow: 0 8px 20px 0px #0000003b;
  transition: 350ms;
  width: 16rem;
  position: relative;
  max-width: calc(100% - 4rem);
  height: auto;
  display: grid;
  margin: 2rem;
  float: left;
  text-align: center;

  &.sharp {
    border-radius: 0;
  }
  &.blank {
    box-shadow: unset;
  }
  &.see {
    background: linear-gradient(45deg, #0b111bc1, #2b313adf);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);

    width: 16rem;
    height: 8rem;
  }
  &.see2 {
    background: linear-gradient(45deg, #0b111b, #2b313a);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);

    width: 16rem;
    height: 8rem;
  }
  &.see3 {
    background: linear-gradient(45deg, #0b111b76, #2b313a76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);

    width: 16rem;
    height: 8rem;
  }
`;

const StyledCardText = styled.div`
  max-width: 100%;
  margin: 1rem;
  font-size: 1.5rem;
  height: auto;
  p {
    max-width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const StyledCardDescription = styled.div`
  margin: 0.75rem;
  font-size: 1rem;
  color: grey;
  height: auto;
  p {
    max-width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Basics = (props) => {
  return (
    <StyledBasics id="basics">
      <h2>Základy</h2>
      <p className="desc">
        To nejdůležitější, co tato dokumentace nabízí. Ať už se jedná o
        barvičky, zakulacené hrany nebo celkový mood aplikace...
      </p>
      <h3>Barvy</h3>
      <Fade bottom className="wrap">
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
      <h3>Elevace</h3>
      <Fade bottom className="wrap">
        <p className="short">
          Při použití elevace se jedná o efekt
          <span> vyzdvyhnutí nad pozadí</span>. Jednoduše použijeme stíny, které
          do aplikace přidají realičnost a vdechnou komponentě život.
        </p>
        <ExampleBox>
          <StyledCard>
            <StyledCardText>Hlavička</StyledCardText>
            <StyledCardDescription>Popisek</StyledCardDescription>
          </StyledCard>
          <StyledCard className="blank">
            <StyledCardText>Hlavička</StyledCardText>
            <StyledCardDescription>Popisek</StyledCardDescription>
          </StyledCard>
        </ExampleBox>

        <p className="desc">box-shadow: 0 8px 20px 0px #0000003b;</p>

        <p className="short">
          Většinou tento efekt využijeme na pozadí, co se od sebe moc neliší.
        </p>
      </Fade>
      <h3>Zaoblení</h3>
      <Fade bottom className="wrap">
        <p className="short">
          Zaoblené hrany se už používají skoro všude. Důvod? Vypadají{" "}
          <span>dobře</span> a <span>přátelsky</span> na oko. Proto komponenty
          zaoblíme.
        </p>
        <ExampleBox>
          <StyledCard>
            <StyledCardText>Hlavička</StyledCardText>
          </StyledCard>
          <StyledCard className="sharp">
            <StyledCardText>Hlavička</StyledCardText>
          </StyledCard>
          <StyledCard className="sharp blank">
            <StyledCardText>Hlavička</StyledCardText>
          </StyledCard>
        </ExampleBox>

        <p className="desc">border-radius: 2.5rem;</p>

        <p className="short">
          Velikost zaoblení by měla záviset na místě použítí komponenty, většina
          případů ale použije 2rem až 2.5rem.
        </p>
      </Fade>
      <h3>Průhlednost</h3>
      <Fade bottom className="wrap">
        <p className="short">
          Ačkoliv průhlednost prakticky skoro nikde nevyužijeme, stále se dá
          využít v designu komponent "přes sebe" a nebo když chceme vidět
          pozadí. Dobrý příklad je třeba <span>úvodní stránka Proomky</span>.
        </p>
        <ExampleBox className="img">
          <StyledCard className="see2" />
          <StyledCard className="see" />
          <StyledCard className="see3" />
        </ExampleBox>

        <p className="desc">
          background: linear-gradient(45deg, #0b111b76, #2b313a76);
          <br />
          backdrop-filter: blur(4px);
          <br />
          -webkit-backdrop-filter: blur(4px);
        </p>
      </Fade>
    </StyledBasics>
  );
};

export default Basics;
