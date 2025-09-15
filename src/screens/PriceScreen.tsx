'use client';
import { useTranslations } from 'next-intl';
import React from 'react';
import styled from 'styled-components';

import { Typography } from '@/components';
import Container from '@/components/Container';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import { DesktopContainer, MobileContainer } from '@/components/Responsive';
import Table from '@/components/Table';
import { colors } from '@/styles/colors';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 72px 0 228px 0;
  @media (max-width: 1080px) {
    padding: 36px 0 80px 0;
    gap: 24px;
  }
`;

const TableSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (max-width: 1080px) {
    gap: 24px;
  }
`;

const PageTitleWrapper = styled.div`
  @media (max-width: 1080px) {
    margin-bottom: 16px;
  }
`;

const MobileCard = styled.div`
  background: #fff;
  border-radius: 12px;
  border: 1px solid ${colors.border.primary};
  margin-top: 24px;
`;

const MobileCardHeader = styled.div`
  padding: 20px 16px 24px 16px;
  border-bottom: 1px solid ${colors.border.light};
`;

const MobileList = styled.ul`
  margin: 0;
  margin: 4px 0 12px 0;
`;

const MobileListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
`;

const thirdColumnTitles = [
  'წონა, კგ (ფაქტობრივი ან მოცულობითი)',
  'ქალაქი',
  'რეგიონი',
  'ფილიალიდან გატანა',
  'ცენტ. ქალაქი',
  'სოფელი',
  'მაღალმთიანი',
  'თბილისის შემოგარენი',
];

const thirdDetailsRow = ['1 კგ - მდე', '12₾', '12₾', '12₾', '12₾', '12₾', '12₾', '12₾'];

const PriceScreen: React.FC = () => {
  const tPrice = useTranslations('Price');
  const mobileShowTitles = true;
  const thirdRows = Array.from({ length: 9 }, () => thirdDetailsRow);

  return (
    <>
      <Header />
      <Container>
        <MainContainer>
          <PageTitleWrapper>
            <PageTitle title={tPrice('title')} />
          </PageTitleWrapper>
          <TableSection>
            <DesktopContainer>
              <Typography variant='display-xs' color='textSecondary' weight='bold'>
                {tPrice('TakeRequest.title')}
              </Typography>
            </DesktopContainer>
            <MobileContainer>
              <Typography variant='text-md' color='textSecondary' weight='bold'>
                {tPrice('TakeRequest.title')}
              </Typography>
            </MobileContainer>
            <Table
              rows={1}
              columns={3}
              columnTitles={['ქალაქი', 'რეგიონი', 'სოფლები, მაღალმთიანი რეგიონი']}
              details={[
                [
                  'ორშ-პარ - 16:00 საათამდე, შაბ - 12:00 საათამდე',
                  'ორშ-პარ - 16:00 საათამდე',
                  'ორშ-პარ - 16:00 საათამდე',
                ],
              ]}
              mobileShowTitles={mobileShowTitles}
            />
          </TableSection>
          <TableSection>
            <DesktopContainer>
              <Typography variant='display-xs' color='textSecondary' weight='bold'>
                {tPrice('Delivery.title')}
              </Typography>
            </DesktopContainer>
            <MobileContainer>
              <Typography variant='text-md' color='textSecondary' weight='bold'>
                {tPrice('Delivery.title')}
              </Typography>
            </MobileContainer>
            <Table
              rows={1}
              columns={3}
              columnTitles={['ქალაქი', 'რეგიონი', 'სოფლები, მაღალმთიანი რეგიონი']}
              details={[['1- 2 სამუშაო დღე', '1- 4 სამუშაო დღე', '1- 4 სამუშაო დღე']]}
              mobileShowTitles={mobileShowTitles}
            />
          </TableSection>
          <TableSection>
            <DesktopContainer>
              <Typography variant='display-xs' color='textSecondary' weight='bold'>
                {tPrice('TakeRequest.title')}
              </Typography>
            </DesktopContainer>

            <DesktopContainer>
              <Table
                rows={thirdRows.length}
                columns={thirdColumnTitles.length}
                columnTitles={thirdColumnTitles}
                details={thirdRows}
                mobileShowTitles={mobileShowTitles}
              />
            </DesktopContainer>

            <MobileContainer>
              <Typography variant='text-md' color='textSecondary' weight='bold'>
                {tPrice('Tariffs.title')}
              </Typography>

              {thirdRows.map((row, rowIdx) => (
                <MobileCard aria-label='price-card-mobile' key={rowIdx}>
                  <MobileCardHeader>
                    <Typography variant='text-xs' color={colors.text.tertiary} weight='medium'>
                      {thirdColumnTitles[0]}
                    </Typography>
                    <Typography weight='bold' variant='text-sm'>
                      {row[0]}
                    </Typography>
                  </MobileCardHeader>

                  <MobileList>
                    {thirdColumnTitles.slice(1).map((label, idx) => (
                      <MobileListItem key={label}>
                        <Typography variant='text-xs' weight='regular' color={colors.text.tertiary}>
                          {label}
                        </Typography>
                        <Typography variant='text-xs' weight='regular' color={colors.text.tertiary}>
                          {row[idx + 1]}
                        </Typography>
                      </MobileListItem>
                    ))}
                  </MobileList>
                </MobileCard>
              ))}
            </MobileContainer>
          </TableSection>
        </MainContainer>
      </Container>
      <Footer />
    </>
  );
};

export default PriceScreen;
