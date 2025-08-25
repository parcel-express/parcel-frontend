'use client';

import {useTranslations} from 'next-intl';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
  color: #333;
`;

const Description = styled.p`
  font-size: 1.5rem;
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
`;

const NavLink = styled.a`
  padding: 0.75rem 1.5rem;
  background-color: #0070f3;
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #0051a2;
  }
`;

export default function Home() {
  const t = useTranslations('HomePage');
  const navT = useTranslations('Navigation');
  
  return (
    <Container>
      <Title>{t('title')}</Title>
      <Description>{t('description')}</Description>
      
      <Navigation>
        <NavLink href="#">{navT('home')}</NavLink>
        <NavLink href="#">{navT('about')}</NavLink>
        <NavLink href="#">{navT('services')}</NavLink>
        <NavLink href="#">{navT('contact')}</NavLink>
      </Navigation>
    </Container>
  );
}
