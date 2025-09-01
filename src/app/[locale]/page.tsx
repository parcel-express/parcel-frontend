'use client';

import Image from 'next/image';
import styled from 'styled-components';

import Container from '@/components/Container';

const LogoImage = styled(Image)`
  object-fit: contain;
`;

export default function Page() {
  return (
    <Container>
      <LogoImage src='/images/logo.png' alt='logo' width={84} height={84} />
    </Container>
  );
}
