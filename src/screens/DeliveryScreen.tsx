'use client';
import { useTranslations } from 'next-intl';
import React from 'react';
import styled from 'styled-components';

import Container from '@/components/Container';
import Dropdown from '@/components/Dropdown';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import { DesktopContainer, MobileContainer } from '@/components/Responsive';
import SearchInput from '@/components/SearchInput';
import Table from '@/components/Table';

type DropdownItem = {
  label: string;
  value: string;
};

type DeliveryItem = {
  city: string;
  schedule: string;
};

const DropdownContainer = styled.div`
  max-width: 576px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 76px 0 136px 0;
  @media (max-width: 1080px) {
    padding: 36px 0 80px 0;
  }
`;

const Title = styled.div`
  margin-bottom: 41px;
  @media (max-width: 1080px) {
    margin-bottom: 20px;
  }
`;

const TableContainer = styled.div`
  margin-top: 13px;
  @media (max-width: 1080px) {
    margin-top: 20px;
  }
`;

function DeliveryScreen() {
  const [selectedDropdown, setSelectedDropdown] = React.useState<string>('');
  const tDelivery = useTranslations('Delivery');

  const dropdownItems = tDelivery.raw('Dropdown.items') as DropdownItem[];
  const deliveryItems = tDelivery.raw('Items') as DeliveryItem[];

  const deliveryTableDetails = React.useMemo(
    () => deliveryItems.map(i => [i.city, i.schedule]),
    [deliveryItems]
  );
  return (
    <>
      <Header />
      <Container>
        <MainContainer>
          <Title>
            <PageTitle title={tDelivery('title')} desktopVariant='large'></PageTitle>
          </Title>
          <DesktopContainer>
            <DropdownContainer>
              <Dropdown
                value={selectedDropdown}
                onChange={value => {
                  setSelectedDropdown(value);
                }}
                placeholder={tDelivery('placeholder')}
                label=''
                items={dropdownItems}
              />
            </DropdownContainer>
          </DesktopContainer>
          <MobileContainer>
            <SearchInput
              size='xs'
              placeholder={tDelivery('placeholder')}
              mode='icon'
              leftIcon={true}
            />
          </MobileContainer>
          <TableContainer>
            <Table
              details={deliveryTableDetails}
              mobileShowTitles={false}
              columns={2}
              columnTitles={[tDelivery('Table.title1'), tDelivery('Table.title2')]}
            />
          </TableContainer>
        </MainContainer>
      </Container>
      <Footer />
    </>
  );
}

export default DeliveryScreen;
