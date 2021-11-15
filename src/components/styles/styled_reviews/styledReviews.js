import styled from "styled-components";
import theme from "../theme";

const StyledReviews = styled.div`
  width: 100%;
  height: 39em;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 3em;
  flex-direction: row;
  justify-content: space-between;
  .information {
    width: 36em;
    height: 25em;
    background-color: #1b1a1f8c;
    color: #54ecc4;
    overflow: auto;
    padding: 1em;
  }

  .information .user {
    background-color: #1b1a1f;
    width: auto;
    height: 4em;
    margin-bottom: 1em;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #6a6a6b;
  }

  .information .user p {
    margin: 0;
  }

  .text_1 {
    background-color: #1b1a1f;
    width: auto;
    height: 78%;
    display: flex;
    padding: 1em;
    color: #6a6a6b;
    justify-content: center;
    align-items: center;

  }

  .information .text {
    background-color: #1b1a1f;
    width: auto;
    height: 78%;
    display: flex;
  }

  .information .text textarea {
    background-color: #1b1a1f;
    width: 100%;
    height: 80%;
    border: none;
    resize: none;
    outline: none;
    padding: 1em;
    color: ${theme.colors.mainGreen};
  }

  .information .text button {
    color: #54ecc4;
    border: 2px solid #54ecc4;
    background: #1b1a1f;
    font-size: 1em;
    /* margin: 1em; */
    padding: 0.25em 1em;
    border-radius: 10px;
    box-shadow: 5px 5px 0px #54ecc4;
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;

    &:hover {
      border: 2px solid whitesmoke;
      box-shadow: none;
      color: whitesmoke;
    }

    &:focus {
      outline: none;
    }
  }

  .content {
    width: 36em;
    height: 27em;
    background-color: transparent;
  }

  .title {
    color: #c8830bbd;
  }
`;
export default StyledReviews;
