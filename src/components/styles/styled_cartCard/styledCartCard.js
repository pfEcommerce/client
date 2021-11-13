import styled from "styled-components";
import theme from "../theme";

const StyledCartCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.mainDark};
  width: 90%;
  height: 8em;
  margin: 1em 1em 0em 1em;
  padding: 1em;
  align-items: center;

  .details {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .details p {
      margin: 0;
  }

  .details div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .details div p {
    margin: 0 1em 0 0;
  }

  .details div button {
    width: 2em;
    background-color: transparent;
    border: none;
    color: ${theme.colors.mainGreen};
    transition: color 0.5s;
  }

  h3 {
    font-size: 1em;
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
`;
export default StyledCartCard;
