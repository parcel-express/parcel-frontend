'use client';
import { useTranslations } from 'next-intl';
import React from 'react';
import styled from 'styled-components';

import { colors } from '@/styles/colors';

import Container from './Container';
import { DesktopContainer, MobileContainer } from './Responsive';
import Typography from './Typography';

const CardsContainer = styled.div`
  background: ${colors.background.white};
  border-radius: 14px;
  padding: 64px 52px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 16px;
  @media screen and (max-width: 1080px) {
    grid-template-columns: 1fr;
    padding: 38.42px 14.29px;
    gap: 52px;
    margin-bottom: 24px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const Statistics = () => {
  const t = useTranslations('Statistics');
  return (
    <Container>
      <CardsContainer>
        <Card>
          <DesktopContainer>
            <Typography variant='display-lg' weight='semibold' color={colors.text.primary}>
              {t('card1.quantity')}
            </Typography>
            <Typography variant='text-lg' weight='semibold' color={colors.text.primary}>
              {t('card1.value')}
            </Typography>
          </DesktopContainer>
          <MobileContainer>
            <Typography variant='display-sm' weight='semibold' color={colors.text.primary}>
              {t('card1.quantity')}
            </Typography>
            <Typography variant='text-md' weight='semibold' color={colors.text.primary}>
              {t('card1.value')}
            </Typography>
          </MobileContainer>
        </Card>
        <Card>
          <DesktopContainer>
            <Typography variant='display-lg' weight='semibold' color={colors.text.primary}>
              {t('card2.time')}
            </Typography>
            <Typography variant='text-lg' weight='semibold' color={colors.text.primary}>
              {t('card2.value')}
            </Typography>
          </DesktopContainer>
          <MobileContainer>
            <Typography variant='display-sm' weight='semibold' color={colors.text.primary}>
              {t('card2.time')}
            </Typography>
            <Typography variant='text-md' weight='semibold' color={colors.text.primary}>
              {t('card2.value')}
            </Typography>
          </MobileContainer>
        </Card>
        <Card>
          <DesktopContainer>
            <Typography variant='display-lg' weight='semibold' color={colors.text.primary}>
              {t('card3.price')}
            </Typography>
            <Typography variant='text-lg' weight='semibold' color={colors.text.primary}>
              {t('card3.value')}
            </Typography>
          </DesktopContainer>
          <MobileContainer>
            <Typography variant='display-sm' weight='semibold' color={colors.text.primary}>
              {t('card3.price')}
            </Typography>
            <Typography variant='text-md' weight='semibold' color={colors.text.primary}>
              {t('card3.value')}
            </Typography>
          </MobileContainer>
        </Card>
      </CardsContainer>
    </Container>
  );
};

export default Statistics;
