import styled from 'styled-components'
import theme from '../theme.js'

const StyledSearchbar = styled.input`
  color: ${theme.colors.mainGreen};
  border: 2px solid ${theme.colors.mainGreen};
  background: whitesmoke;
  font-size: 1em;
  font-family: ${theme.fonts.signika};
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 10px;
  box-shadow: 5px 5px 0px ${theme.colors.mainGreen};
`;

export default StyledSearchbar;