'use client';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import styled from 'styled-components';

import DashboardContainer from '@/components/DashboardContainer';
import DatePicker from '@/components/DatePicker';
import Header from '@/components/Header';
import InvoicesDetailPopup from '@/components/InvoicesDetailPopup';
import PageTitle from '@/components/PageTitle';
import { DesktopContainer, MobileContainer } from '@/components/Responsive';
import SearchInput from '@/components/SearchInput';
import Sidebar from '@/components/Sidebar';
import StatusBadge, { StatusVariant } from '@/components/StatusBadge';
import StatusDropdown, { StatusValue } from '@/components/StatusDropdown';
import Table from '@/components/Table';
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

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  padding: 16px 24px;
  border-radius: 24px 24px 0 0;
  background: ${colors.background.light};
  border: 1px solid ${colors.border.light};
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

const StatusWrapper = styled.div`
  max-width: 115px;
  align-self: center;
`;

const SearchWrapper = styled.div`
  width: 296px;
  align-self: center;
  @media screen and (max-width: 1080px) {
    width: 100%;
    margin: 8px 0 12px 0;
  }
`;

const UserWrapper = styled.div`
  margin-left: auto;
  width: 296px;
`;

const FirstCol = styled.span`
  font-weight: 500;
`;

const DateStatus = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  @media screen and (max-width: 1080px) {
    margin-bottom: 28px;
    gap: 0;
  }
`;

const InvoicesScreen = () => {
  const tInvoices = useTranslations('Invoices');
  const rowKeys = ['row1', 'row2'];
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [status, setStatus] = useState<StatusValue | ''>('');
  const [openInvoiceDetail, setOpenInvoiceDetail] = useState<number | null>(null);

  const variants: StatusVariant[] = ['paid', 'unpaid'];
  const TOTAL_ROWS = 19;

  const buildBaseRow = (idx: number) => {
    const key = rowKeys[idx % rowKeys.length];
    return [
      <FirstCol key={`col1-${idx}`}>{tInvoices(`${key}.col1`)}</FirstCol>,
      tInvoices(`${key}.col2`),
      tInvoices(`${key}.col3`),
      tInvoices(`${key}.col4`),
    ];
  };

  const tableData: React.ReactNode[][] = Array.from({ length: TOTAL_ROWS }, (_, idx) => {
    const variant = variants[idx % variants.length];
    return [
      ...buildBaseRow(idx),
      <StatusBadge
        key={`status-${idx}`}
        variant={variant as StatusVariant}
        label={tInvoices(`statuses.${variant}`)}
      />,
    ];
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
              <PageTitle title={tInvoices('title')} desktopVariant='small' />
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
                  <DatePicker />
                  <RightHeader>
                    <StatusWrapper>
                      <StatusDropdown
                        value={status}
                        onChange={v => setStatus(v)}
                        placeholderColor='secondary'
                      />
                    </StatusWrapper>
                    <SearchWrapper>
                      <SearchInput
                        size='md'
                        placeholder={tInvoices('searchPlaceholder')}
                        mode='icon'
                        leftIcon={true}
                      />
                    </SearchWrapper>
                  </RightHeader>
                </TableHeader>
              </DesktopContainer>
              <MobileContainer>
                <SearchWrapper>
                  <SearchInput
                    size='md'
                    placeholder={tInvoices('searchPlaceholder')}
                    mode='icon'
                    leftIcon={true}
                  />
                </SearchWrapper>
                <DateStatus>
                  <DatePicker />
                  <StatusWrapper>
                    <StatusDropdown
                      value={status}
                      onChange={v => setStatus(v)}
                      placeholderColor='secondary'
                    />
                  </StatusWrapper>
                </DateStatus>
              </MobileContainer>
              <Table
                cornerStyle='bottom'
                rows={tableData.length}
                columns={5}
                details={tableData}
                showArrowsIcon={true}
                showCheckbox={false}
                showRightArrow={true}
                selectedRows={selectedRows}
                onRowSelect={(i, sel) => {
                  setSelectedRows(prev => (sel ? [...prev, i] : prev.filter(r => r !== i)));
                }}
                columnTitles={[
                  tInvoices('table.col1'),
                  tInvoices('table.col2'),
                  tInvoices('table.col3'),
                  tInvoices('table.col4'),
                  tInvoices('table.col5'),
                ]}
                mobileVariant='invoices'
                onRightArrowClick={(rowIndex: number) => setOpenInvoiceDetail(rowIndex)}
                onRowClick={(rowIndex: number) => setOpenInvoiceDetail(rowIndex)}
              />
            </TableWrapper>
          </RightContent>
        </MainContent>
      </DashboardContainer>
      {openInvoiceDetail !== null && (
        <InvoicesDetailPopup
          onClose={() => setOpenInvoiceDetail(null)}
          invoiceIndex={openInvoiceDetail}
        />
      )}
    </>
  );
};

export default InvoicesScreen;
