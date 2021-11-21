import styled from 'styled-components';


export const MainCards = styled.div`
 display: grid; 
 grid-template-rows: auto auto;
 grid-auto-flow: column;
 width: 100%; 
 justify-items: center;
 
 @media only screen and (max-width: 1200px){
    display: grid;
    grid-template-rows: repeat(3,1fr);
    justify-items: center;
    }
    @media only screen and (max-width: 992px){
        display: grid;
        grid-template-rows: repeat(3,1fr);
        justify-items: center;
        }
        @media only screen and (max-width: 768px) {
            display: grid;
            grid-template-rows: repeat(2,1fr);
            justify-items: center;
            }
            @media only screen and (max-width: 576px) {
                display:block;
                grid-template-rows: repeat(1,1fr);
                justify-items: center;
                padding-left:50px;
                }




            
`

