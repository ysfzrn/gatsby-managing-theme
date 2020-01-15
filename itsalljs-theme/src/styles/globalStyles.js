import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  background-color: ${p => p.theme.colors.background};
}
body {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;
