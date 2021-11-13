import styled from "styled-components";
import theme from "../theme";

export const StyledProductCard = styled.div`

display: grid;
grid-template-rows: 1fr 1fr;
background-color: ${theme.colors.mainDark};
width: 17rem;
height: 25rem;
color: whitesmoke;
border: 2px solid ${theme.colors.mainGreen};
border-radius: 20px;
box-shadow: 5px 5px 0px ${theme.colors.secGreen};
margin: 20px;
justify-content: space-between;
padding: 10px;
gap: 10px;
align-items: center;
justify-items: center;

user-select: none;

transition: 0.3s all ease-in-out;

.price{
    border: 2px solid ${theme.colors.mainGreen};
    border-radius: 20px;
    background-color: ${theme.colors.serDark};
    padding: 5px 15px;
}

&:hover{
    box-shadow: none;
    outline: 2px solid whitesmoke;
}


div{
    display: flex;
    flex-direction:column;
    align-items: center;
}

img{
    max-width: 100%;
    max-height: max-content;
    border-radius: 15px;
}
`;