import React from 'react';
import styled from 'styled-components';

import { DesktopContainer, MobileContainer } from './Responsive';
import Typography from './Typography';

const TitleContainer = styled.div``;

interface PageTitleProps {
  title: string;
  desktopVariant?: 'large' | 'small';
}

const PageTitle: React.FC<PageTitleProps> = ({ title, desktopVariant = 'large' }) => {
  const desktopTypographyVariant = desktopVariant === 'small' ? 'title-md' : 'display-lg';
  return (
    <TitleContainer>
      <DesktopContainer>
        <Typography variant={desktopTypographyVariant} weight='bold'>
          {title}
        </Typography>
      </DesktopContainer>
      <MobileContainer>
        <Typography variant='text-lg' weight='bold'>
          {title}
        </Typography>
      </MobileContainer>
    </TitleContainer>
  );
};

export default PageTitle;
