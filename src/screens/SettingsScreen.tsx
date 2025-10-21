'use client';
import { useTranslations } from 'next-intl';
import React from 'react';
import styled from 'styled-components';

import { Button, Typography } from '@/components';
import DashboardContainer from '@/components/DashboardContainer';
import Dropdown from '@/components/Dropdown';
import Header from '@/components/Header';
import { MobileContainer } from '@/components/Responsive';
import UploadIcon from '@/icons/UploadIcon';
import { colors } from '@/styles/colors';

const MainCard = styled.div`
  background: ${colors.background.white};
  border: 1px solid ${colors.border.light};
  border-radius: 12px;
  padding: 32px;
  @media screen and (max-width: 1080px) {
    background: transparent;
    border: none;
    padding: 0;
  }
`;

const PasswordCard = styled.div`
  background: ${colors.background.white};
  border: 1px solid ${colors.border.light};
  border-radius: 12px;
  padding: 32px 32px 24px 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 80px;
  @media screen and (max-width: 1080px) {
    background: transparent;
    border: none;
    padding: 0;
    gap: 40px;
    margin-bottom: 94px;
  }
`;

const PasswordInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 674px;
  @media screen and (max-width: 1080px) {
    max-width: 100%;
    gap: 28px;
  }
`;

const NewPassInputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  @media screen and (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 28px;
  }
`;

const Avatar = styled.div`
  display: flex;
  gap: 16px;
  @media screen and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;

const AvatarWrapper = styled.div`
  display: flex;
  border-radius: 14px;
  width: 116px;
  height: 116px;
  background: ${colors.background.lightest};
  @media screen and (max-width: 1080px) {
    width: 72px;
    height: 72px;
  }
`;

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  justify-content: center;
  border: 1px dashed ${colors.border.primary};
  width: 543px;
  padding: 28px 0;
  border-radius: 8px;
  @media screen and (max-width: 1080px) {
    width: 100%;
  }
`;

const FormField = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 674px;
  gap: 24px;
  margin-top: 32px;
  @media screen and (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    max-width: 100%;
    gap: 20px;
    margin-top: 16px;
  }
`;

const SaveButtonWrapper = styled.div`
  display: flex;
  max-width: 260px;
  margin-left: auto;
  grid-column: 1 / -1;
  @media screen and (max-width: 1080px) {
    max-width: 100%;
    width: 100%;

    & > button {
      width: 100%;
      max-width: 100%;
    }
  }
