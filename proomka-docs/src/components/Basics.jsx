import styled from "styled-components";

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
  }

  p {
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
      <h2>Z??klady</h2>
      <p className="desc">
        To nejd??le??it??j????, co tato dokumentace nab??z??. A?? u?? se jedn?? o
        barvi??ky, zakulacen?? hrany nebo celkov?? mood aplikace...
      </p>
      <h3 id="colors">Barvy</h3>
      <div className="wrap">
        <p className="short">
          Nap?????? aplikacemi budete pou????vat spoustu r??zn??ch barvi??ek. Proto je
          dobr?? si ur??it n??jak?? z??kladn?? a pojmenovat je.
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
          Barvy se daj?? dob??e vyu????t, nap????klad p??i stylov??n??{" "}
          <span>tla????tek a pozad??</span>.
        </p>
      </div>
      <h3 id="elevation">Elevace</h3>
      <div className="wrap">
        <p className="short">
          P??i pou??it?? elevace se jedn?? o efekt
          <span> vyzdvyhnut?? nad pozad??</span>. Jednodu??e pou??ijeme st??ny, kter??
          do aplikace p??idaj?? reali??nost a vdechnou komponent?? ??ivot.
        </p>
        <ExampleBox>
          <StyledCard>
            <StyledCardText>Hlavi??ka</StyledCardText>
            <StyledCardDescription>Popisek</StyledCardDescription>
          </StyledCard>
          <StyledCard className="blank">
            <StyledCardText>Hlavi??ka</StyledCardText>
            <StyledCardDescription>Popisek</StyledCardDescription>
          </StyledCard>
        </ExampleBox>

        <p className="desc">box-shadow: 0 8px 20px 0px #0000003b;</p>

        <p className="short">
          V??t??inou tento efekt vyu??ijeme na pozad??, co se od sebe moc neli????.
        </p>
      </div>
      <h3 id="radius">Zaoblen??</h3>
      <div className="wrap">
        <p className="short">
          Zaoblen?? hrany se u?? pou????vaj?? skoro v??ude. D??vod? Vypadaj??{" "}
          <span>dob??e</span> a <span>p????telsky</span> na oko. Proto komponenty
          zaobl??me.
        </p>
        <ExampleBox>
          <StyledCard>
            <StyledCardText>Hlavi??ka</StyledCardText>
          </StyledCard>
          <StyledCard className="sharp">
            <StyledCardText>Hlavi??ka</StyledCardText>
          </StyledCard>
          <StyledCard className="sharp blank">
            <StyledCardText>Hlavi??ka</StyledCardText>
          </StyledCard>
        </ExampleBox>

        <p className="desc">border-radius: 2.5rem;</p>

        <p className="short">
          Velikost zaoblen?? by m??la z??viset na m??st?? pou????t?? komponenty, v??t??ina
          p????pad?? ale pou??ije 2rem a?? 2.5rem.
        </p>
      </div>
      <h3 id="see">Pr??hlednost</h3>
      <div className="wrap">
        <p className="short">
          A??koliv pr??hlednost prakticky skoro nikde nevyu??ijeme, st??le se d??
          vyu????t v designu komponent "p??es sebe" a nebo kdy?? chceme vid??t
          pozad??. Dobr?? p????klad je t??eba <span>??vodn?? str??nka Proomky</span>.
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
      </div>
    </StyledBasics>
  );
};

export default Basics;
