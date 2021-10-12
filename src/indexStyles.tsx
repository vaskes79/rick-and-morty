import { createGlobalStyle, css } from "styled-components/macro";

const globalCss = css`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap");

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${globalCss}
`;
