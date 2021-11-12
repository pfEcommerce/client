import styled from "styled-components";
import theme from "../theme";
import { AiFillHome } from 'react-icons/ai'


export const homeIcon = styled(AiFillHome)`
  color: ${theme.colors.mainGreen};
  border: 2px solid ${theme.colors.mainGreen};
  margin: 1em;
  padding: 1em;

  transition: all 0.2s ease-in;

  &:hover{
    text-shadow: 0 10px 10px white;
    outline: none;
  }
`;
