'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';
import styled from 'styled-components';

import CheckmarkIcon from '@/icons/CheckmarkIcon';
import CheckmarkMobileIcon from '@/icons/CheckmarkMobileIcon';
import { colors } from '@/styles/colors';

import Container from './Container';
import { DesktopContainer, MobileContainer } from './Responsive';
import SearchInput from './SearchInput';
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
  background: linear-gradient(98.54deg, #662d91 27.21%, #302e9c 100.85%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CheckmarkWrapper = styled.div`
  position: relative;
  top: -7px;
  @media (max-width: 1080px) {
    top: 0;
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
  left: -111px;
  top: 50px;
  z-index: 1;
`;

const CubeIconStyled = styled.div`
  position: absolute;
  left: -168px;
  bottom: 44px;
  z-index: 1;
`;

const StyledImage = styled(Image)`
  position: relative;
  z-index: 2;
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
                    <Typography variant='display-lg' weight='bold'>
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
                    <Typography variant='text-xl' weight='bold'>
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
            <SearchInput size='md' />
          </DesktopContainer>
          <MobileContainer>
            <SearchInput size='xs' />
          </MobileContainer>
        </LeftContainer>
        <DesktopContainer>
          <ImageContainer>
            <CubeIconBigStyled>
              <Image
                src='/images/hero/cube.png'
                alt='Background Cube'
                width={315}
                height={295}
                style={{ objectFit: 'contain' }}
              />
            </CubeIconBigStyled>
            <CubeIconStyled>
              <Image
                src='/images/hero/cube.png'
                alt='Background Cube'
                width={175}
                height={163}
                style={{ objectFit: 'contain' }}
              />
            </CubeIconStyled>
            <StyledImage
              src='/images/hero/hero.png'
              alt='Hero Image'
              width={645}
              height={481}
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
              style={{ objectFit: 'contain' }}
            />
          </MobileImageWrapper>
        </MobileContainer>
      </MainContainer>
    </Container>
  );
};

export default Hero;
