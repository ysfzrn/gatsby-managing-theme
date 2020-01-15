import styled from "styled-components";
import { typography, height } from "styled-system";
import { theme } from "../styles/theme";
export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => theme.colors.primary};
  ${height}
`;
