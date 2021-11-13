import styled from "styled-components";
import theme from "../theme.js";

const styledDropdown = styled.div`
  position: absolute;
  top: 8em;
  z-index: 2;
  width: 10em;
  height: auto;
  background-color: #fff;
  border-radius: 20px;
  background-color: ${theme.colors.mainDark};
  border: ${theme.colors.mainGreen} solid 1px;
  margin: 0 !important;

  div {
    display: flex;
    width: 100%;
    height: 100%;
    margin: 0 !important;
  }

  div p{
    margin: 1em 0;
    color: ${theme.colors.mainGreen}
  }
`;

export default styledDropdown;
