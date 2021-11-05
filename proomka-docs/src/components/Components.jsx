import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { useState } from "react";

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

    .far {
      padding-left: 2rem;
    }
  }

  p.short {
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

const StyledAlert = styled.div`
  margin: 2rem;
  float: left;

  position: relative;

  cursor: pointer;

  border-radius: 2.5rem;

  box-shadow: 0 8px 20px 0px #0000003b;

  background-color: ${(props) => (props.color ? props.color : "white")};
  color: ${(props) => (props.textColor ? props.textColor : "unset")};

  height: ${(props) => (props.height ? props.height : "3rem")};
  width: ${(props) => (props.width ? props.width : "12rem")};

  transition: 250ms;

  &:hover {
    opacity: 0.9;
  }

  p.alert-text {
    line-height: ${(props) => (props.height ? props.height : "3rem")};
    margin: 0 1rem;
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: calc(100% - 4rem);
  }

  .icon {
    text-align: right;
  }
`;

const Alert = (props) => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      {visible ? (
        <StyledAlert
          className="proomka-alert"
          {...props}
          /*
          id={props.id}
          height={props.height}
          width={props.width}
          isClosable={props.isClosable}
          color={props.color}
          textColor={props.textColor}
          */
          onClick={() => setVisible(false)}
        >
          <p className="alert-text">{props.children}</p>
        </StyledAlert>
      ) : null}
    </>
  );
};

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
          třídu "proomka-alert".
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
          {"const [visible, setVisible] = useState(true)"}
          <br />
          {"onClick = {() => setVisible(false)}"}
          <br />
          <br />
          <br />
          id = {"{props.id}"}
          <br />
          height = {"{props.height}"}
          <br />
          width = {"{props.width}"}
          <br />
          color = {"{props.color}"}
          <br />
          textColor = {"{props.textColor}"}
          <br />
          <br />
          {"Nebo možnost kratšího zápisu:"}
          <br />
          {"{...props}"}
        </p>
      </Fade>
    </StyledBasics>
  );
};

export default Components;
