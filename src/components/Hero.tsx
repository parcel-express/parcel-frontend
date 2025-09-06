'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';
import styled from 'styled-components';

import CheckmarkIcon from '@/icons/CheckmarkIcon';
import CheckmarkMobileIcon from '@/icons/CheckmarkMobileIcon';
import CubeIcon from '@/icons/CubeIcon';
import CubeIconBig from '@/icons/CubeIconBig';
import { colors } from '@/styles/colors';

import Button from './Button';
import Container from './Container';
import { DesktopContainer, MobileContainer } from './Responsive';
import Typography from './Typography';

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 730px;
  padding: 60px 0 96px 0;
  gap: 12px;
  height: 636px;
  position: relative;
  @media (max-width: 1080px) {
    padding: 36px 0 68px 0;
    height: auto;
    display: flex;
    gap: 35px;
    flex-direction: column;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 587px;
  @media (max-width: 1080px) {
    max-width: none;
    width: 100%;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 42px;
  @media (max-width: 1080px) {
    margin-bottom: 48px;
  }
`;

const DescriptionWrapper = styled.div`
  max-width: 515px;
  @media (max-width: 1080px) {
    max-width: none;
    width: 100%;
  }
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 580px;
  @media (max-width: 1080px) {
    display: flex;
    flex-direction: row;
    gap: 4px;
    max-width: none;
    width: 100%;
  }
  @media (max-width: 485px) {
    display: flex;
    flex-direction: column;
    max-width: 580px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 18px;
`;

const TitleSpanRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  @media (max-width: 1080px) {
  }
`;
const CheckmarkWrapper = styled.div`
  position: relative;
  top: -7px;
  @media (max-width: 1080px) {
    top: 0;
  }
`;

const Input = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 14px 10px;
  background-color: ${colors.background.white};
  border: 1px solid ${colors.border.primary};
  border-radius: 8px;
  @media (max-width: 1080px) {
    padding: 4px 4px 4px 12px;
  }
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  &::placeholder {
    opacity: 0.5;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 66px;
  right: -95px;
  width: 645px;
  height: 481px;
  @media (max-width: 1080px) {
    display: none;
  }
`;

const MobileImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(481 / 645 * (100vw - 30px));
  @media (min-width: 1081px) {
    display: none;
  }
`;

const CubeIconBigStyled = styled.div`
  position: absolute;
  left: -155px;
  top: 20px;
  z-index: 1;
`;

const CubeIconStyled = styled.div`
  position: absolute;
  left: -165px;
  bottom: 78px;
  z-index: 1;
`;

const StyledImage = styled(Image)`
  position: relative;
  z-index: 2;
`;

const GradientText = styled.span`
  background: linear-gradient(
    98.54deg,
    ${colors.brand.gradientStart} 27.21%,
    ${colors.brand.gradientEnd} 100.85%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

const Hero = () => {
  const tHero = useTranslations('Hero');
  return (
    <Container>
      <MainContainer>
        <LeftContainer>
          <Description>
            <DesktopContainer>
              <TitleWrapper>
                <Title>
                  <Typography variant='display-lg' weight='bold'>
                    {tHero('titleStart')}
                  </Typography>
                  <TitleSpanRow>
                    <Typography
                      as='span'
                      className={GradientText.styledComponentId}
                      variant='display-lg'
                      weight='bold'
                    >
                      {tHero('titleSpan')}
                    </Typography>
                    <CheckmarkWrapper>
                      <CheckmarkIcon />
                    </CheckmarkWrapper>
                  </TitleSpanRow>
                </Title>
              </TitleWrapper>
            </DesktopContainer>
            <MobileContainer>
              <TitleWrapper>
                <Title>
                  <Typography variant='text-xl' weight='bold'>
                    {tHero('titleStart')}
                  </Typography>
                  <TitleSpanRow>
                    <Typography
                      as='span'
                      className={GradientText.styledComponentId}
                      variant='text-xl'
                      weight='bold'
                    >
                      {tHero('titleSpan')}
                    </Typography>
                    <CheckmarkWrapper>
                      <CheckmarkMobileIcon />
                    </CheckmarkWrapper>
                  </TitleSpanRow>
                </Title>
              </TitleWrapper>
            </MobileContainer>
            <DescriptionWrapper>
              <DesktopContainer>
                <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                  {tHero('description')}
                </Typography>
              </DesktopContainer>
              <MobileContainer>
                <Typography variant='text-xs' weight='medium' color={colors.text.black}>
                  {tHero('description')}
                </Typography>
              </MobileContainer>
            </DescriptionWrapper>
          </Description>

          <DesktopContainer>
            <Input>
              <StyledInput placeholder={tHero('placeholder')} type='text' />
              <Button variant='primary' size='mdHero'>
                <Typography variant='text-sm' weight='bold' color={colors.text.white}>
                  {tHero('button')}
                </Typography>
              </Button>
            </Input>
          </DesktopContainer>
          <MobileContainer>
            <Input>
              <StyledInput placeholder={tHero('placeholder')} type='text' />
              <Button variant='primary' size='xs'>
                <Typography variant='text-xs' weight='bold' color={colors.text.white}>
                  {tHero('button')}
                </Typography>
              </Button>
            </Input>
          </MobileContainer>
        </LeftContainer>
        <DesktopContainer>
          <ImageContainer>
            <CubeIconBigStyled>
              <CubeIconBig />
            </CubeIconBigStyled>
            <CubeIconStyled>
              <CubeIcon />
            </CubeIconStyled>
            <StyledImage
              src='/images/hero/hero.png'
              alt='Hero Image'
              width={645}
              height={481}
              priority
              loading='eager'
              sizes='(max-width: 1080px) 0px, 645px'
              style={{ objectFit: 'contain' }}
            />
          </ImageContainer>
        </DesktopContainer>

        <MobileContainer>
          <MobileImageWrapper>
            <StyledImage
              src='/images/hero/hero.png'
              alt='Hero Image'
              fill
              priority
              loading='eager'
              sizes='(max-width: 768px) 400px, (max-width: 1080px) 500px, 0px'
              style={{ objectFit: 'contain' }}
            />
          </MobileImageWrapper>
        </MobileContainer>
      </MainContainer>
    </Container>
  );
};

export default Hero;
