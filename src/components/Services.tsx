'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';
import styled from 'styled-components';

import { colors } from '../styles/colors';

import Container from './Container';
import { DesktopContainer, MobileContainer } from './Responsive';
import Typography from './Typography';

const MainContainer = styled.div`
  border-top: 1px solid ${colors.border.primary};
  border-bottom: 1px solid ${colors.border.primary};
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
  padding: 60px 0;
  @media screen and (max-width: 1080px) {
    gap: 24px;
    padding: 30px 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media screen and (max-width: 1080px) {
    gap: 14px;
    grid-template-columns: repeat(2, minmax(119px, 1fr));
  }
`;

const GridItem = styled.div`
  padding: 20px;
  background: ${colors.background.white};
  border: 1px solid ${colors.border.primary};
  border-radius: 12px;
  width: 100%;
  height: 265px;
  cursor: pointer;
  @media screen and (max-width: 1080px) {
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 220px;
  }
`;

const CardBio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;
  @media screen and (max-width: 1080px) {
    margin-top: 8px;
    gap: 4px;
  }
`;

const Services = () => {
  const t = useTranslations('Services');
  return (
    <MainContainer>
      <Container>
        <ServicesContainer>
          <DesktopContainer>
            <Typography variant='display-sm' color={colors.text.black} weight='bold'>
              {t('title')}
            </Typography>
          </DesktopContainer>
          <MobileContainer>
            <Typography variant='text-xl' color={colors.text.black} weight='bold'>
              {t('title')}
            </Typography>
          </MobileContainer>
          <Grid>
            <GridItem>
              <DesktopContainer>
                <Image
                  src='/images/services/card1.png'
                  alt='card1'
                  width={110}
                  height={110}
                  objectFit='contain'
                />
                <CardBio>
                  <Typography variant='text-sm' color={colors.text.secondary} weight='bold'>
                    {t('card1.title')}
                  </Typography>
                  <Typography variant='text-sm' color={colors.text.secondary}>
                    {t('card1.description')}
                  </Typography>
                </CardBio>
              </DesktopContainer>
              <MobileContainer>
                <Image
                  src='/images/services/card1.png'
                  alt='card1'
                  width={43}
                  height={43}
                  objectFit='contain'
                />
                <CardBio>
                  <Typography variant='text-xs' color={colors.text.secondary} weight='bold'>
                    {t('card1.title')}
                  </Typography>
                  <Typography variant='text-xs' color={colors.text.secondary}>
                    {t('card1.description')}
                  </Typography>
                </CardBio>
              </MobileContainer>
            </GridItem>
            <GridItem>
              <DesktopContainer>
                <Image
                  src='/images/services/card2.png'
                  alt='card2'
                  width={110}
                  height={110}
                  objectFit='contain'
                />
                <CardBio>
                  <Typography variant='text-sm' color={colors.text.secondary} weight='bold'>
                    {t('card2.title')}
                  </Typography>
                  <Typography variant='text-sm' color={colors.text.secondary}>
                    {t('card2.description')}
                  </Typography>
                </CardBio>
              </DesktopContainer>
              <MobileContainer>
                <Image
                  src='/images/services/card2.png'
                  alt='card2'
                  width={43}
                  height={43}
                  objectFit='contain'
                />
                <CardBio>
                  <Typography variant='text-xs' color={colors.text.secondary} weight='bold'>
                    {t('card2.title')}
                  </Typography>
                  <Typography variant='text-xs' color={colors.text.secondary}>
                    {t('card2.description')}
                  </Typography>
                </CardBio>
              </MobileContainer>
            </GridItem>
            <GridItem>
              <DesktopContainer>
                <Image
                  src='/images/services/card3.png'
                  alt='card3'
                  width={110}
                  height={110}
                  objectFit='contain'
                />
                <CardBio>
                  <Typography variant='text-sm' color={colors.text.secondary} weight='bold'>
                    {t('card3.title')}
                  </Typography>
                  <Typography variant='text-sm' color={colors.text.secondary}>
                    {t('card3.description')}
                  </Typography>
                </CardBio>
              </DesktopContainer>
              <MobileContainer>
                <Image
                  src='/images/services/card3.png'
                  alt='card3'
                  width={43}
                  height={43}
                  objectFit='contain'
                />
                <CardBio>
                  <Typography variant='text-xs' color={colors.text.secondary} weight='bold'>
                    {t('card3.title')}
                  </Typography>
                  <Typography variant='text-xs' color={colors.text.secondary}>
                    {t('card3.description')}
                  </Typography>
                </CardBio>
              </MobileContainer>
            </GridItem>
            <GridItem>
              <DesktopContainer>
                <Image
                  src='/images/services/card4.png'
                  alt='card4'
                  width={110}
                  height={110}
                  objectFit='contain'
                />
                <CardBio>
                  <Typography variant='text-sm' color={colors.text.secondary} weight='bold'>
                    {t('card4.title')}
                  </Typography>
                  <Typography variant='text-sm' color={colors.text.secondary}>
                    {t('card4.description')}
                  </Typography>
                </CardBio>
              </DesktopContainer>
              <MobileContainer>
                <Image
                  src='/images/services/card4.png'
                  alt='card4'
                  width={43}
                  height={43}
                  objectFit='contain'
                />
                <CardBio>
                  <Typography variant='text-xs' color={colors.text.secondary} weight='bold'>
                    {t('card4.title')}
                  </Typography>
                  <Typography variant='text-xs' color={colors.text.secondary}>
                    {t('card4.description')}
                  </Typography>
                </CardBio>
              </MobileContainer>
            </GridItem>
            <GridItem>
              <DesktopContainer>
                <Image
                  src='/images/services/card5.png'
                  alt='card5'
                  width={110}
                  height={110}
                  objectFit='contain'
                />
                <CardBio>
                  <Typography variant='text-sm' color={colors.text.secondary} weight='bold'>
                    {t('card5.title')}
                  </Typography>
                  <Typography variant='text-sm' color={colors.text.secondary}>
                    {t('card5.description')}
                  </Typography>
                </CardBio>
              </DesktopContainer>
              <MobileContainer>
                <Image
                  src='/images/services/card5.png'
                  alt='card5'
                  width={43}
                  height={43}
                  objectFit='contain'
                />
                <CardBio>
                  <Typography variant='text-xs' color={colors.text.secondary} weight='bold'>
                    {t('card5.title')}
                  </Typography>
                  <Typography variant='text-xs' color={colors.text.secondary}>
                    {t('card5.description')}
                  </Typography>
                </CardBio>
              </MobileContainer>
            </GridItem>
            <GridItem>
              <DesktopContainer>
                <Image
                  src='/images/services/card6.png'
                  alt='card6'
                  width={110}
                  height={110}
                  objectFit='contain'
                />
                <CardBio>
                  <Typography variant='text-sm' color={colors.text.secondary} weight='bold'>
                    {t('card6.title')}
                  </Typography>
                  <Typography variant='text-sm' color={colors.text.secondary}>
                    {t('card6.description')}
                  </Typography>
                </CardBio>
              </DesktopContainer>
              <MobileContainer>
                <Image
                  src='/images/services/card6.png'
                  alt='card6'
                  width={43}
                  height={43}
                  objectFit='contain'
                />
                <CardBio>
                  <Typography variant='text-xs' color={colors.text.secondary} weight='bold'>
                    {t('card6.title')}
                  </Typography>
                  <Typography variant='text-xs' color={colors.text.secondary}>
                    {t('card6.description')}
                  </Typography>
                </CardBio>
              </MobileContainer>
            </GridItem>
            <GridItem>
              <DesktopContainer>
                <Image
                  src='/images/services/card7.png'
                  alt='card7'
                  width={110}
                  height={110}
                  objectFit='contain'
                />
                <CardBio>
                  <Typography variant='text-sm' color={colors.text.secondary} weight='bold'>
                    {t('card7.title')}
                  </Typography>
                  <Typography variant='text-sm' color={colors.text.secondary}>
                    {t('card7.description')}
                  </Typography>
                </CardBio>
              </DesktopContainer>
              <MobileContainer>
                <Image
                  src='/images/services/card7.png'
                  alt='card7'
                  width={43}
                  height={43}
                  objectFit='contain'
                />
                <CardBio>
                  <Typography variant='text-xs' color={colors.text.secondary} weight='bold'>
                    {t('card7.title')}
                  </Typography>
                  <Typography variant='text-xs' color={colors.text.secondary}>
                    {t('card7.description')}
                  </Typography>
                </CardBio>
              </MobileContainer>
            </GridItem>
            <GridItem>
              <DesktopContainer>
                <Image
                  src='/images/services/card8.png'
                  alt='card8'
                  width={110}
                  height={110}
                  objectFit='contain'
                />
                <CardBio>
                  <Typography variant='text-sm' color={colors.text.secondary} weight='bold'>
                    {t('card8.title')}
                  </Typography>
                  <Typography variant='text-sm' color={colors.text.secondary}>
                    {t('card8.description')}
                  </Typography>
                </CardBio>
              </DesktopContainer>
              <MobileContainer>
                <Image
                  src='/images/services/card8.png'
                  alt='card8'
                  width={43}
                  height={43}
                  objectFit='contain'
                />
                <CardBio>
                  <Typography variant='text-xs' color={colors.text.secondary} weight='bold'>
                    {t('card8.title')}
                  </Typography>
                  <Typography variant='text-xs' color={colors.text.secondary}>
                    {t('card8.description')}
                  </Typography>
                </CardBio>
              </MobileContainer>
            </GridItem>
          </Grid>
        </ServicesContainer>
      </Container>
    </MainContainer>
  );
};

export default Services;
