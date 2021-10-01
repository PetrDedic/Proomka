import styled from "styled-components";

const StyledHero = styled.div`
  width: 90%;
  padding: 5%;
  height: auto;

  border-radius: 2rem;

  background: linear-gradient(45deg, #0b111bc1, #2b313adf);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .navigator {
    width: 20%;
    aspect-ratio: 4/3;

    padding: 1rem;

    color: white;
    text-align: center;

    display: flex;
    justify-content: space-between;
    flex-direction: column;

    transition: 250ms ease-in-out;

    border-radius: 2rem;

    @media (max-width: 1440px) {
      width: 35%;
      margin: 2.5%;
    }
    @media (max-width: 720px) {
      width: 80%;
      margin: 10%;
      aspect-ratio: unset;
      height: auto;
    }

    p {
      margin: 1rem 0;
    }

    &:hover {
      background-color: var(--background-color-tertiary);
      cursor: pointer;

      .fas {
        transition: 250ms ease-in-out;
        border: solid var(--background-color-secondary) 4px;
      }
    }
  }

  .fas {
    font-size: 4rem;
    border: solid var(--background-color-tertiary) 4px;
    border-radius: 100%;

    transition: 250ms ease-in-out;

    width: min-content;
    padding: 2rem;
    margin: 0 auto;

    aspect-ratio: 1/1;

    background: linear-gradient(
      45deg,
      var(--primary),
      var(--secondary),
      var(--primary),
      var(--secondary)
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
`;

const DocsHero = (props) => {
  return (
    <StyledHero>
      <div
        className="navigator"
        onClick={() =>
          document.querySelector("#basics").scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        <i className="fas fa-shapes"></i>
        <p>Základy, které udávájí společný vzhled napříč aplikacemi</p>
      </div>
      <div
        className="navigator"
        onClick={() =>
          document.querySelector("#components").scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        <i className="fas fa-layer-group"></i>
        <p>Komponenty, se kterými můžete stavět základy vašich aplikací</p>
      </div>
      <div
        className="navigator"
        onClick={() =>
          document.querySelector(".#edit").scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        <i className="fas fa-pen"></i>
        <p>Jak postupovat, když chceme upravovat styly</p>
      </div>
      <div
        className="navigator"
        onClick={() =>
          document.querySelector("#download").scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        <i className="fas fa-download"></i>
        <p>Jak začít používat Proomku (stažení) + odkazy</p>
      </div>
    </StyledHero>
  );
};

export default DocsHero;
