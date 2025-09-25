'use client';
import React from 'react';
import styled from 'styled-components';

import Container from '@/components/Container';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import StatusDropdown from '@/components/StatusDropdown';

const Wrapper = styled.div`
  margin: 100px 0 400px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StatusWrapper = styled.div`
  width: 115px;
`;

const OrdersScreen = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <StatusWrapper>
            <StatusDropdown value='' onChange={() => {}} />
          </StatusWrapper>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default OrdersScreen;
