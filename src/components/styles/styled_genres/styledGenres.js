import styled from "styled-components";
import theme from "../theme"

const StyledGenres = styled.div`
    display: flex;
    flex-direction: row-reverse;
    color: ${theme.colors.mainGreen};
    justify-content: center;

    & .genres {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        top: 6em;
        height: 53em; 
        margin-left: 1em;

        & p {
            margin: 0;
            cursor: pointer;

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


        & hr{
            background-color: ${theme.colors.mainGreen};
            color: ${theme.colors.mainGreen};
            margin: 0.5em 0;
        }
    }


`

export default StyledGenres

