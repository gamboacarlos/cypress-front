import React, { FC, ReactNode } from 'react';
import Container from './Container';
import Nav from './Nav';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Nav />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
