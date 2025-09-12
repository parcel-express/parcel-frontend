'use client';
import { useTranslations } from 'next-intl';
import React from 'react';
import styled from 'styled-components';

import { Typography } from '@/components';
import Container from '@/components/Container';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import Table from '@/components/Table';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 72px 0 228px 0;
  @media (max-width: 1080px) {
    padding: 36px 0 80px 0;
  }
`;

const TableSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const PriceScreen: React.FC = () => {
  const tPrice = useTranslations('Price');
  return (
    <>
      <Header />
      <Container>
        <MainContainer>
          <Typography weight='bold' variant='title-md'>
            <PageTitle title={tPrice('title')} />
          </Typography>
          <TableSection>
            <Typography variant='display-xs' color='textSecondary' weight='bold'>
              {tPrice('TakeRequest.title')}
            </Typography>
            <Table
              rows={1}
              titles={{
                firstTitle: 'ქალაქი',
                secondTitle: 'რეგიონი',
              }}
            />
          </TableSection>
          <TableSection>
            <Typography variant='display-xs' color='textSecondary' weight='bold'>
              {tPrice('TakeRequest.title')}
            </Typography>
            <Table
              rows={1}
              titles={{
                firstTitle: 'ქალაქი',
                secondTitle: 'რეგიონი',
              }}
            />
          </TableSection>
          <TableSection>
            <Typography variant='display-xs' color='textSecondary' weight='bold'>
              {tPrice('TakeRequest.title')}
            </Typography>
            <Table
              rows={1}
              titles={{
                firstTitle: 'ქალაქი',
                secondTitle: 'რეგიონი',
              }}
            />
          </TableSection>
        </MainContainer>
      </Container>
      <Footer />
    </>
  );
};

export default PriceScreen;
