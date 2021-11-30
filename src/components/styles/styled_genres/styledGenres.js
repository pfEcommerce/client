import styled from "styled-components";
import theme from "../theme"

const StyledGenres = styled.div `
    display: flex;
    flex-direction: row-reverse;
    color: ${theme.colors.mainGreen};

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
  color: whitesmoke;
  background: rgb(0,215,210);
  background: linear-gradient(90deg, rgba(0, 215, 211, 0.671), rgba(64, 170, 246, 0.801),rgba(255, 0, 115, 0.795));
  /* padding: 0.5em;
  padding-left: 2em;
  padding-right: 2em; */
  margin: 1em;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;
  border: 1px solid white;
        &:hover{
            box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
            border: 0px;
        }
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