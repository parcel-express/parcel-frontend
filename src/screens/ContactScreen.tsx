'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import styled from 'styled-components';

import { Button } from '@/components/Button';
import Container from '@/components/Container';
import Dropdown from '@/components/Dropdown';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import PhoneInput from '@/components/PhoneInput';
import { DesktopContainer, MobileContainer } from '@/components/Responsive';
import { Typography } from '@/components/Typography';
import { colors } from '@/styles/colors';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 72px 0 40px 0;
  @media (max-width: 1080px) {
    padding: 36px 0;
  }
`;

const Title = styled.div`
  margin-bottom: 41px;
  @media (max-width: 1080px) {
    margin-bottom: 36px;
  }
`;

const MapSection = styled.div`
  position: relative;
  width: 100%;
  max-width: 1320px;
  height: 417px;
  margin: 0 auto;
  @media (max-width: 1080px) {
    height: auto;
    display: flex;
    flex-direction: column;
  }
`;

const MapImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 417px;
  @media (max-width: 1080px) {
  }
`;

const MapCard = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  background: ${colors.background.white};
  border-radius: 12px;
  padding: 24px;
  max-width: 379px;
  @media (max-width: 1080px) {
    position: static;
    max-width: 100%;
    margin-top: 16px;
  }
`;

const CardTitle = styled.div`
  margin-bottom: 16px;
  @media (max-width: 1080px) {
    margin-bottom: 12px;
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FormBackground = styled.div`
  background-color: ${colors.background.white};
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  text-align: center;
  padding: 76px 0 136px 0;
  @media (max-width: 1080px) {
    padding: 36px 0 80px 0;
  }
  @media (max-width: 768px) {
    align-items: stretch;
  }
`;

const FormTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (max-width: 1080px) {
    gap: 16px;
  }
`;

const InputsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 72px;
  max-width: 480px;
  @media (max-width: 1080px) {
    margin-top: 12px;
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const NameContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  @media (max-width: 658px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 8px;
`;

function ContactScreen() {
  const tContact = useTranslations('Contact');
  const [phone, setPhone] = useState('');

  return (
    <>
      <Header />
      <Container>
        <MainContainer>
          <Title>
            <PageTitle title={tContact('title')} desktopVariant='large'></PageTitle>
          </Title>
          <MapSection>
            <MapImageWrapper>
              <Image
                src='/images/contact/hero.png'
                alt='Contact Hero'
                fill
                style={{ objectFit: 'cover' }}
              />
            </MapImageWrapper>
            <MapCard>
              <CardTitle>
                <DesktopContainer>
                  <Typography variant='text-lg' color={colors.text.black} weight='bold'>
                    {tContact('MapCard.city')}
                  </Typography>
                </DesktopContainer>
                <MobileContainer>
                  <Typography variant='text-md' color={colors.text.black} weight='bold'>
                    {tContact('MapCard.city')}
                  </Typography>
                </MobileContainer>
              </CardTitle>
              <CardInfo>
                <DesktopContainer>
                  <Typography variant='text-md' color={colors.text.secondary} weight='medium'>
                    {tContact('MapCard.street')}
                  </Typography>
                  <Typography variant='text-md' color={colors.text.secondary} weight='medium'>
                    {tContact('MapCard.phone')}
                  </Typography>
                  <Typography variant='text-md' color={colors.text.secondary} weight='medium'>
                    {tContact('MapCard.weekdays')}
                  </Typography>
                  <Typography variant='text-md' color={colors.text.secondary} weight='medium'>
                    {tContact('MapCard.weekend')}
                  </Typography>
                </DesktopContainer>
                <MobileContainer>
                  <Typography variant='text-xs' color={colors.text.secondary} weight='medium'>
                    {tContact('MapCard.street')}
                  </Typography>
                  <Typography variant='text-xs' color={colors.text.secondary} weight='medium'>
                    {tContact('MapCard.phone')}
                  </Typography>
                  <Typography variant='text-xs' color={colors.text.secondary} weight='medium'>
                    {tContact('MapCard.weekdays')}
                  </Typography>
                  <Typography variant='text-xs' color={colors.text.secondary} weight='medium'>
                    {tContact('MapCard.weekend')}
                  </Typography>
                </MobileContainer>
              </CardInfo>
            </MapCard>
          </MapSection>
        </MainContainer>
      </Container>
      <FormBackground>
        <Container>
          <Form>
            <FormTitle>
              <DesktopContainer>
                <Typography variant='display-lg' color={colors.text.black} weight='semibold'>
                  {tContact('subtitle')}
                </Typography>
              </DesktopContainer>
              <MobileContainer>
                <Typography variant='display-xs' color={colors.text.black} weight='semibold'>
                  {tContact('subtitle')}
                </Typography>
              </MobileContainer>
              <DesktopContainer>
                <Typography variant='text-xl' color={colors.text.black} weight='regular'>
                  {tContact('description')}
                </Typography>
              </DesktopContainer>
              <MobileContainer>
                <Typography variant='text-sm' color={colors.text.black} weight='regular'>
                  {tContact('description')}
                </Typography>
              </MobileContainer>
            </FormTitle>
            <InputsBox>
              <NameContainer>
                <Dropdown
                  value=''
                  variant='input'
                  onChange={() => {}}
                  placeholder={tContact('Form.namePlaceholder')}
                  label={tContact('Form.name')}
                  inputPadding='12px 16px'
                  items={[]}
                />
                <Dropdown
                  value=''
                  variant='input'
                  onChange={() => {}}
                  placeholder={tContact('Form.surnamePlaceholder')}
                  label={tContact('Form.surname')}
                  inputPadding='12px 16px'
                  items={[]}
                />
              </NameContainer>
              <Dropdown
                value=''
                variant='input'
                onChange={() => {}}
                placeholder={tContact('Form.emailPlaceholder')}
                label={tContact('Form.email')}
                inputPadding='12px 16px'
                items={[]}
              />
              <PhoneInput
                value={phone}
                onChange={setPhone}
                label={tContact('Form.phone')}
                placeholder={tContact('Form.phonePlaceholder')}
                required
              />
              <Dropdown
                value=''
                variant='textarea'
                onChange={() => {}}
                placeholder={tContact('Form.messagePlaceholder')}
                label={tContact('Form.message')}
                inputPadding='12px 16px'
                items={[]}
              />
              <ButtonWrapper>
                <Button variant='primary' size='lg'>
                  {tContact('button')}
                </Button>
              </ButtonWrapper>
            </InputsBox>
          </Form>
        </Container>
      </FormBackground>
      <Footer />
    </>
  );
}

export default ContactScreen;
