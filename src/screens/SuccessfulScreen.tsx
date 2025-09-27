'use client';
import { useTranslations } from 'next-intl';
import React from 'react';
import styled from 'styled-components';

import { Button, Typography } from '@/components';
import Header from '@/components/Header';
import { MobileContainer } from '@/components/Responsive';
import SuccessfulIcon from '@/icons/SuccessfulIcon';
import { colors } from '@/styles/colors';

const PageBackground = styled.div`
  background: #ffffff;
  min-height: 100dvh;
  width: 100%;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  max-width: 345px;
  margin: 0 auto;
  padding-top: 84px;
  @media (max-width: 1080px) {
    padding-top: 64px;
  }
`;

const Title = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: 1080px) {
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  @media (max-width: 1080px) {
    margin-top: 4px;
  }
`;

const SuccessfulScreen = () => {
  const tSuccessful = useTranslations('Successful');
  return (
    <PageBackground>
      <MobileContainer>
        <Header />
      </MobileContainer>
      <MainContainer>
        <SuccessfulIcon />
        <Title>
          <Typography variant='text-md' weight='bold' color={colors.text.black}>
            {tSuccessful('title')}
          </Typography>
          <Typography variant='text-sm' weight='regular' color={colors.text.black}>
            {tSuccessful('description')}
          </Typography>
        </Title>
        <ButtonWrapper>
          <Button variant='primary' size='lg' onClick={() => {}}>
            {tSuccessful('button')}
          </Button>
        </ButtonWrapper>
      </MainContainer>
    </PageBackground>
  );
};

export default SuccessfulScreen;
