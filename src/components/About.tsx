'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';
import styled from 'styled-components';

import { colors } from '@/styles/colors';

import Container from './Container';
import { DesktopContainer, MobileContainer } from './Responsive';
import Typography from './Typography';

const MainContainer = styled.div`
  padding: 60px 15px 60px 0;
  display: grid;
  gap: 20px;
  grid-template-columns: minmax(570px, 651px) 1fr;
  @media screen and (max-width: 1080px) {
    padding: 40px 0;
    grid-template-columns: 1fr;
  }
`;

const Bio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (max-width: 1080px) {
    gap: 20px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: right;
`;

const MobileImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(310.8 / 336 * (100vw - 40px));
`;

const About = () => {
  const t = useTranslations('About');
  return (
    <Container>
      <MainContainer>
        <Bio>
          <DesktopContainer>
            <Typography variant='display-md' weight='bold' color={colors.text.black}>
              {t('title')}
            </Typography>
          </DesktopContainer>
          <MobileContainer>
            <Typography variant='display-xs' weight='bold' color={colors.text.black}>
              {t('title')}
            </Typography>
          </MobileContainer>
          <Typography variant='text-md' weight='regular' color={colors.text.black}>
            {t('description')}
          </Typography>
        </Bio>

        <DesktopContainer>
          <ImageContainer>
            <Image
              src='/images/about/aboutLogo.png'
              alt='About Logo'
              width={440}
              height={407}
              style={{ objectFit: 'contain' }}
            />
          </ImageContainer>
        </DesktopContainer>
        <MobileContainer>
          <MobileImageWrapper>
            <Image
              src='/images/about/aboutLogo.png'
              alt='About Logo'
              fill
              style={{ objectFit: 'contain' }}
            />
          </MobileImageWrapper>
        </MobileContainer>
      </MainContainer>
    </Container>
  );
};

export default About;
