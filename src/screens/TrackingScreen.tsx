'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';
import styled from 'styled-components';

import { Typography } from '@/components';
import Container from '@/components/Container';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import { DesktopContainer, MobileContainer } from '@/components/Responsive';
import SearchInput from '@/components/SearchInput';
import BuildingIcon from '@/icons/BuildingIcon';
import ClockIcon from '@/icons/ClockIcon';
import PackageIcon from '@/icons/PackageIcon';
import { colors } from '@/styles/colors';

const Hero = styled.div`
  position: relative;
  padding: 48px 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 100vw;
    height: 1px;
    transform: translateX(-50%);
    background: ${colors.border.primary};
  }
  @media screen and (max-width: 1080px) {
    gap: 16px;
    padding: 36px 0 28px 0;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 100vw;
  height: 100%;
  transform: translateX(-50%);
  pointer-events: none;
  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

const InputWrapper = styled.div`
  max-width: 432px;
  margin-top: 16px;
  @media screen and (max-width: 1080px) {
    margin: 0 0 20px 0;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 1080px) {
    gap: 16px;
  }
`;

const Card = styled.div`
  position: relative;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 432px;
  border-radius: 14px;
  background: transparent;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(
      93.55deg,
      ${colors.brand.primary} 21.82%,
      ${colors.brand.secondary} 110.55%
    );
    opacity: 0.1;
  }
  @media screen and (max-width: 1080px) {
    gap: 12px;
    padding: 20px;
  }
`;

const UserInfo = styled.div`
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 432px;
  @media screen and (max-width: 1080px) {
    padding: 24px 0;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LastSection = styled.div`
  position: relative;
  padding: 36px 0 84px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    width: 100vw;
    height: 1px;
    transform: translateX(-50%);
    background: ${colors.border.primary};
  }

  @media screen and (max-width: 1080px) {
    padding: 28px 0 72px 0;
  }
`;

const Titles = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1080px) {
    flex-direction: column;
  }
`;

const Steps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-top: 32px;
  @media screen and (max-width: 1080px) {
    margin-top: 12px;
  }
`;

const IconWrapper = styled.div`
  position: relative;
  border-radius: 10px;
  padding: 12px;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(93.55deg, #662d91 21.82%, #302e9c 110.55%);
    opacity: 0.1;
    z-index: -1;
  }
  svg {
    position: relative;
    z-index: 1;
  }
`;

const StepBox = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  position: relative;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 51px;
    left: 23px;
    width: 2px;
    height: calc(100% + 28px - 50px);
    background-color: ${colors.border.primary};
    opacity: 0.3;
    z-index: -1;
  }
`;

const StepDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const MobileTitles = styled.div`
  display: none;
  @media screen and (max-width: 1080px) {
    display: block;
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    gap: 36px;
  }
