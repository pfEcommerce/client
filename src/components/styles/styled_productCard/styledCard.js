import styled from "styled-components";
import theme from "../theme";

export const StyledProductCard = styled.div`

display: flex;
flex-direction: column;
background-color: ${theme.colors.mainDark};
width: 15rem;
height: 20rem;
color: whitesmoke;
border-radius: 20px;
box-shadow: 5px 5px 0px ${theme.colors.mainGreen};
margin: 20px;
justify-content: space-between;
padding: 10px;

transition: 0.3s all ease-in-out;

&:hover{
    box-shadow: none;
    outline: 2px solid whitesmoke;
}

div{
    display: flex;
    flex-direction:column;
    
}

img{
    max-width: 100%;
    max-height: max-content;
    border-radius: 15px;
}
`;