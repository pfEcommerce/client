import styled from "styled-components";
import theme from "../theme";

export const StyledProductCard = styled.div`

    display: grid;
    grid-template-rows: 1fr 1fr;
    background-color: #1b1a1f;
    width: 17rem;
    height: 25rem;
    color: whitesmoke;
    border: 2px solid #54ECC4;
    border-radius: 20px;
    box-shadow: 5px 5px 0px ${theme.colors.mainGreen};
    margin: 20px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 10px;
    gap: 10px;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    justify-items: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: 0.3s all ease-in-out;
    transition: 0.3s all ease-in-out;

.black-background{
    background: black !important;
    color: whitesmoke !important;
 }

.price{
    border: 3px dashed ${theme.colors.mainGreen};
    border-radius: 5px;
    background-color: transparent;
    padding: 5px 15px;
}

.img-bg{
    height: 11em;
}

.img-bg img{
    height: 100%;
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