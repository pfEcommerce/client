import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import StyledButton from "../styles/styled_button/styledButton";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return <StyledButton onClick={() => loginWithRedirect({redirect_uri:'http://localhost:3000'})}>Log In</StyledButton>;

};

export default Login;