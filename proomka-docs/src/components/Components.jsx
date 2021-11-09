import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { Alert, Card, Badge } from "proomkatest";

const StyledBasics = styled.div`
  height: auto;
  width: 100%;

  background-color: black;

  padding-top: 16rem;

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
    display: flex;
    align-items: center;

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

    .far,
    .fas {
      padding-left: 2rem;
    }
  }

  p.short {
    font-size: 2rem;
    color: white;
    opacity: 0.85 !important;
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
      opacity: 0.5 !important;
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

  .proomka-alert {
    margin: 2rem;
    float: left;
  }

  .proomka-card {
    margin: 2rem;
    float: left;
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

const Components = (props) => {
  return (
    <StyledBasics id="components">
      <h2>Komponenty</h2>
      <h3>
        Alert <i className="far fa-bell"></i>
      </h3>
      <Fade bottom className="wrap">
        <p className="short">
          Jednoduchý alert box sloužící k zobrazení stavové zprávy. Používá
          třídu <span>proomka-alert</span>.
          <br />
          Po kliknutí alert zmizí.
        </p>
        <ExampleBox>
          <Alert textColor="white" width="16rem" height="4rem" color="#00ae7c">
            <i className="far fa-check-circle icon" /> Úspěšně odhlášen
          </Alert>
          <Alert textColor="white" width="16rem" height="4rem" color="#d05555">
            <i className="fas fa-exclamation-circle icon" /> Neplatná operace
          </Alert>
          <Alert textColor="white" width="16rem" height="4rem" color="#007784">
            <i className="fas fa-info-circle icon"></i> Tohle je dlouhá zpráva
          </Alert>
        </ExampleBox>
        <p className="short desc">
          id = id komponenty
          <br />
          height = výška ("4rem")
          <br />
          width = šířka ("12rem")
          <br />
          color = barva pozadí ("#007784")
          <br />
          textColor = barva textu ("white")
          <br />
          delay = doba trvání zobrazení v ms, pokud je nastavena ("3000")
        </p>
      </Fade>
      <h3>
        Badge <i className="fas fa-certificate"></i>
      </h3>
      <Fade bottom className="wrap">
        <p className="short">
          Komponenta pro viditelné zobrazení a upozornění na nějakou vlastnost.
          Používá třídu <span>proomka-badge</span>.
        </p>
        <ExampleBox>
          <Card color="#007784" width="16rem" height="16rem">
            <Badge top="1rem" right="1rem" color="#fff" textColorHover="orange">
              <i className="fas fa-moon"></i>
            </Badge>
          </Card>
          <Card color="#2b313a" width="16rem" height="16rem">
            <Badge
              top="1rem"
              right="1rem"
              textColor="grey"
              color="#46464648"
              colorHover="#f1f1f148"
              textColorHover="white"
            >
              <i className="fas fa-heart"></i>
            </Badge>
          </Card>
          <Card color="#fff" width="16rem" height="16rem">
            <Badge
              top="1rem"
              right="1rem"
              colorHover="#d055553e"
              textColor="#d05555"
              textColorHover="#d43b3b"
            >
              <i className="fas fa-exclamation"></i>
            </Badge>
          </Card>
          <Card color="#d0b055" width="16rem" height="16rem">
            <Badge
              top="1rem"
              right="1rem"
              colorHover="white"
              color="#ffc21c"
              textColor="white"
              textColorHover="#ffc21c"
            >
              <i className="fas fa-question"></i>
            </Badge>
          </Card>
        </ExampleBox>
        <p className="short desc">
          id = id komponenty
          <br />
          height = výška ("4rem")
          <br />
          width = šířka ("12rem")
          <br />
          color = barva pozadí ("#007784")
          <br />
          textColor = barva textu ("white")
          <br />
          colorHover = barva pozadí při přejetí ("#007784")
          <br />
          textColorHover = barva textu při přejetí ("white")
          <br />
          top = odsazení nahoře ("1rem")
          <br />
          right = odsazení vpravo ("1rem")
        </p>
      </Fade>
      <h3>
        Card <i className="far fa-square"></i>
      </h3>
      <Fade bottom className="wrap">
        <p className="short">
          Slouží jako kontejner k zobrazování obsahu na různé způsoby. Používá
          třídu <span>proomka-card</span>.
        </p>
        <ExampleBox>
          <Card color="#007784" width="16rem" height="9rem" isScalable></Card>
          <Card color="#2b313a" width="16rem" height="9rem" isScalable></Card>
          <Card color="#fff" width="16rem" height="9rem" isScalable></Card>
        </ExampleBox>
        <p className="short desc">
          id = id komponenty
          <br />
          height = výška ("4rem")
          <br />
          width = šířka ("12rem")
          <br />
          color = barva pozadí ("#007784")
          <br />
          textColor = barva textu ("white")
          <br />
          isScalable = zvětšení při přejetí
        </p>
      </Fade>
    </StyledBasics>
  );
};

export default Components;
