import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect({redirect_uri:'http://localhost:3000'})}>Log In</button>;
};

export default Login;