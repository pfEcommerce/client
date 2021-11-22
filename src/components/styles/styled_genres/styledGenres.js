import styled from "styled-components";
import theme from "../theme"

const StyledGenres = styled.div`
    display: flex;
    flex-direction: row-reverse;
    color: ${theme.colors.mainGreen};

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
        }

        & hr{
            background-color: ${theme.colors.mainGreen};
            color: ${theme.colors.mainGreen};
            margin: 0.5em 0;
        }
    }


`

export default StyledGenres

