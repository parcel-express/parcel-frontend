'use client';
import React from 'react';
import styled from 'styled-components';

import Container from '@/components/Container';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const MainContent = styled.div`
  display: Flex;
  padding: 28px 0 0 0;
`;

const OrdersScreen = () => {
  return (
    <>
      <Header />
      <Container>
        <MainContent>
          <Sidebar />
        </MainContent>
      </Container>
      <Footer />
    </>
  );
};

export default OrdersScreen;
