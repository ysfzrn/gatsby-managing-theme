import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { typography } from "styled-system";

export const Logo = props => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { site: { siteMetadata: { title } = {} } = {} } = data;
  return <StyledH1 {...props}>{title}</StyledH1>;
};
const StyledH1 = styled.h1`
  letter-spacing: 0.03em;
  color: ${p => p.theme.colors.logo};
  text-align: center;
  ${typography}
`;
