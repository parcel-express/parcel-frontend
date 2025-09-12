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
import Table, { TableDetail } from '@/components/Table';

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

const deliveryItems: TableDetail[] = [
  {
    firstrow: 'თბილისი',
    secondrow: 'ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი, პარასკევი, შაბათი',
  },
  { firstrow: 'ბათუმი', secondrow: 'ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი, პარასკევი' },
  { firstrow: 'ქუთაისი', secondrow: 'ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი' },
  {
    firstrow: 'თბილისი',
    secondrow: 'ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი, პარასკევი, შაბათი',
  },
  { firstrow: 'ბათუმი', secondrow: 'ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი, პარასკევი' },
  { firstrow: 'ქუთაისი', secondrow: 'ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი' },
  {
    firstrow: 'თბილისი',
    secondrow: 'ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი, პარასკევი, შაბათი',
  },
  { firstrow: 'ბათუმი', secondrow: 'ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი, პარასკევი' },
  { firstrow: 'ქუთაისი', secondrow: 'ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი' },
  {
    firstrow: 'თბილისი',
    secondrow: 'ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი, პარასკევი, შაბათი',
  },
  { firstrow: 'ბათუმი', secondrow: 'ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი, პარასკევი' },
  { firstrow: 'ქუთაისი', secondrow: 'ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი' },
  {
    firstrow: 'თბილისი',
    secondrow: 'ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი, პარასკევი, შაბათი',
  },
  { firstrow: 'ბათუმი', secondrow: 'ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი, პარასკევი' },
  { firstrow: 'ქუთაისი', secondrow: 'ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი' },
  {
    firstrow: 'თბილისი',
    secondrow: 'ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი, პარასკევი, შაბათი',
  },
  { firstrow: 'ბათუმი', secondrow: 'ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი, პარასკევი' },
  { firstrow: 'ქუთაისი', secondrow: 'ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი' },
  {
    firstrow: 'თბილისი',
    secondrow: 'ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი, პარასკევი, შაბათი',
  },
  { firstrow: 'ბათუმი', secondrow: 'ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი, პარასკევი' },
  { firstrow: 'ქუთაისი', secondrow: 'ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი' },
  {
    firstrow: 'თბილისი',
    secondrow: 'ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი, პარასკევი, შაბათი',
  },
  { firstrow: 'ბათუმი', secondrow: 'ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი, პარასკევი' },
  { firstrow: 'ქუთაისი', secondrow: 'ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი' },
];

function DeliveryScreen() {
  const [selectedDropdown, setSelectedDropdown] = React.useState<string>('');
  const tDelivery = useTranslations('Delivery');

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
                placeholder='აირჩიე ქალაქი'
                label=''
                items={[
                  { label: 'თბილისი', value: '1' },
                  { label: 'ბათუმი', value: '2' },
                  { label: 'ქუთაისი', value: '3' },
                  { label: 'რუსთავი', value: '4' },
                  { label: 'გორი', value: '5' },
                  { label: 'ზუგდიდი', value: '6' },
                ]}
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
              details={deliveryItems}
              rows={19}
              titles={{ firstTitle: 'ქალაქი', secondTitle: 'ჩაბარება / აღება' }}
            />
          </TableContainer>
        </MainContainer>
      </Container>
      <Footer />
    </>
  );
}

export default DeliveryScreen;
