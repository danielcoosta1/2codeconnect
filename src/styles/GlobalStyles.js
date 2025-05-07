// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Reset básico */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Fonte padrão */
  body {
    font-family: "Inter", sans-serif;

  }

  a {
    text-decoration: none;

  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

`;

export default GlobalStyle;
