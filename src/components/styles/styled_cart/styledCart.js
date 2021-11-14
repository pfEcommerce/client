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
    border-radius: 10px;
  }

  .CloseCart {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }

  hr {
    width: 100%;
    height: 5px;
    color: ${theme.colors.mainGreen};
    border-radius: 20%;
  }

  .info {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .total{
    display: flex;
    justify-content: space-evenly;
    color: whitesmoke;
  }
`;

export default StyledCart;
