import styled from "styled-components";
import { useState } from "react";

const StyledAlert = styled.div`
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
    cursor: pointer;
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
          id={props.id}
          height={props.height}
          width={props.width}
          isClosable={props.isClosable}
          color={props.color}
          textColor={props.textColor}
          onClick={() => setVisible(false)}
          {...props}
        >
          <p className="alert-text">{props.children}</p>
        </StyledAlert>
      ) : null}
    </>
  );
};

export default Alert;
