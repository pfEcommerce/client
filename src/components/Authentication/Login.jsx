import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import StyledButton from "../styles/styled_button/styledButton";
import {FiLogIn as LoginIcon} from "react-icons/fi"

const Login = () => {

  const { loginWithRedirect } = useAuth0();
  return <StyledButton onClick={() => loginWithRedirect({redirect_uri:'http://localhost:3000'})}><LoginIcon/> Log In</StyledButton>;

};

export default Login;