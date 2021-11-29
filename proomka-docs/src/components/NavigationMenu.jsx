import styled from "styled-components";
import { useState } from "react";

const StyledNavigationMenu = styled.div`
  position: fixed;

  transform: ${(props) => (!props.open ? "translateX(100%)" : "translateX(0)")};

  transition: 250ms;

  z-index: 999999999;
  cursor: pointer;

  right: 0;
  top: 0;

  width: 16rem;
  height: 100%;

  overflow-y: visible;

  color: #c2c2c2;
  background: linear-gradient(45deg, #0b111bc1, #2b313adf);
  backdrop-filter: blur(4px);

  border-radius: 1.5rem 0 0 1.5rem;

  display: flex;
  flex-direction: column;

  .scroller {
    padding: 2.5rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  }

  .name {
    margin-top: 2rem;
    margin-bottom: 1rem;
    opacity: 1 !important;
    font-size: 1.5rem;
    font-weight: 700;
    transition: 150ms;

    &:hover {
      color: white;
    }
  }

  .nav {
    margin: 0.5rem 1rem;
    opacity: 1 !important;
    font-size: 1.2rem;
    font-weight: 500;
    text-decoration: none;
    font-style: normal;
    transition: 150ms;

    &:hover {
      color: white;
    }
  }

  .opener {
    position: absolute;
    left: -3rem;
    top: 50%;

    width: 3rem;
    height: 3rem;
    background-color: var(--background-color-secondary);
    border-radius: 1.5rem 0 0 1.5rem;

    display: grid;
    place-items: center;

    transition: 250ms;

    &:hover {
      color: white;
    }

    /*i {
      animation: shake infinite 5s;

      @keyframes shake {
        0% {
          transform: rotate(-20deg);
        }
        25% {
          transform: rotate(0);
        }
        75% {
          transform: rotate(0);
        }
        100% {
          transform: rotate(-20deg);
        }
      }
    }*/
  }
`;

const NavigationMenu = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <StyledNavigationMenu open={open}>
      <div className="opener" onClick={() => setOpen(!open)}>
        <i className="fas fa-bars"></i>
      </div>
      <div className="scroller">
        <div
          className="name"
          onClick={() =>
            document.querySelector("#basics").scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Základy
        </div>
        <i
          className="nav"
          onClick={() =>
            document.querySelector("#colors").scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Barvy
        </i>
        <i
          className="nav"
          onClick={() =>
            document.querySelector("#elevation").scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Elevace
        </i>
        <i
          className="nav"
          onClick={() =>
            document.querySelector("#radius").scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Zaoblení
        </i>
        <i
          className="nav"
          onClick={() =>
            document.querySelector("#see").scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Průhlednost
        </i>
        <div
          className="name"
          onClick={() =>
            document.querySelector("#components").scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Komponenty
        </div>
        <i
          className="nav"
          onClick={() =>
            document.querySelector("#alert").scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Alert
        </i>
        <i
          className="nav"
          onClick={() =>
            document.querySelector("#badge").scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Badge
        </i>
        <i
          className="nav"
          onClick={() =>
            document.querySelector("#card").scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Card
        </i>
        <i
          className="nav"
          onClick={() =>
            document.querySelector("#modal").scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Modal
        </i>
        <i
          className="nav"
          onClick={() =>
            document.querySelector("#switch").scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Switch
        </i>
        <i
          className="nav"
          onClick={() =>
            document.querySelector("#table").scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Table
        </i>
      </div>
    </StyledNavigationMenu>
  );
};

export default NavigationMenu;
