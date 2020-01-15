import React from "react";
import styled from "styled-components";
import { width, margin } from "styled-system";

export const PageContainer = ({ children }) => {
  return (
    <Wrapper>
      <Container width={[0.9, 2 / 3, 1 / 2]} mt={[50, 70]}>
        {children}
      </Container>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Container = styled.div`
  ${width};
  ${margin};
`;
