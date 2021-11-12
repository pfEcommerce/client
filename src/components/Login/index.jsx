import React from "react";
import StyledModal from "../styles/styled_modal/styleModal";
import StyledLogin from "../styles/styled_login/styledLogin";
import StyledInput from "../styles/styled_input/styledInput";
import StyledButton from "../styles/styled_button/styledButton";
import { BsGithub, BsGoogle } from "react-icons/bs";

export default function Login({ modalLogin, setModalLogin }) {

    const closeModal = (e) => {
        e.preventDefault();
        setModalLogin(false)
    }
  return (
    <>
      {modalLogin && modalLogin === true ? (
        <StyledModal>
          <StyledLogin>
            <div className="Close">
              <button onClick={closeModal}> x </button>
            </div>
            <h2>LOGIN</h2>
            <form action="">
              <div className="Input">
                <p htmlFor="">E-mail</p>
                <StyledInput type="email" />
              </div>
              <div className="Input">
                <p htmlFor="">Password</p>
                <StyledInput type="password" />
              </div>
              <label htmlFor="">
                {" "}
                <input type="checkbox" /> Keep Active
              </label>
              <div className="login">
                <p>Forgot my password</p>
                <p>You have an account?</p>
                <button> Log In </button>
                <div>
                  <button>
                    {" "}
                    Log in with <BsGoogle />{" "}
                  </button>
                  <button>
                    {" "}
                    Log in with <BsGithub />{" "}
                  </button>
                </div>
              </div>
            </form>
          </StyledLogin>
        </StyledModal>
      ) : (
        ""
      )}
    </>
  );
}
