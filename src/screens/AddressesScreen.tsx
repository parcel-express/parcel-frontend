'use client';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import styled from 'styled-components';

import { Button } from '@/components';
import DashboardContainer from '@/components/DashboardContainer';
import Header from '@/components/Header';
import NewBranchPopup from '@/components/NewBranchPopup';
import PageTitle from '@/components/PageTitle';
import { DesktopContainer, MobileContainer } from '@/components/Responsive';
import Sidebar from '@/components/Sidebar';
import Table from '@/components/Table';
import UserBadge from '@/components/UserBadge';
import PlusTranspIcon from '@/icons/PlusTranspIcon';
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

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  padding: 16px 24px;
  border-radius: 24px 24px 0 0;
  background: ${colors.background.light};
  border: 1px solid ${colors.border.light};
  & > button {
    margin-left: auto;
  }
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 0;
  overflow: auto;
  height: calc(100vh - 220px);
  @media screen and (max-width: 1080px) {
    height: auto;
  }
`;

const UserWrapper = styled.div`
  margin-left: auto;
  width: 296px;
`;

const FirstCol = styled.span`
  font-weight: 500;
`;

const StyledButton = styled(Button)`
  position: relative;
  overflow: hidden;
  color: ${colors.brand.gradientStart};
  border: none !important;
  box-shadow: none !important;
  outline: none;
  background: transparent !important;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(
      93.55deg,
      ${colors.brand.primary} 21.82%,
      ${colors.brand.secondary} 110.55%
    );
    opacity: 0.1;
    z-index: 0;
    pointer-events: none;
  }
  & > * {
    position: relative;
    z-index: 1;
  }
  & svg {
    color: ${colors.brand.primary};
    stroke: ${colors.brand.primary};
    fill: ${colors.brand.primary};
  }
`;

const MobileButtonWrapper = styled.div`
  width: 100%;
  margin: 8px 0 20px 0;
  & > button {
    width: 100%;
  }
`;

const AddressesScreen = () => {
  const tAddresses = useTranslations('Addresses');
  const rowKeys = ['row1', 'row2'];
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const TOTAL_ROWS = 6;

  const buildBaseRow = (idx: number) => {
    const key = rowKeys[idx % rowKeys.length];
    return [
      <FirstCol key={`col1-${idx}`}>{tAddresses(`${key}.col1`)}</FirstCol>,
      tAddresses(`${key}.col2`),
      tAddresses(`${key}.col3`),
      tAddresses(`${key}.col4`),
      tAddresses(`${key}.col5`),
      tAddresses(`${key}.col6`),
    ];
  };
  const tableData: React.ReactNode[][] = Array.from({ length: TOTAL_ROWS }, (_, idx) => {
    return buildBaseRow(idx);
  });

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
              <PageTitle title={tAddresses('title')} desktopVariant='small' />
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
            <TableWrapper>
              <DesktopContainer>
                <TableHeader>
                  <StyledButton
                    variant='primary'
                    size='xsSearch'
                    leftIcon={<PlusTranspIcon color='#662D91' />}
                    onClick={() => setIsPopupOpen(true)}
                  >
                    {tAddresses('button')}
                  </StyledButton>
                </TableHeader>
              </DesktopContainer>

              <MobileContainer>
                <MobileButtonWrapper>
                  <StyledButton
                    variant='primary'
                    size='xsSearch'
                    leftIcon={<PlusTranspIcon color='#662D91' />}
                    onClick={() => setIsPopupOpen(true)}
                  >
                    {tAddresses('button')}
                  </StyledButton>
                </MobileButtonWrapper>
              </MobileContainer>
              <Table
                cornerStyle='bottom'
                rows={tableData.length}
                columns={6}
                details={tableData}
                showArrowsIcon={true}
                showCheckbox={false}
                showRightArrow={false}
                showEditIcon={true}
                showTrashIcon={true}
                selectedRows={selectedRows}
                onRowSelect={(i, sel) => {
                  setSelectedRows(prev => (sel ? [...prev, i] : prev.filter(r => r !== i)));
                }}
                columnTitles={[
                  tAddresses('table.col1'),
                  tAddresses('table.col2'),
                  tAddresses('table.col3'),
                  tAddresses('table.col4'),
                  tAddresses('table.col5'),
                  tAddresses('table.col6'),
                ]}
                mobileVariant='addresses'
              />
            </TableWrapper>
          </RightContent>
        </MainContent>
      </DashboardContainer>
      <NewBranchPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
};

export default AddressesScreen;
