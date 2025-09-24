'use client';
import React from 'react';
import styled from 'styled-components';

import Container from '@/components/Container';
import DatePicker from '@/components/DatePicker';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Wrapper = styled.div`
  margin: 100px 0 400px 0;
`;
const OrdersScreen = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <DatePicker />
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default OrdersScreen;
