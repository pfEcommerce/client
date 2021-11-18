import styled from "styled-components";
import theme from "../theme";

const StyledAdminPanel = styled.div`

    


.container{
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-around;
    background-color: ${theme.colors.mainDark};
    border-radius: 20px;
    min-height: 50rem;
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
    background-color:blue;
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

.options2 div{
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    user-select: none;
    height: 2rem;
    &:hover{
        cursor: pointer;
    }
}

.options div{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    user-select: none;
    height: 5rem;
    &:hover{
        cursor: pointer;
    }
}



h4{
    color: white;
}


.display{
    width: 80%;
    padding: 10px;
}
`

export default StyledAdminPanel;