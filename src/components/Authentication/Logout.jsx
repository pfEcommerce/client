import React from "react";
import StyledButton from "../styles/styled_button/styledButton";
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { logout } = useAuth0();

  return (
    <StyledButton onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </StyledButton>
  );
};

export default Logout;