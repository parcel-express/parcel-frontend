import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const StyledContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 60px;
  @media (max-width: 1080px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const Container: React.FC<Props> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
