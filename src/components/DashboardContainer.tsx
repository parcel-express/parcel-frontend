import React from 'react';
import styled from 'styled-components';

import PageTitle from './PageTitle';
import { DesktopContainer } from './Responsive';
import Sidebar from './Sidebar';
import UserBadge from './UserBadge';

type Props = {
  children: React.ReactNode;
  title?: string;
  desktopVariant?: 'small' | 'large';
  showUserBadge?: boolean;
};

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 32px 32px 0 32px;
  @media (max-width: 1080px) {
    padding: 0 20px;
  }
`;

const MainContent = styled.div`
  display: flex;
  gap: 32px;
  height: calc(100vh - 32px);
  @media screen and (max-width: 1080px) {
    padding: 16px 0 0 0;
    height: auto;
  }
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
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

const UserWrapper = styled.div`
  margin-left: auto;
  width: 296px;
`;

const DashboardContainer: React.FC<Props> = ({
  children,
  title,
  desktopVariant = 'small',
  showUserBadge = true,
}) => {
  return (
    <StyledContainer>
      <MainContent>
        <DesktopContainer>
          <Sidebar />
        </DesktopContainer>
        <RightContent>
          {title && (
            <ContentHeader>
              <PageTitle title={title} desktopVariant={desktopVariant} />
              {showUserBadge && (
                <DesktopContainer>
                  <UserWrapper>
                    <UserBadge
                      name='Gagi Murjikneli'
                      email='gagi.murjikneli@gmail.com'
                      presence='online'
                    />
                  </UserWrapper>
                </DesktopContainer>
              )}
            </ContentHeader>
          )}
          {children}
        </RightContent>
      </MainContent>
    </StyledContainer>
  );
};

export default DashboardContainer;
