'use client';
import { useTranslations } from 'next-intl';
import React from 'react';
import styled from 'styled-components';

import { Button, Typography } from '@/components';
import Dropdown from '@/components/Dropdown';
import Header from '@/components/Header';
import { DesktopContainer, MobileContainer } from '@/components/Responsive';
import BigLogoIcon from '@/icons/BigLogoIcon';
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
  gap: 44px;
  max-width: 345px;
  margin: 0 auto;
  padding-top: 84px;
  @media (max-width: 1080px) {
    padding-top: 64px;
  }
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 345px;
`;

const Title = styled.div`
  text-align: center;
  white-space: nowrap;
  margin-top: 20px;
  margin-bottom: -20px;
  @media (max-width: 1080px) {
    padding-bottom: 10px;
    margin-top: 0;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  @media (max-width: 1080px) {
    margin-top: 4px;
  }
`;

const PasswordScreen = () => {
  const tPassword = useTranslations('Password');
  return (
    <PageBackground>
      <MobileContainer>
        <Header />
      </MobileContainer>
      <MainContainer>
        <BigLogoIcon />
        <Title>
          <DesktopContainer>
            <Typography variant='display-md' weight='bold' color={colors.text.black}>
              {tPassword('title')}
            </Typography>
          </DesktopContainer>
          <MobileContainer>
            <Typography variant='display-xs' weight='bold' color={colors.text.black}>
              {tPassword('title')}
            </Typography>
          </MobileContainer>
        </Title>
        <Typography variant='text-sm' weight='regular' color={colors.text.black}>
          {tPassword('description')}
        </Typography>
        <InputsWrapper>
          <Dropdown
            variant='input'
            label={tPassword('email')}
            placeholder={tPassword('emailPlaceholder')}
            value=''
            onChange={() => {}}
            items={[]}
            required={false}
            inputPadding='12px 16px'
          />
        </InputsWrapper>
        <ButtonWrapper>
          <Button variant='primary' size='lg' onClick={() => {}}>
            {tPassword('title')}
          </Button>
        </ButtonWrapper>
      </MainContainer>
    </PageBackground>
  );
};

export default PasswordScreen;
