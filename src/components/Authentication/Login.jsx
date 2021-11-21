import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import StyledButton from "../styles/styled_button/styledButton";
import {FiLogIn as LoginIcon} from "react-icons/fi"
import dotenv from 'dotenv';
dotenv.config();

/* const h = process.env.AUTH0_BASE_URL || "http://localhost:3001"; */

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return <StyledButton onClick={() => loginWithRedirect({redirect_uri: "http://localhost:3001"})}><LoginIcon/> Log In</StyledButton>;

};

export default Login;