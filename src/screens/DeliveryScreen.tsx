'use client';
import { useTranslations } from 'next-intl';
import React from 'react';
import styled from 'styled-components';

import { Typography } from '@/components';
import Container from '@/components/Container';
import Dropdown from '@/components/Dropdown';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const DropdownContainer = styled.div`
  max-width: 576px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 76px 0 136px 0;
`;

const Title = styled.div`
  margin-bottom: 41px;
`;

function DeliveryScreen() {
  const [selectedDropdown, setSelectedDropdown] = React.useState<string>('');
  const tDelivery = useTranslations('Delivery');

  return (
    <>
      <Header />
      <Container>
        <MainContainer>
          <Title>
            <Typography variant='display-lg' weight='bold'>
              {tDelivery('title')}
            </Typography>
          </Title>
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
        </MainContainer>
      </Container>
      <Footer />
    </>
  );
}

export default DeliveryScreen;
