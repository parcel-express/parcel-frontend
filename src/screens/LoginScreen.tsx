'use client';
import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
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
  margin-top: 20px;
  @media (max-width: 1080px) {
    padding-bottom: 10px;
    margin-top: 0;
  }
`;

const ForgotPassword = styled.div`
  display: flex;
  cursor: pointer;
  margin-top: -14px;
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  @media (max-width: 1080px) {
    margin-top: 4px;
  }
`;

const Registration = styled.div`
  margin-top: -12px;
  cursor: pointer;
  @media (max-width: 1080px) {
    margin-top: -22px;
  }
`;

const LoginScreen = () => {
  const tLogin = useTranslations('Login');
  const router = useRouter();
  const locale = useLocale();

  const goToRegister = () => {
    router.push(`/${locale}/auth/register`);
  };

  const goToPassword = () => {
    router.push(`/${locale}/auth/password`);
  };

  return (
    <PageBackground>
      <MobileContainer>
        <Header />
      </MobileContainer>
      <MainContainer>
        <DesktopContainer>
          <BigLogoIcon />
        </DesktopContainer>
        <Title>
          <DesktopContainer>
            <Typography variant='display-md' weight='bold' color={colors.text.black}>
              {tLogin('title')}
            </Typography>
          </DesktopContainer>
          <MobileContainer>
            <Typography variant='display-xs' weight='bold' color={colors.text.black}>
              {tLogin('title')}
            </Typography>
          </MobileContainer>
        </Title>
        <InputsWrapper>
          <Dropdown
            variant='input'
            label={tLogin('email')}
            placeholder={tLogin('emailPlaceholder')}
            value=''
            onChange={() => {}}
            items={[]}
            required={false}
          />
          <Dropdown
            variant='input'
            label={tLogin('password')}
            placeholder={tLogin('passwordPlaceholder')}
            value=''
            onChange={() => {}}
            items={[]}
            required={false}
          />
          <ForgotPassword
            role='button'
            tabIndex={0}
            onClick={goToPassword}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') goToPassword();
            }}
          >
            <Typography variant='text-sm' weight='medium' color={colors.text.black}>
              {tLogin('forgot')}
            </Typography>
          </ForgotPassword>
        </InputsWrapper>
        <ButtonWrapper>
          <Button variant='primary' size='lg' onClick={() => {}}>
            {tLogin('button')}
          </Button>
        </ButtonWrapper>
        <Registration
          role='button'
          tabIndex={0}
          onClick={goToRegister}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') goToRegister();
          }}
        >
          <Typography variant='text-sm' weight='regular' color={colors.text.dark}>
            {tLogin.rich('noAccount', {
              bold: chunks => (
                <Typography as='span' variant='text-sm' weight='bold' color={colors.text.dark}>
                  {chunks}
                </Typography>
              ),
            })}
          </Typography>
        </Registration>
      </MainContainer>
    </PageBackground>
  );
};

export default LoginScreen;
