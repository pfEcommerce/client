import styled from "styled-components";
import theme from "../theme";

const StyledSort = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin: 2em 0 1em 0;

  

  & p {
    color: ${theme.colors.mainGreen};
    text-shadow: 0px 1px 12px #54ecc400;
    margin: 0;
    transition: text-shadow 0.5s;
    &:hover {
      animation: myAnim 0.5s ease 0s infinite normal forwards;
      text-shadow: 0px 1px 12px #54ecc4;
      cursor: pointer;
    }
  }

  .active{
    text-shadow: 0px 1px 12px #54ecc4;
    color: antiquewhite;
  }
  @keyframes myAnim {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(1);
    }
  }
  
  @media only screen and (max-width: 1200px){
    display: grid;
    grid-template-rows: repeat(3,1fr);
    justify-items: center;
    }
    @media only screen and (max-width: 800px){
        display: grid;
        grid-template-rows: repeat(3,1fr);
        justify-items: center;
        }
        @media only screen and (max-width: 360px){
            display: grid;
            grid-template-rows: repeat(3,1fr);
            justify-items: center;
            }
`;

export default StyledSort;
