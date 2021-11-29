import styled from "styled-components";

const StyledHero = styled.div`
  width: 100%;
  min-height: 100vh;

  display: grid;
  place-items: center;

  cursor: default;

  h1 {
    align-self: end;
    margin-top: 2rem;

    font-size: 15vw;

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

  .used {
    width: 100%;
    height: auto;
    align-self: end;
    margin-bottom: 2rem;

    .used-text-wrapper {
      margin: 1rem auto;
      width: 80%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      @media (max-width: 1280px) {
        width: 100%;
      }

      .double {
        width: 45%;
        text-align: center;

        @media (max-width: 960px) {
          display: flex;
          flex-direction: column;
        }
      }

      .used-text {
        font-size: 1.5rem;
        color: var(--background-color-tertiary);
        margin: auto;
        text-align: center;

        text-decoration: none;

        transition: 150ms;

        &:hover {
          color: white;
        }

        &:nth-child(1) {
          margin-right: 2rem;
        }

        @media (max-width: 1690px) {
          flex: 50%;
          font-size: 1.25rem;
        }
        @media (max-width: 960px) {
          flex: 100%;

          width: 100%;
          margin-bottom: 1rem;
        }
      }
    }

    .rentals {
      font-family: "Playfair Display", serif;
      font-weight: 800;
      padding-bottom: 6px;
    }
  }

  .border-displacement {
    height: 1rem;
    width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1280px) {
      width: 100%;
    }

    .border-line {
      float: left;
      width: 45%;
      height: 1px;
      border-top: 1px var(--background-color-tertiary) solid;
    }
  }
`;

const Hero = (props) => {
  return (
    <StyledHero>
      <h1>Proomka</h1>
      <div className="used">
        <div className="border-displacement">
          <div className="border-line"></div>
          <svg
            height="16"
            width="16"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            color="var(--background-color-tertiary)"
          >
            <circle
              cx="50"
              cy="50"
              r="50"
              fill="var(--background-color-tertiary)"
            />
          </svg>
          <div className="border-line"></div>
        </div>
        <div className="used-text-wrapper">
          <div className="double">
            <a
              href="https://rentals.pslib.cloud/"
              className="rentals used-text"
            >
              Rentals
            </a>
            <a href="https://prace2.pslib.cloud/" className="used-text">
              Dlouhodobé práce
            </a>
          </div>
          <div className="double">
            <a href="xxxxxx" className="used-text">
              Soboty s technikou
            </a>
            <a href="https://praxe2.pslib.cloud/" className="used-text">
              Správa praxí
            </a>
          </div>
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
