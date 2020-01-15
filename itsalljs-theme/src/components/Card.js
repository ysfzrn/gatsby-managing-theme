import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { width, margin, height } from "styled-system";

export const Card = ({ title = "Title", route = "/" }) => {
  return (
    <Container height={[180, 230, 230]} width={[1, 0.48]} mb={3}>
      <StyledLink w={1} h={1} to={route}>
        {title}
      </StyledLink>
    </Container>
  );
};

export const Container = styled.div`
  background-color: ${p => p.theme.colors.primary};
  box-shadow: 0px 0px 10px ${p => p.theme.colors.secondary};
  border-radius: 12px;
  cursor: pointer;
  ${width};
  ${margin};
  ${height};
`;

const StyledLink = styled(props => <Link {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  width: 100%;
  height: 100%;
`;
