import React from "react";
import { theme } from "../styles/theme";
import { GlobalStyle } from "../styles/globalStyles";
import { ThemeProvider } from "styled-components";

export const Provider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
