import styled from "styled-components";

export const StyledBadge = styled.div `
position: absolute;
  display: inline-block;
  top: 0.3em;
  right: 0.8em;
  max-width: 5em;
  color: #fff;
  z-index: 1;


  &::after {
  position: absolute;
  top: -1.5em;
  right: -6em;
  content: "";
  height: 5em;
  width: 15em;
  transform: rotatez(45deg);
  background-color: #ff0081d1;
  z-index:-1;
  border-bottom: 2px dotted whitesmoke;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}
p{
    transform: rotatez(45deg) !important;
    margin: 14px -24px 0px 29px !important;
    margin-bottom:0;
}
`