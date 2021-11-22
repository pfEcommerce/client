import styled from "styled-components";
import theme from "../theme";

const StyledDetails = styled.div`
      width: 100%;
    height: 58em;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: flex-start;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 3em;

  .title {
    color: ${theme.colors.mainGreen};
    margin-bottom: 5em;
  }

  .content_img_details {
    width: 100%;
    height: 40em;
    background-color: ${theme.colors.mainDark};
    display: flex;
  }

  .content_img {
    width: 55em;
    height: 95%;
    background-color: ${theme.colors.serDark};
    margin: 1em;
    border-radius: 5px;
  }

  .content_img img {
    width: 100%;
    height: 100%;
    border-radius: 2em;
  }

  .content_details {
    width: 100%;
    height: 95%;
    background-color: transparent;
    padding: 1em;
    color: ${theme.colors.mainGreen};
    margin: 1em;
    & label {
      margin-right: 1em;
      margin-bottom: 1em;
      background-color: #af8221b0;
      padding: 5px;
      color: ${theme.colors.serDark};
    }

    & h3 {
      margin: 1em 0;
    }

    & .wish {
      display: flex;
      flex-direction: row;
      

      & svg {
        height: 2em;
        width: 2em;
        color: white;
      }

      & h2 {
        display: inline;
        margin: 0 1em 0 0;
      }
    }
  }

  .buttons {
    display: flex;
    flex-direction: column;
    width: 10em;
  }
  .content_description {
    width: 100%;
    height: 30%;
    background-color: transparent;
    overflow: auto;

    
  }

  .content_description::-webkit-scrollbar {
    width: 8px; /* Tamaño del scroll en vertical */
    height: 8px; /* Tamaño del scroll en horizontal */
    display: fixed; /* Ocultar scroll */
  }

  .content_description::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }

  /* Cambiamos el fondo y agregamos una sombra cuando esté en hover */
  .content_description::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }
`;

export default StyledDetails;
