import styled from 'styled-components'
import theme from '../theme.js'

const StyledNavbar = styled.nav`
<<<<<<< HEAD
  color: ${theme.colors.mainGreen};
  border-bottom: 3px solid ${theme.colors.mainGreen};
  background-color: ${theme.colors.mainDark};
  padding: 2em 4em;
  display: flex;
=======


color: ${theme.colors.mainGreen};
border-bottom: 3px solid ${theme.colors.mainGreen};
background-color: ${theme.colors.mainDark};
padding: 2em 4em;
display: flex;
>>>>>>> Navbar
-webkit-box-pack: justify;
-webkit-justify-content: space-between;
-ms-flex-pack: justify;
-webkit-box-pack: justify;
-webkit-justify-content: space-between;
-ms-flex-pack: justify;
justify-content: space-around;
-webkit-align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-align-content: center;
-ms-flex-line-pack: center;
align-content: center;

.logo{
    width: 300px;

    &:hover{
        fill: red;
    }
}

.icon{
    padding: 20px 20px;
    margin-bottom: 0px;
    width: 4rem;
    height: 4rem;
    padding: 5px;
    color: whitesmoke;
    transition: 0.3s all ease-in-out;
    filter: drop-shadow(3px 3px 0px ${theme.colors.mainGreen});
}

.searchbar{
    display: flex;
    width: 20rem;
}

.icons div{
    margin-left: 20px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    align-items: center;
    transition: 0.2s all ease-in-out;
    cursor: pointer;

    &:hover{
        color:white;
    }

    &:hover > .icon{
        color: white;
        filter: none;
    }
}

.icons{
    display: flex;
}



`;


export default StyledNavbar;