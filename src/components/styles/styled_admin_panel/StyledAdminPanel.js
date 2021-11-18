import styled from "styled-components";
import theme from "../theme";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

const StyledAdminPanel = styled.div`

margin: 20px;


.container{
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-around;
    background-color: ${theme.colors.mainDark};
    border-radius: 20px;
    min-height: 50rem;
    max-height: 20rem;
    width: 80%;
    padding: 10px;
}


.selected{
    display: flex;
    background-color: ${theme.colors.serDark};
    min-height: 40rem;
    height: 100%;
    padding: 10px;
    border-radius: 20px;
}


.options{
    gap: 5px;
    padding: 10px;
    background-color:${theme.colors.mainDark};
    display: grid;
    grid-template-columns: repeat(4,1fr);
}

.options2{
    @extend .options;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: flex-start;
    background-color: ${theme.colors.mainDark};
    border-radius: 10px;
    padding: 10px;
    margin: 5px;
}

.options div{
    display: flex;
    align-items: center;
    justify-content: center;
    color: whitesmoke;
    background-color: black;
    user-select: none;
    border: 2px solid white;
    border-radius: 10px;
    height: 5rem;

    transition: 0.2s all ease-in-out;

    &:hover{
        background-color: whitesmoke;
        cursor: pointer;
        color: black;
    }
}



h4{
    color: black;
}


.display{
    width: 80%;
    padding: 10px;
    height: 40rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: whitesmoke;
    /* justify-content: space-evenly; */
    overflow: auto;
    border-radius: 20px;
}
`

export default StyledAdminPanel;