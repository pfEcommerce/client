import styled from 'styled-components'
import theme from '../theme.js'

const StyledNavbar = styled.nav`
  color: ${theme.colors.mainGreen};
  border-bottom: 2px solid ${theme.colors.mainGreen};
  background-color: ${theme.colors.mainDark};
  padding: 1.25em 4em;
  display: flex;
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

`;


export default StyledNavbar;