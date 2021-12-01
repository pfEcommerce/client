import styled from "styled-components";
import theme from "../theme";

export const styledOrders = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.colors.mainDark};
    color: ${theme.colors.mainGreen};
    height: 100%;
    border-radius: 20px;
`