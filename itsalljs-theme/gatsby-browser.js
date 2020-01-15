import React from "react";
import { Provider } from "./src/providers";

// Wraps root in a component
export const wrapRootElement = ({ element, props }) => {
  return <Provider>{element}</Provider>;
};
