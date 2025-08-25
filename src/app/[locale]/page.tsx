'use client';

import { useTranslations } from 'next-intl';
import styled from 'styled-components';

import { Button, Heading1, BodyLarge } from '../../components';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const Title = styled(Heading1)`
  margin-bottom: 1rem;
  text-align: center;
`;

const Description = styled(BodyLarge)`
  text-align: center;
  color: #535862;
  margin-bottom: 2rem;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
`;

export default function Home() {
  const t = useTranslations('HomePage');
  const navT = useTranslations('Navigation');

  return (
    <Container>
      <Title>{t('title')}</Title>
      <Description>{t('description')}</Description>

      <Navigation>
        <Button variant='primary' size='md'>
          {navT('home')}
        </Button>
        <Button variant='secondary' size='md'>
          {navT('about')}
        </Button>
        <Button variant='tertiary' size='md'>
          {navT('services')}
        </Button>
        <Button variant='disabled' size='md' disabled>
          {navT('contact')}
        </Button>
      </Navigation>
    </Container>
  );
}
