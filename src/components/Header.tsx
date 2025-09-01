'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import Container from './Container';

const LogoImage = styled(Image)`
  object-fit: contain;
`;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
  width: 100%;
  border-bottom: 1px solid var(--Colors-Border-border-primary, #d5d7da);
`;

const Nav = styled.nav``;

const NavList = styled.ul`
  display: flex;
  gap: 34px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 9px;
`;

const Header = () => {
  const t = useTranslations('Navigation');
  const tHeader = useTranslations('Header');

  return (
    <Container>
      <HeaderContainer>
        <LogoImage src='/images/logo.png' alt='logo' width={84} height={50} />
        <Nav>
          <NavList>
            <ul>
              <Link href='/'>{t('home')}</Link>
            </ul>
            <ul>
              <Link href='/order'>{t('order')}</Link>
            </ul>
            <ul>
              <Link href='/about'>{t('delivery')}</Link>
            </ul>
            <ul>
              <Link href='/about'>{t('terms')}</Link>
            </ul>
            <ul>
              <Link href='/about'>{t('price')}</Link>
            </ul>
            <ul>
              <Link href='/contact'>{t('contact')}</Link>
            </ul>
          </NavList>
        </Nav>
        <Buttons>
          <Button size='md' type='button' variant='primary'>
            {tHeader('login')}
          </Button>
          <Button size='xs' type='button' variant='secondary'>
            {tHeader('language')}
          </Button>
        </Buttons>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
