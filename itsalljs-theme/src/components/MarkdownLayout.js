import React from "react";
import { Header } from "./Header";
import { PageContainer } from "./PageContainer";
import { Logo } from "./Logo";

const MarkdownLayout = ({ children }) => {
  return (
    <>
      <Header>
        <Logo fontSize={[21, 32]} />
      </Header>
      <PageContainer>{children}</PageContainer>
    </>
  );
};

export default MarkdownLayout;
