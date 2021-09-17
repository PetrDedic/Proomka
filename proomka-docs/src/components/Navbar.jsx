import styled from "styled-components";

const StyledNavbar = styled.div`
  z-index: 10000;
  position: fixed;
  top: 0px;
  width: 100%;
  height: 4rem;

  border-bottom: 1px solid #2b313a;

  background-color: var(--background-color);

  .navbar-wrapper {
    display: flex;
    justify-content: space-between;
    height: 4rem;
    width: 80%;
    margin: auto;

    @media (max-width: 980px) {
      width: 90%;
    }

    @media (max-width: 720px) {
      width: 100%;
    }

    p {
      font-size: 2.75rem;
      margin: 0.5rem;
      margin-block-start: 0;
      margin-block-end: 0;
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

      @media (max-width: 720px) {
        display: none;
      }
    }
  }

  .navbar-menu {
    font-size: 1.5rem;
    padding: 1rem;

    a {
      color: white;
      text-decoration: none;
      margin: 1rem;
      transition: 250ms;

      &:hover {
        color: var(--secondary);
      }

      @media (max-width: 580px) {
        font-size: 1.25rem;
      }
    }
  }
`;

const Navbar = (props) => {
  return (
    <StyledNavbar>
      <div className="navbar-wrapper">
        <p>Proomka</p>
        <div className="navbar-menu">
          <a href="#about">Co to je?</a>
          <a href="#docs">Dokumentace</a>
        </div>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