`;

const TrackingScreen = () => {
  const tTracking = useTranslations('Tracking');
  return (
    <>
      <Header />
      <Container>
        <Hero>
          <ImageWrapper>
            <Image
              src='/images/tracking/background.png'
              alt='Hero Background Image'
              fill
              priority
              sizes='100vw'
              style={{ objectFit: 'cover' }}
            />
          </ImageWrapper>
          <PageTitle title={tTracking('title')} />
          <InputWrapper>
            <DesktopContainer>
              <SearchInput placeholder={tTracking('placeholder')} />
            </DesktopContainer>
            <MobileContainer>
              <SearchInput
                placeholder={tTracking('placeholder')}
                size='xs'
                mode='button'
                leftIcon={false}
              />
            </MobileContainer>
          </InputWrapper>
          <Cards>
            <Card>
              <DesktopContainer>
                <Typography color={colors.text.black} variant='text-md' weight='medium'>
                  {tTracking('card1')}
                </Typography>
              </DesktopContainer>
              <MobileContainer>
                <Typography color={colors.text.black} variant='text-sm' weight='medium'>
                  {tTracking('card1')}
                </Typography>
              </MobileContainer>
              <DesktopContainer>
                <Typography color={colors.text.black} variant='title-md' weight='bold'>
                  1044467677
                </Typography>
              </DesktopContainer>
              <MobileContainer>
                <Typography color={colors.text.black} variant='text-xl' weight='bold'>
                  1044467677
                </Typography>
              </MobileContainer>
            </Card>
            <Card>
              <DesktopContainer>
                <Typography color={colors.text.black} variant='text-md' weight='medium'>
                  {tTracking('card2')}
                </Typography>
              </DesktopContainer>
              <MobileContainer>
                <Typography color={colors.text.black} variant='text-sm' weight='medium'>
                  {tTracking('card2')}
                </Typography>
              </MobileContainer>
              <DesktopContainer>
                <Typography color={colors.text.black} variant='title-md' weight='bold'>
                  02.07.2025
                </Typography>
              </DesktopContainer>
              <MobileContainer>
                <Typography color={colors.text.black} variant='text-xl' weight='bold'>
                  02.07.2025
                </Typography>
              </MobileContainer>
            </Card>
          </Cards>
        </Hero>
        <UserInfo>
          <Details>
            <DesktopContainer>
              <Typography color={colors.text.black} variant='text-sm' weight='medium'>
                {tTracking('sender')}
              </Typography>
            </DesktopContainer>
            <MobileContainer>
              <Typography color={colors.text.black} variant='text-xs' weight='medium'>
                {tTracking('sender')}
              </Typography>
            </MobileContainer>
            <DesktopContainer>
              <Typography color={colors.text.black} variant='text-sm' weight='bold'>
                {tTracking('senderName')}
              </Typography>
            </DesktopContainer>
            <MobileContainer>
              <Typography color={colors.text.black} variant='text-xs' weight='bold'>
                {tTracking('senderName')}
              </Typography>
            </MobileContainer>
          </Details>
          <Details>
            <DesktopContainer>
              <Typography color={colors.text.black} variant='text-sm' weight='medium'>
                {tTracking('receiverCity')}
              </Typography>
            </DesktopContainer>
            <MobileContainer>
              <Typography color={colors.text.black} variant='text-xs' weight='medium'>
                {tTracking('receiverCity')}
              </Typography>
            </MobileContainer>
            <DesktopContainer>
              <Typography color={colors.text.black} variant='text-sm' weight='bold'>
                {tTracking('receiverCityName')}
              </Typography>
            </DesktopContainer>
            <MobileContainer>
              <Typography color={colors.text.black} variant='text-xs' weight='bold'>
                {tTracking('receiverCityName')}
              </Typography>
            </MobileContainer>
          </Details>
          <Details>
            <DesktopContainer>
              <Typography color={colors.text.black} variant='text-sm' weight='medium'>
                {tTracking('receiverAddress')}
              </Typography>
            </DesktopContainer>
            <MobileContainer>
              <Typography color={colors.text.black} variant='text-xs' weight='medium'>
                {tTracking('receiverAddress')}
              </Typography>
            </MobileContainer>
            <DesktopContainer>
              <Typography color={colors.text.black} variant='text-sm' weight='bold'>
                {tTracking('receiverAddressName')}
              </Typography>
            </DesktopContainer>
            <MobileContainer>
              <Typography color={colors.text.black} variant='text-xs' weight='bold'>
                {tTracking('receiverAddressName')}
              </Typography>
            </MobileContainer>
          </Details>
        </UserInfo>
        <LastSection>
          <Titles>
            <DesktopContainer>
              <Typography color={colors.text.black} variant='text-lg' weight='bold'>
                {tTracking('LastSection.title')}
              </Typography>
            </DesktopContainer>
            <MobileContainer>
              <Typography color={colors.text.black} variant='text-lg' weight='bold'>
                {tTracking('LastSection.title')}
              </Typography>
            </MobileContainer>
            <DesktopContainer>
              <Typography color={colors.text.black} variant='text-lg' weight='bold'>
                {tTracking('LastSection.title2')}
              </Typography>
            </DesktopContainer>
            <DesktopContainer>
              <Typography color={colors.text.black} variant='text-lg' weight='bold'>
                {tTracking('LastSection.title3')}
              </Typography>
            </DesktopContainer>
          </Titles>
          <Steps>
            <StepBox>
              <IconWrapper>
                <PackageIcon />
              </IconWrapper>
              <StepDetails>
                <DesktopContainer>
                  <Typography color={colors.text.black} variant='text-lg' weight='medium'>
                    {tTracking('Steps.step1')}
                  </Typography>
                  <Typography color={colors.text.black} variant='text-sm' weight='medium'>
                    02.07.2025 - 13:23
                  </Typography>
                </DesktopContainer>
                <MobileContainer>
                  <Typography color={colors.text.black} variant='text-sm' weight='medium'>
                    {tTracking('Steps.step1')}
                  </Typography>
                  <Typography color={colors.text.black} variant='text-xs' weight='medium'>
                    02.07.2025 - 13:23
                  </Typography>
                </MobileContainer>
              </StepDetails>
            </StepBox>
            <StepBox>
              <IconWrapper>
                <ClockIcon />
              </IconWrapper>
              <StepDetails>
                <DesktopContainer>
                  <Typography color={colors.text.black} variant='text-lg' weight='medium'>
                    {tTracking('Steps.step2')}
                  </Typography>
                  <Typography color={colors.text.black} variant='text-sm' weight='medium'>
                    02.07.2025 - 13:23
                  </Typography>
                </DesktopContainer>
                <MobileContainer>
                  <Typography color={colors.text.black} variant='text-sm' weight='medium'>
                    {tTracking('Steps.step2')}
                  </Typography>
                  <Typography color={colors.text.black} variant='text-xs' weight='medium'>
                    02.07.2025 - 13:23
                  </Typography>
                </MobileContainer>
              </StepDetails>
            </StepBox>
            <StepBox>
              <IconWrapper>
                <BuildingIcon />
              </IconWrapper>
              <StepDetails>
                <DesktopContainer>
                  <Typography color={colors.text.black} variant='text-lg' weight='bold'>
                    {tTracking('Steps.step3')}
                  </Typography>
                  <Typography color={colors.text.black} variant='text-sm' weight='medium'>
                    02.07.2025 - 13:23
                  </Typography>
                </DesktopContainer>
                <MobileContainer>
                  <Typography color={colors.text.black} variant='text-sm' weight='bold'>
                    {tTracking('Steps.step3')}
                  </Typography>
                  <Typography color={colors.text.black} variant='text-xs' weight='medium'>
                    02.07.2025 - 13:23
                  </Typography>
                </MobileContainer>
              </StepDetails>
            </StepBox>
            <StepBox>
              <IconWrapper>
                <PackageIcon />
              </IconWrapper>
              <StepDetails>
                <DesktopContainer>
                  <Typography color={colors.text.black} variant='text-lg' weight='medium'>
                    {tTracking('Steps.step4')}
                  </Typography>
                  <Typography color={colors.text.black} variant='text-sm' weight='medium'>
                    02.07.2025 - 13:23
                  </Typography>
                </DesktopContainer>
                <MobileContainer>
                  <Typography color={colors.text.black} variant='text-sm' weight='medium'>
                    {tTracking('Steps.step4')}
                  </Typography>
                  <Typography color={colors.text.black} variant='text-xs' weight='medium'>
                    02.07.2025 - 13:23
                  </Typography>
                </MobileContainer>
              </StepDetails>
            </StepBox>
            <StepBox>
              <IconWrapper>
                <PackageIcon />
              </IconWrapper>
              <StepDetails>
                <DesktopContainer>
                  <Typography color={colors.text.black} variant='text-lg' weight='medium'>
                    {tTracking('Steps.step5')}
                  </Typography>
                  <Typography color={colors.text.black} variant='text-sm' weight='medium'>
                    02.07.2025 - 13:23
                  </Typography>
                </DesktopContainer>
                <MobileContainer>
                  <Typography color={colors.text.black} variant='text-sm' weight='medium'>
                    {tTracking('Steps.step5')}
                  </Typography>
                  <Typography color={colors.text.black} variant='text-xs' weight='medium'>
                    02.07.2025 - 13:23
                  </Typography>
                </MobileContainer>
              </StepDetails>
            </StepBox>
            <StepBox>
              <IconWrapper>
                <PackageIcon />
              </IconWrapper>
              <StepDetails>
                <DesktopContainer>
                  <Typography color={colors.text.black} variant='text-lg' weight='medium'>
                    {tTracking('Steps.step6')}
                  </Typography>
                  <Typography color={colors.text.black} variant='text-sm' weight='medium'>
                    02.07.2025 - 13:23
                  </Typography>
                </DesktopContainer>
                <MobileContainer>
                  <Typography color={colors.text.black} variant='text-sm' weight='medium'>
                    {tTracking('Steps.step6')}
                  </Typography>
                  <Typography color={colors.text.black} variant='text-xs' weight='medium'>
                    02.07.2025 - 13:23
                  </Typography>
                </MobileContainer>
              </StepDetails>
            </StepBox>
          </Steps>

          <MobileContainer>
            <MobileTitles>
              <Typography color={colors.text.black} variant='text-lg' weight='bold'>
                {tTracking('LastSection.title2')}
              </Typography>
              <Typography color={colors.text.black} variant='text-lg' weight='bold'>
                {tTracking('LastSection.title3')}
              </Typography>
            </MobileTitles>
          </MobileContainer>
        </LastSection>
      </Container>
      <Footer />
    </>
  );
};

export default TrackingScreen;
