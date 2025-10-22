import React from 'react';
import styled from 'styled-components';

import { DesktopContainer, MobileContainer } from './Responsive';
import Typography from './Typography';

const TitleContainer = styled.div``;

interface PageTitleProps {
  title: string;
  desktopVariant?: 'large' | 'small';
  mobileVariant?: 'text-lg' | 'title-md' | 'display-lg';
}

const PageTitle: React.FC<PageTitleProps> = ({
  title,
  desktopVariant = 'large',
  mobileVariant = 'text-lg',
}) => {
  const desktopTypographyVariant = desktopVariant === 'small' ? 'display-xs' : 'display-lg';
  return (
    <TitleContainer>
      <DesktopContainer>
        <Typography variant={desktopTypographyVariant} weight='bold'>
          {title}
        </Typography>
      </DesktopContainer>
      <MobileContainer>
        <Typography variant={mobileVariant} weight='bold'>
          {title}
        </Typography>
      </MobileContainer>
    </TitleContainer>
  );
};

export default PageTitle;
