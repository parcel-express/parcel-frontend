import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 32px 32px 0 32px;
  @media (max-width: 1080px) {
    padding: 0 20px;
  }
`;

const DashboardContainer: React.FC<Props> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default DashboardContainer;
