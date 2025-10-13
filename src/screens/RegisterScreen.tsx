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
  gap: 32px;
  max-width: 345px;
  margin: 0 auto;
  padding-top: 52px;
  @media (max-width: 1080px) {
    padding-top: 44px;
    padding-bottom: 80px;
  }
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 345px;
`;

const Title = styled.div`
  text-align: center;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  @media (max-width: 1080px) {
    margin-top: 32px;
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;

const StyledCheckbox = styled.span<{ $checked: boolean }>`
  width: 20px;
  height: 20px;
  border: 2px solid #d0d5dd;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition:
    border-color 0.15s,
    background 0.15s;
  background: #ffffff;
  ${HiddenCheckbox}:focus-visible + & {
    outline: 2px solid ${colors.text.black};
    outline-offset: 2px;
  }
`;

const HaveAccount = styled.div`
  cursor: pointer;
`;

const CheckIcon = () => (
  <svg width='14' height='14' viewBox='0 0 14 14' fill='none'>
    <path
      d='M11.2 3.5L5.75 9.8 3 6.9'
      stroke={colors.text.black}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const RegisterPage = () => {
  const tRegister = useTranslations('Register');
  const router = useRouter();
  const locale = useLocale();
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const goToLogin = () => {
    router.push(`/${locale}/auth/login`);
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
              {tRegister('title')}
            </Typography>
          </DesktopContainer>
          <MobileContainer>
            <Typography variant='display-xs' weight='bold' color={colors.text.black}>
              {tRegister('title')}
            </Typography>
          </MobileContainer>
        </Title>
        <InputsWrapper>
          <Dropdown
            variant='input'
            label={tRegister('userType')}
            placeholder={tRegister('userTypePlaceholder')}
            value=''
            onChange={() => {}}
            items={[]}
            required={false}
            inputPadding='12px 16px'
          />
          <Dropdown
            variant='input'
            label={tRegister('name')}
            placeholder={tRegister('namePlaceholder')}
            value=''
            onChange={() => {}}
            items={[]}
            required={false}
            inputPadding='12px 16px'
          />
          <Dropdown
            variant='input'
            label={tRegister('surname')}
            placeholder={tRegister('surnamePlaceholder')}
            value=''
            onChange={() => {}}
            items={[]}
            required={false}
            inputPadding='12px 16px'
          />
          <Dropdown
            variant='input'
            label={tRegister('email')}
            placeholder={tRegister('emailPlaceholder')}
            value=''
            onChange={() => {}}
            items={[]}
            required={false}
            inputPadding='12px 16px'
          />
          <Dropdown
            variant='input'
            label={tRegister('phone')}
            placeholder={tRegister('phonePlaceholder')}
            value=''
            onChange={() => {}}
            items={[]}
            required={false}
            inputPadding='12px 16px'
          />
          <Dropdown
            variant='input'
            label={tRegister('password')}
            placeholder={tRegister('passwordPlaceholder')}
            value=''
            onChange={() => {}}
            items={[]}
            required={false}
            inputPadding='12px 16px'
          />
          <CheckboxWrapper as='label'>
            <HiddenCheckbox
              checked={acceptedTerms}
              onChange={() => setAcceptedTerms(v => !v)}
              aria-checked={acceptedTerms}
            />
            <StyledCheckbox $checked={acceptedTerms}>
              {acceptedTerms && <CheckIcon />}
            </StyledCheckbox>
            <Typography variant='text-sm' weight='regular' color={colors.text.dark}>
              {tRegister('terms')}
            </Typography>
          </CheckboxWrapper>
        </InputsWrapper>
        <ButtonWrapper>
          <Button variant='primary' size='lg' onClick={() => {}}>
            {tRegister('button')}
          </Button>
        </ButtonWrapper>
        <HaveAccount
          role='button'
          tabIndex={0}
          onClick={goToLogin}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') goToLogin();
          }}
        >
          <Typography variant='text-sm' weight='regular' color={colors.text.dark}>
            {tRegister.rich('haveAccount', {
              bold: chunks => (
                <Typography as='span' variant='text-sm' weight='bold' color={colors.text.dark}>
                  {chunks}
                </Typography>
              ),
            })}
          </Typography>
        </HaveAccount>
      </MainContainer>
    </PageBackground>
  );
};

export default RegisterPage;
