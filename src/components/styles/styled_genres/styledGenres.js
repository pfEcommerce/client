import styled from "styled-components";
import theme from "../theme"

const StyledGenres = styled.div `
    display: flex;
    flex-direction: row-reverse;
    color: ${theme.colors.mainGreen};
    justify-content: center;

    & .genres {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        position: relative;
        top: 6em;
        height: 53em; 
        margin-left: 1em;

        /* & p {
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
        } */
    }

    .genOp{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #00000070;
        margin: 0.125em;
        padding: 0.5em;
        cursor: pointer;
        user-select: none;
        border-radius: 0.5em;
    }


    @media only screen and (max-width: 800px){
    flex-direction: column;
    .genOp{
        padding: 0.125em;
        height: min-content;
        &p{
            margin: 0;
            padding: 0;
        }
    }

    .genres{
    display: flex;
    margin-left: 0;
    flex-direction: row;
    flex-wrap: wrap;
    height: min-content;
    justify-content: center;
    position: inherit;
}
    }
    
`

export default StyledGenres