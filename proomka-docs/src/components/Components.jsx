import styled from "styled-components";
import Fade from "react-reveal/Fade";
import {
  Alert,
  Card,
  Badge,
  Modal,
  Switch,
  Table,
  CardMenu,
} from "proomkatest";
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

    transform: translate3d(0, 0, 0);

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
    scroll-margin: 4rem;
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

    transform: translate3d(0, 0, 0);

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

  h4 {
    padding: 1.5rem 0;
    margin-left: 10%;
    font-size: 3.5rem;
    font-weight: 700;
    margin-top: 1rem;
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

    transform: translate3d(0, 0, 0);

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

  p.short,
  div.short {
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

    &.table {
      opacity: 1 !important;
    }
  }

  .proomka-alert {
    margin: 2rem;
    float: left;
  }

  .proomka-card {
    margin: 2rem;
    float: left;
    cursor: unset;

    .proomka-badge,
    .proomka-card-menu {
      cursor: pointer;
      place-self: end;
    }
  }

  .center-card {
    display: grid;
  }

  .proomka-table {
    background: var(--background-color);
    padding: 1rem;
    min-width: 80vw;
    max-width: 80vw;
    .proomka-thead-tr {
      border-radius: 2.5rem;
      background: linear-gradient(45deg, #0b111bc1, #2b313adf);
    }
    opacity: 1 !important;
    * {
      opacity: 1 !important;
    }
  }

  a {
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

    transform: translate3d(0, 0, 0);

    animation: shine 5s ease-in-out infinite;
    @keyframes shine {
      to {
        background-position: 200% center;
      }
    }
  }

  .warning {
    padding: 0 10%;

    p.short.warn {
      max-width: 70%;
      text-align: center;
      padding: 0;
      margin: 1.5rem auto;
    }

    .proomka-card {
      float: unset;
      margin: unset;
      flex-direction: column;

      p.big-warn {
        font-size: 3rem;
        font-weight: 700;
        color: #fff;
        margin: 0.9rem 0 0 2rem;
      }
    }
  }
`;

const ExampleBox = styled.div`
  width: 70%;
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

  &.pos {
    position: relative;
    min-height: 12rem;
  }

  .proomka-card {
    max-width: calc(100% - 4rem);
    cursor: default;
  }
  .proomka-alert {
    max-width: calc(100% - 4rem);
  }
  .proomka-badge {
    cursor: pointer;
  }
`;

const Components = (props) => {
  const [showModal, setShowModal] = useState(false);
  const showModalFn = () => {
    setTimeout(() => {
      setShowModal(false);
    }, 500);
  };

  return (
    <StyledBasics id="components">
      <div onClick={showModalFn}>{showModal ? <Modal /> : null}</div>

      <h2>Komponenty</h2>
      <h3 id="alert">
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
        <div className="short table">
          <Table
            textColor="white"
            headColor="black"
            cellWidth="10rem"
            data={[
              {
                col1: "height",
                length: "✔️",
              },
              {
                col1: "width",
                length: "✔️",
              },
              {
                col1: "color",
                color: "✔️",
              },
              {
                col1: "textColor",
                color: "✔️",
              },
              {
                col1: "delay",
                duration: "✔️",
              },
            ]}
            column={[
              {
                Header: "props",
                accessor: "col1", // accessor is the "key" in the data
              },
              {
                Header: "bool",
                accessor: "bool",
              },
              {
                Header: "length",
                accessor: "length",
              },
              {
                Header: "color",
                accessor: "color",
              },
              {
                Header: "duration",
                accessor: "duration",
              },
            ]}
          />
        </div>
      </Fade>
      <h3 id="badge">
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
        <div className="short table">
          <Table
            textColor="white"
            headColor="black"
            cellWidth="14rem"
            data={[
              {
                col1: "height",
                length: "✔️",
              },
              {
                col1: "width",
                length: "✔️",
              },
              {
                col1: "top",
                length: "✔️",
              },
              {
                col1: "right",
                length: "✔️",
              },
              {
                col1: "color",
                color: "✔️",
              },
              {
                col1: "textColor",
                color: "✔️",
              },
              {
                col1: "colorHover",
                color: "✔️",
              },
              {
                col1: "textColorHover",
                color: "✔️",
              },
            ]}
            column={[
              {
                Header: "props",
                accessor: "col1", // accessor is the "key" in the data
              },
              {
                Header: "bool",
                accessor: "bool",
              },
              {
                Header: "length",
                accessor: "length",
              },
              {
                Header: "color",
                accessor: "color",
              },
            ]}
          />
        </div>
      </Fade>
      <h3 id="card">
        Card <i className="far fa-square"></i>
      </h3>
      <Fade bottom className="wrap">
        <p className="short">
          Slouží jako kontejner k zobrazování obsahu na různé způsoby. Používá
          třídu <span>proomka-card</span>.
        </p>
        <h4>CardMenu</h4>
        <p className="short">
          Box, do kterého můžete umístit navigační či akční tlačítka/prvky.
          Používá třídu <span>proomka-card-menu</span>.
        </p>
        <ExampleBox>
          <Card color="#007784" width="24rem" height="28rem">
            <Badge
              top="1rem"
              right="1rem"
              color="#fff"
              textColorHover="crimson"
            >
              <i className="far fa-heart"></i>
            </Badge>
            <CardMenu />
          </Card>
          <Card color="#2b313a" width="24rem" height="28rem" isScalable>
            <Badge
              top="1rem"
              right="1rem"
              color="#fff"
              textColorHover="crimson"
            >
              <i className="far fa-heart"></i>
            </Badge>
            <CardMenu />
          </Card>
        </ExampleBox>
        <div className="short table">
          <Table
            textColor="white"
            headColor="black"
            cellWidth="10rem"
            data={[
              {
                col1: "isScalable",
                bool: "✔️",
              },
              {
                col1: "height",
                length: "✔️",
              },
              {
                col1: "width",
                length: "✔️",
              },
              {
                col1: "color",
                color: "✔️",
              },
              {
                col1: "textColor",
                color: "✔️",
              },
            ]}
            column={[
              {
                Header: "props",
                accessor: "col1", // accessor is the "key" in the data
              },
              {
                Header: "bool",
                accessor: "bool",
              },
              {
                Header: "length",
                accessor: "length",
              },
              {
                Header: "color",
                accessor: "color",
              },
            ]}
          />
        </div>
      </Fade>
      <h3 id="modal">
        Modal <i className="fas fa-layer-group"></i>
      </h3>
      <Fade bottom className="wrap">
        <p className="short">
          Modalová komponenta pro zobrazení potvrzení nebo formulářů. Používá
          třídy <span>proomka-modal a proomka-modal-content</span>.
        </p>
        <ExampleBox className="pos">
          <Badge
            top="1rem"
            right="1rem"
            textColor="grey"
            color="#46464648"
            colorHover="#00000046"
            textColorHover="black"
            onClick={() => setShowModal(true)}
          >
            <i className="fas fa-layer-group"></i>
          </Badge>
        </ExampleBox>
        <p className="short">
          Vše uvnitř se zarovná na úplný střed obrazovky a{" "}
          <span>není scrollovatelný</span>.
        </p>
      </Fade>
      <h3 id="switch">
        Switch <i className="fas fa-toggle-on"></i>
      </h3>
      <Fade bottom className="wrap">
        <p className="short">
          Toggle komponenta pro lehčí práci z formuláři. Používá třídy{" "}
          <span>
            proomka-switch, proomka-switch-input, proomka-switch-label a
            proomka-switch-knob
          </span>
          .
          <br />
          <br />
          Design styled-components:{" "}
          <a href="https://www.instagram.com/frontendjoe/">
            https://www.instagram.com/frontendjoe/
          </a>
        </p>
        <ExampleBox className="pos">
          <Card
            color="#2b313a"
            width="16rem"
            height="8rem"
            className="center-card proomka-card"
          >
            <Switch
              color="#4a5058"
              knobColorOff="#a1a1a1"
              knobColor="#1f2225"
              style={{ placeSelf: "center" }}
            />
          </Card>
        </ExampleBox>
        <div className="short table">
          <Table
            textColor="white"
            headColor="black"
            cellWidth="10rem"
            data={[
              {
                col1: "isChecked",
                bool: "✔️",
              },
              {
                col1: "color",
                color: "✔️",
              },
              {
                col1: "knobColor",
                color: "✔️",
              },
              {
                col1: "knobColorOff",
                color: "✔️",
              },
              {
                col1: "fn",
                function: "✔️",
              },
            ]}
            column={[
              {
                Header: "props",
                accessor: "col1", // accessor is the "key" in the data
              },
              {
                Header: "bool",
                accessor: "bool",
              },
              {
                Header: "color",
                accessor: "color",
              },
              {
                Header: "function",
                accessor: "function",
              },
            ]}
          />
        </div>
      </Fade>
      <h3 id="table">
        Table <i className="fas fa-toggle-on"></i>
      </h3>
      <Fade bottom className="wrap">
        <p className="short">
          Table komponenta postavená na React Table. Používá třídy{" "}
          <span>
            proomka-table, proomka-thead, proomka-thead-tr, proomka-th,
            proomka-tbody, proomka-tr a proomka-td
          </span>
          .
          <br />
          <br />
          <a href="https://react-table.tanstack.com/">
            https://react-table.tanstack.com/
          </a>
        </p>
        <div className="warning">
          <Card color="#d0af5529" width="100%" height="auto">
            <Badge
              top="1rem"
              right="1rem"
              colorHover="white"
              color="#ffc21c"
              textColor="white"
              textColorHover="#ffc21c"
            >
              <i className="fas fa-exclamation"></i>
            </Badge>
            <p className="short warn">
              Je potřeba nastavit props <span>data</span> a <span>column</span>{" "}
              pro vykreslení tabulky.{" "}
            </p>
          </Card>
        </div>
        <div className="short table">
          <Table
            textColor="white"
            headColor="black"
            cellWidth="10rem"
            data={[
              {
                col1: "cellWidth",
                length: "✔️",
              },
              {
                col1: "cellHeight",
                length: "✔️",
              },
              {
                col1: "color",
                color: "✔️",
              },
              {
                col1: "textColor",
                color: "✔️",
              },
              {
                col1: "evenColor",
                color: "✔️",
              },
              {
                col1: "headColor",
                color: "✔️",
              },
            ]}
            column={[
              {
                Header: "props",
                accessor: "col1", // accessor is the "key" in the data
              },
              {
                Header: "length",
                accessor: "length",
              },
              {
                Header: "color",
                accessor: "color",
              },
            ]}
          />
        </div>
      </Fade>
    </StyledBasics>
  );
};

export default Components;
