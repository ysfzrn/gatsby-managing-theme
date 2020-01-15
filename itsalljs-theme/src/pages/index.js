import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { margin } from "styled-system";
import { PageContainer } from "../components/PageContainer";
import { Logo } from "../components/Logo";
import { Card } from "../components/Card";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query DocumentQuery {
      allMdx {
        nodes {
          frontmatter {
            title
            route
            excerpt
          }
        }
      }
    }
  `);
  const { allMdx: { nodes = [] } = {} } = data;
  return (
    <PageContainer>
      <Logo fontSize={[32, 64]} />
      <CardContainer>
        {nodes.map(({ frontmatter } = {}) => {
          const { title, route } = frontmatter;
          return <Card key={title} title={title} route={route} />;
        })}
      </CardContainer>
    </PageContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  ${margin};
`;

export default IndexPage;
