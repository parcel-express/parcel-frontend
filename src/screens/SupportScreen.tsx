'use client';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import styled from 'styled-components';

import { Button } from '@/components';
import DashboardContainer from '@/components/DashboardContainer';
import DatePicker from '@/components/DatePicker';
import Dropdown from '@/components/Dropdown';
import Header from '@/components/Header';
import NewRequestPopup from '@/components/NewRequestPopup';
import PageTitle from '@/components/PageTitle';
import { DesktopContainer, MobileContainer } from '@/components/Responsive';
import SearchInput from '@/components/SearchInput';
import Sidebar from '@/components/Sidebar';
import StatusBadge from '@/components/StatusBadge';
import StatusDropdown from '@/components/StatusDropdown';
import SupportDetailsPopup from '@/components/SupportDetailsPopup';
import Table from '@/components/Table';
import UserBadge from '@/components/UserBadge';
import DownloadIcon from '@/icons/DownloadIcon';
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

const RightHeader = styled.div`
  display: flex;
  gap: 12px;
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const StatusWrapper = styled.div`
  align-self: center;
`;

const SearchWrapper = styled.div`
  width: 160px;
  align-self: center;
  @media screen and (max-width: 1080px) {
    width: 100%;
  }
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

const TableScrollContainer = styled.div`
  overflow: auto;
  flex: 1;
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 16px 24px;
  border-radius: 24px 24px 0 0;
  background: ${colors.background.light};
  border: 1px solid ${colors.border.light};
  flex-shrink: 0;
  & > button {
    margin-left: auto;
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
  margin: 8px 0;
  & > button {
    width: 100%;
  }
`;
const MobileHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: ${colors.background.white};
  padding: 12px 16px;

  @media screen and (max-width: 1080px) {
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    width: 100vw;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const DateStatus = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DownloadStatus = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 0 0;
`;

const DownloadWrapper = styled.div`
  & button {
    display: flex;
    gap: 4px !important;
    width: 160px;
    align-self: center;
    box-shadow:
      0px 1px 2px 0px rgba(16, 24, 40, 0.05),
      0px -2px 0px 0px rgba(16, 24, 40, 0.05) inset,
      0px 0px 0px 1px rgba(16, 24, 40, 0.18) inset;
    border-radius: 8px;
    font-weight: 500;
    z-index: 0;
  }
  @media screen and (max-width: 1080px) {
    & button {
      width: 100%;
    }
  }
`;

const SupportScreen = () => {
  const tSupport = useTranslations('Support');
  const rowKeys = ['row1', 'row2'];
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isDetailsPopupOpen, setIsDetailsPopupOpen] = useState(false);

  const TOTAL_ROWS = 19;

  const getStatusVariant = (statusText: string): 'paid' | 'unpaid' | 'pending' => {
    const lowerStatus = statusText.toLowerCase();

    if (lowerStatus === 'paid' || lowerStatus.includes('გადახდილი')) return 'paid';
    if (lowerStatus === 'unpaid' || lowerStatus.includes('გადაუხდელი')) return 'unpaid';

    return 'pending';
  };

  const buildBaseRow = (idx: number) => {
    const key = rowKeys[idx % rowKeys.length];
    return [
      <FirstCol key={`col1-${idx}`}>{tSupport(`${key}.col1`)}</FirstCol>,
      tSupport(`${key}.col2`),
      tSupport(`${key}.col3`),
      tSupport(`${key}.col4`),
      <StatusBadge
        key={`col5-${idx}`}
        variant={getStatusVariant(tSupport(`${key}.col5`))}
        label={tSupport(`${key}.col5`)}
      />,
      tSupport(`${key}.col6`),
      tSupport(`${key}.col7`),
    ];
  };
  const tableData: React.ReactNode[][] = Array.from({ length: TOTAL_ROWS }, (_, idx) => {
    return buildBaseRow(idx);
  });

  const handleRowClick = () => {
    setIsDetailsPopupOpen(true);
  };

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
              <PageTitle title={tSupport('title')} desktopVariant='small' />
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

            <MobileContainer>
              <MobileButtonWrapper>
                <StyledButton
                  variant='primary'
                  size='xs'
                  leftIcon={<PlusTranspIcon color='#662D91' />}
                  onClick={() => setIsPopupOpen(true)}
                >
                  {tSupport('button')}
                </StyledButton>
              </MobileButtonWrapper>
              <MobileHeader>
                <SearchWrapper>
                  <SearchInput size='md' placeholder={''} mode='icon' leftIcon={true} />
                </SearchWrapper>
                <DateStatus>
                  <DatePicker />
                  <StatusWrapper>
                    <StatusDropdown value={''} onChange={v => v} placeholderColor='secondary' />
                  </StatusWrapper>
                </DateStatus>
              </MobileHeader>
              <DownloadStatus>
                <DownloadWrapper>
                  <Dropdown
                    value={''}
                    onChange={v => v}
                    placeholder={tSupport('dropdownPlaceholder')}
                    items={[]}
                    inputPadding='12px 16px'
                    label={''}
                  />
                </DownloadWrapper>
                <DownloadWrapper>
                  <Button variant='tertiary' size='xs'>
                    <DownloadIcon />
                    {tSupport('downloadButton')}
                  </Button>
                </DownloadWrapper>
              </DownloadStatus>
            </MobileContainer>

            <TableWrapper>
              <DesktopContainer>
                <TableHeader>
                  <DatePicker />
                  <RightHeader>
                    <StatusWrapper>
                      <Dropdown
                        value={''}
                        onChange={v => v}
                        placeholderColor='secondary'
                        items={[]}
                        placeholder={tSupport('dropdownPlaceholder')}
                        label={''}
                        inputPadding='12px 16px'
                      />
                    </StatusWrapper>
                    <Button variant='tertiary' size='xs'>
                      <DownloadIcon />
                      {tSupport('downloadButton')}
                    </Button>
                    <SearchWrapper>
                      <SearchInput
                        size='xs'
                        placeholder={tSupport('searchPlaceholder')}
                        mode='icon'
                        leftIcon={true}
                      />
                    </SearchWrapper>
                    <StyledButton
                      variant='primary'
                      size='xsSearch'
                      leftIcon={<PlusTranspIcon color='#662D91' />}
                      onClick={() => setIsPopupOpen(true)}
                    >
                      {tSupport('button')}
                    </StyledButton>
                  </RightHeader>
                </TableHeader>
              </DesktopContainer>

              <TableScrollContainer>
                <Table
                  cornerStyle='bottom'
                  rows={tableData.length}
                  columns={7}
                  details={tableData}
                  showArrowsIcon={true}
                  showCheckbox={false}
                  showRightArrow={false}
                  showEditIcon={false}
                  showTrashIcon={false}
                  selectedRows={selectedRows}
                  onRowSelect={(i, sel) => {
                    setSelectedRows(prev => (sel ? [...prev, i] : prev.filter(r => r !== i)));
                  }}
                  onRowClick={handleRowClick}
                  columnTitles={[
                    tSupport('table.col1'),
                    tSupport('table.col2'),
                    tSupport('table.col3'),
                    tSupport('table.col4'),
                    tSupport('table.col5'),
                    tSupport('table.col6'),
                    tSupport('table.col7'),
                  ]}
                  mobileVariant='support'
                />
              </TableScrollContainer>
            </TableWrapper>
          </RightContent>
        </MainContent>
      </DashboardContainer>
      <NewRequestPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      <SupportDetailsPopup
        isOpen={isDetailsPopupOpen}
        onClose={() => setIsDetailsPopupOpen(false)}
      />
    </>
  );
};

export default SupportScreen;
