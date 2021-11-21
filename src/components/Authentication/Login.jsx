import React from "react";
import StyledButton from "../styles/styled_button/styledButton";
import {FiLogIn as LoginIcon} from "react-icons/fi"
import dotenv from 'dotenv';
dotenv.config();

const h = process.env.AUTH0_BASE_URL || "http://localhost:3001";

const Login = () => {

  return <StyledButton onClick={() => loginWithRedirect({redirect_uri:h})}><LoginIcon/> Log In</StyledButton>;

};

export default Login;