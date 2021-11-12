import styled from 'styled-components'
import theme from '../theme.js'

const StyledButton = styled.button`
  color: ${theme.colors.mainGreen};
  border: 2px solid ${theme.colors.mainGreen};
  background: ${theme.colors.mainDark};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 10px;
`;

export default StyledButton;