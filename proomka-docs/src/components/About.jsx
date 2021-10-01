import styled from "styled-components";
import card from "../card.svg";

const StyledAbout = styled.div`
  width: 85%;
  height: auto;

  display: grid;
  grid-template-columns: 50% auto;
  grid-template-rows: 25% auto;
  gap: 4rem;
  grid-template-areas:
    "header text"
    "image text";

  @media (max-width: 720px) {
    text-align: center;

    grid-template-columns: 100%;
    grid-template-rows: auto;
    gap: 2rem;
    grid-template-areas:
      "header"
      "image"
      "text";
  }

  .header {
    grid-area: header;
  }
  .text {
    display: grid;
    place-items: start;
    grid-area: text;

    div {
      height: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }
  }
  .image {
    grid-area: image;
    height: 100%;
    min-height: 40vh;
    max-width: 100%;

    @media (max-width: 1440px) {
      min-height: 30vh;
    }

    @media (max-width: 720px) {
      margin: auto;
    }
  }

  background: linear-gradient(45deg, #0b111bc1, #2b313adf);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  border-radius: 2rem;

  margin: 8rem 0;
  padding: 7.5%;

  color: white;
  font-size: 3vh;
  font-weight: 300;

  @media (max-width: 1440px) {
    font-size: 2.5vh;
  }
  @media (max-width: 1280px) {
    font-size: 1.5rem;
  }

  @media (max-width: 980px) {
    font-size: 1.25rem;
  }

  @media (max-width: 720px) {
    margin: 4rem 0;
    font-size: 1rem;
  }

  span {
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

  h2 {
    font-size: 4rem;
    font-weight: 700;
    text-align: left;

    @media (max-width: 980px) {
      font-size: 3rem;
    }

    @media (max-width: 720px) {
      text-align: center;
    }

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
`;

const About = (props) => {
  return (
    <StyledAbout>
      <h2 className="header">O co jde?</h2>
      <div className="text">
        <div>
          <p>
            Jedná se o open-source stylovou knihovnu obsahující{" "}
            <span>jednotný styl</span>.
            <br />
            <br />
          </p>
          <p>
            Cílem je snaha o jednotné použití napříč aplikacemi používané školou
            ve vývojovém prostředí Reactu. Proto se v dokumentaci nachází nejen{" "}
            <span>přehled designu</span> ale i <span>komponenty</span> k použití
            ve vašich projektech.
          </p>
        </div>
      </div>

      <img src={card} alt="card" className="image" />
    </StyledAbout>
  );
};

export default About;
