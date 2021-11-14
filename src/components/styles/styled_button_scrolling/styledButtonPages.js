import styled from "styled-components";



export const PagingButton = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    margin: 0 auto;
    background: transparent;
    border: none !important;
    box-shadow: 0 0 10px 5px;
    backdrop-filter: blur(5px);
    width: fit-content;

    

    .pages{
        display: flex;
        justify-content:center;
        align-items:center;
        width: 30px;
        height: 30px;
        border: gray;
        background-color: #E8562A;
        color: #fff;
        cursor: pointer;
        font-weight: bold;
    }

    .leftButton{
        

    }

    .rightButton{

    }
`





