import React from 'react';
import styled from 'styled-components';

type ResponsiveProps = {
  children: React.ReactNode;
};

const StyledDesktopContainer = styled.div`
  @media (max-width: 1080px) {
    display: none;
  }
`;

const StyledMobileContainer = styled.div`
  display: none;
  @media (max-width: 1080px) {
    display: block;
  }
`;

export function DesktopContainer({ children }: ResponsiveProps) {
  return <StyledDesktopContainer>{children}</StyledDesktopContainer>;
}

export function MobileContainer({ children }: ResponsiveProps) {
  return <StyledMobileContainer>{children}</StyledMobileContainer>;
}
