import React from 'react';
import styled from 'styled-components';

import Container from './Container';

const StyledHeader = styled.header`
  background: #f5f5f5;
  padding: 1rem 0;
`;

const Header = () => {
  return (
    <Container>
      <StyledHeader></StyledHeader>
    </Container>
  );
};

export default Header;
