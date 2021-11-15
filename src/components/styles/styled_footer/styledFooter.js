import styled from "styled-components";
import theme from "../theme";

const StyledFooter = styled.div`
position: relative;

  width: 100%;
  height: 10em;
  color: #ffffff82;
  border-top: 2px solid #4cd5b1;
  background-color: #1b1a1f;
  padding: 1em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  flex-direction: column;
  transition: color 1s;

  div {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    justify-content: center;
  }

  div label {
    margin: 0 3em;
    cursor: pointer;
  }

  div label:hover {
    margin: 0 3em;
    cursor: pointer;
    color: #eaf7f4;
  }

  p {
    margin: 0;
  }
  h2 {
    margin: 0;
    color: #eaf7f4;
  }
`;

export default StyledFooter;
