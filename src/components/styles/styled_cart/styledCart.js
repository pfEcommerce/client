import styled from "styled-components";
import theme from "../theme";

const StyledCart = styled.div`
  position: fixed;
  padding: 1em;
  top: 0;
  right: 0;
  width: 23em;
  height: 100vh;
  background-color: ${theme.colors.mainDark};
  color: ${theme.colors.mainGreen} !important;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 1s;

  h2 {
  }

  .contentCards {
    display: flex;
    background-color: ${theme.colors.serDark};
    width: 100%;
    height: 100%;
    align-items: center;
    flex-direction: column;
  }

  .Close {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }

  .Close button {
    background-color: transparent;
    border: none;
    color: ${theme.colors.mainGreen};
    transition: color 0.5s;
  }

  .Close button:hover {
    color: #ff00009e;
  }

  hr {
    width: 100%;
    height: 5px;
    color: ${theme.colors.mainGreen};
  }

  .info {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .info button {
    color: ${theme.colors.mainGreen};
    border: 2px solid ${theme.colors.mainGreen};
    background: ${theme.colors.mainDark};
    font-size: 1em;
    padding: 0.25em 1em;
    border-radius: 10px;
    box-shadow: 5px 5px 0px ${theme.colors.mainGreen};
    width: 100%;

    &:hover {
      border: 2px solid whitesmoke;
      box-shadow: none;
      color: whitesmoke;
    }
  }
`;

export default StyledCart;
