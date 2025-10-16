'use client';
import { useTranslations } from 'next-intl';
import React from 'react';
import styled from 'styled-components';

import DashboardContainer from '@/components/DashboardContainer';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import { DesktopContainer, MobileContainer } from '@/components/Responsive';
import Sidebar from '@/components/Sidebar';
import UserBadge from '@/components/UserBadge';
import { colors } from '@/styles/colors';

const MainContent = styled.div`
  display: flex;
  gap: 32px;
  height: calc(100vh - 32px);
  @media screen and (max-width: 1080px) {
    padding: 16px 0 0 0;
    height: auto;
  }
`;

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 32px;
  @media screen and (min-width: 1081px) {
    position: sticky;
  }
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const UserWrapper = styled.div`
  margin-left: auto;
  width: 296px;
`;

const MainCard = styled.div`
  background: ${colors.background.white};
  border: 1px solid ${colors.border.light};
  border-radius: 12px;
  padding: 32px;
`;

const PasswordCard = styled.div`
  background: ${colors.background.white};
  border: 1px solid ${colors.border.light};
  border-radius: 12px;
  padding: 32px 32px 24px 32px;
`;

const Avatar = styled.div`
  display: flex;
  gap: 16px;
`;

const AvatarWrapper = styled.div`
  display: flex;
  border-radius: 14px;
  width: 116px;
  height: 116px;
  background: ${colors.background.lightest};
`;

const UploadWrapper = styled.div`
  border: 1px dashed ${colors.border.primary};
  width: 543px;
  height: 116px;
  border-radius: 8px;
`;

const FormField = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 674px;
  gap: 24px;
  margin-top: 32px;
`;

const SettingsScreen = () => {
  const tSettings = useTranslations('Settings');

  return (
    <>
      <MobileContainer>
        <Header />
      </MobileContainer>
      <DashboardContainer>
        <MainContent>
          <DesktopContainer>
            <Sidebar />
          </DesktopContainer>
          <RightContent>
            <ContentHeader>
              <PageTitle title={tSettings('title')} desktopVariant='small' />
              <DesktopContainer>
                <UserWrapper>
                  <UserBadge
                    name='Gagi Murjikneli'
                    email='gagi.murjikneli@gmail.com'
                    presence='online'
                  />
                </UserWrapper>
              </DesktopContainer>
            </ContentHeader>
            <MainCard>
              <Avatar>
                <AvatarWrapper></AvatarWrapper>
                <UploadWrapper></UploadWrapper>
              </Avatar>
              <FormField></FormField>
            </MainCard>
            <PasswordCard></PasswordCard>
          </RightContent>
        </MainContent>
      </DashboardContainer>
    </>
  );
};

export default SettingsScreen;