`;

const SettingsScreen = () => {
  const tSettings = useTranslations('Settings');

  return (
    <>
      <MobileContainer>
        <Header />
      </MobileContainer>
      <DashboardContainer title={tSettings('title')}>
        <MainCard>
          <Avatar>
            <AvatarWrapper></AvatarWrapper>
            <UploadWrapper>
              <UploadIcon />
              <Typography variant='text-sm' color={colors.text.secondary}>
                {tSettings('AvatarCard.description')}
              </Typography>
            </UploadWrapper>
          </Avatar>
          <FormField>
            <Dropdown
              value={''}
              variant='input'
              onChange={() => {}}
              placeholder={tSettings('Form.companyNamePlaceholder')}
              label={tSettings('Form.companyName')}
              inputPadding='12px 16px'
              items={[]}
            />
            <Dropdown
              value={''}
              variant='input'
              onChange={() => {}}
              placeholder={tSettings('Form.company2Placeholder')}
              label={tSettings('Form.company2')}
              inputPadding='12px 16px'
              items={[]}
            />
            <Dropdown
              value={''}
              variant='input'
              onChange={() => {}}
              placeholder={tSettings('Form.personPlaceholder')}
              label={tSettings('Form.person')}
              inputPadding='12px 16px'
              items={[]}
            />
            <Dropdown
              value={''}
              variant='input'
              onChange={() => {}}
              placeholder={tSettings('Form.phonePlaceholder')}
              label={tSettings('Form.phone')}
              inputPadding='12px 16px'
              items={[]}
            />
            <Dropdown
              value={''}
              variant='input'
              onChange={() => {}}
              placeholder={tSettings('Form.emailPlaceholder')}
              label={tSettings('Form.email')}
              inputPadding='12px 16px'
              items={[]}
            />
            <Dropdown
              value={''}
              variant='input'
              onChange={() => {}}
              placeholder={tSettings('Form.emailPlaceholder')}
              label={tSettings('Form.email2')}
              inputPadding='12px 16px'
              items={[]}
            />
            <Dropdown
              value={''}
              variant='input'
              onChange={() => {}}
              placeholder={tSettings('Form.addressPlaceholder')}
              label={tSettings('Form.address')}
              inputPadding='12px 16px'
              items={[]}
            />
            <Dropdown
              value={''}
              variant='input'
              onChange={() => {}}
              placeholder={tSettings('Form.cityPlaceholder')}
              label={tSettings('Form.city')}
              inputPadding='12px 16px'
              items={[]}
            />
            <Dropdown
              value={''}
              variant='input'
              onChange={() => {}}
              placeholder={tSettings('Form.address2Placeholder')}
              label={tSettings('Form.address2')}
              inputPadding='12px 16px'
              items={[]}
            />
            <Dropdown
              value={''}
              variant='input'
              onChange={() => {}}
              placeholder={tSettings('Form.phone2Placeholder')}
              label={tSettings('Form.phone2')}
              inputPadding='12px 16px'
              items={[]}
            />
            <Dropdown
              value={''}
              variant='input'
              onChange={() => {}}
              placeholder={tSettings('Form.iBanPlaceholder')}
              label={tSettings('Form.iBan')}
              inputPadding='12px 16px'
              items={[]}
            />
            <Dropdown
              value={''}
              variant='input'
              onChange={() => {}}
              placeholder={tSettings('Form.codePlaceholder')}
              label={tSettings('Form.code')}
              inputPadding='12px 16px'
              items={[]}
            />
            <Dropdown
              value={''}
              variant='input'
              onChange={() => {}}
              placeholder={tSettings('Form.ceoPlaceholder')}
              label={tSettings('Form.ceo')}
              inputPadding='12px 16px'
              items={[]}
            />
            <Dropdown
              value={''}
              variant='dropdown'
              onChange={() => {}}
              placeholder={tSettings('Form.fieldPlaceholder')}
              label={tSettings('Form.field')}
              inputPadding='12px 16px'
              items={[]}
            />
            <SaveButtonWrapper>
              <Button variant='primary' size='md'>
                {tSettings('Form.button')}
              </Button>
            </SaveButtonWrapper>
          </FormField>
        </MainCard>
        <PasswordCard>
          <Typography variant='text-md' color={colors.text.black} weight='bold'>
            {tSettings('PasswordCard.title')}
          </Typography>
          <PasswordInputs>
            <Dropdown
              value={''}
              variant='input'
              onChange={() => {}}
              placeholder={tSettings('PasswordCard.oldPlaceholder')}
              label={tSettings('PasswordCard.old')}
              inputPadding='12px 16px'
              items={[]}
            />
            <NewPassInputs>
              <Dropdown
                value={''}
                variant='input'
                onChange={() => {}}
                placeholder={tSettings('PasswordCard.newPlaceholder')}
                label={tSettings('PasswordCard.new')}
                inputPadding='12px 16px'
                items={[]}
              />
              <Dropdown
                value={''}
                variant='input'
                onChange={() => {}}
                placeholder={tSettings('PasswordCard.confirmPlaceholder')}
                label={tSettings('PasswordCard.confirm')}
                inputPadding='12px 16px'
                items={[]}
              />
            </NewPassInputs>
            <SaveButtonWrapper>
              <Button variant='primary' size='md'>
                {tSettings('PasswordCard.button')}
              </Button>
            </SaveButtonWrapper>
          </PasswordInputs>
        </PasswordCard>
      </DashboardContainer>
    </>
  );
};

export default SettingsScreen;
