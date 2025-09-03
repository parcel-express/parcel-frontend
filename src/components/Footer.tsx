'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';
import styled from 'styled-components';

import AppStoreIcon from '@/icons/AppStoreIcon';
import FbIcon from '@/icons/FbIcon';
import LinkedinIcon from '@/icons/LinkedinIcon';
import LogoTranspIcon from '@/icons/LogoTranspIcon';
import PlayStoreIcon from '@/icons/PlayStoreIcon';
import XIcon from '@/icons/XIcon';

import { colors } from '../styles/colors';

import Container from './Container';
import { DesktopContainer } from './Responsive';

const MainFooter = styled.footer`
  background: linear-gradient(
    93.55deg,
    ${colors.brand.gradientStart} 21.82%,
    ${colors.brand.gradientEnd} 110.55%
  );
  padding: 64px 0 48px 0;
  @media (max-width: 1080px) {
    padding: 42px 0 32px 0;
  }
`;

const FooterTopContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 0 32px;
  margin-bottom: 64px;
  @media (max-width: 1080px) {
    flex-direction: column;
    margin-bottom: 40px;
    padding: 0;
  }
`;

const NavigationWrapper = styled.nav`
  display: flex;
  gap: 32px;
  color: ${colors.text.light};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  align-items: center;
  cursor: pointer;
  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    margin-bottom: 44px;
  }
`;

const NavigationWrapperLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: ${colors.text.white};
  }
`;

const LogoLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  text-align: left;
`;

const DownloadLinks = styled.div`
  color: ${colors.text.white};
  font-size: 16px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-end;
  cursor: pointer;
`;

const FooterBottomContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 32px 32px 0 32px;
  color: #d6bbfb;
  font-size: 16px;
  line-height: 24px;
  border-top: 1px solid ${colors.border.brand};
  @media (max-width: 1080px) {
    padding: 23px 0 0 0;
  }
`;

const SocialsWrapper = styled.div`
  display: flex;
  gap: 16px;
  cursor: pointer;
`;

const Footer = () => {
  const t = useTranslations('Navigation');
  const tFooter = useTranslations('Footer');
  return (
    <MainFooter>
      <Container>
        <FooterTopContainer>
          <LogoLinks>
            <LogoTranspIcon />
            <NavigationWrapper>
              <NavigationWrapperLink href='/'>{t('home')}</NavigationWrapperLink>
              <NavigationWrapperLink href='/order'>{t('order')}</NavigationWrapperLink>
              <NavigationWrapperLink href='/delivery'>{t('delivery')}</NavigationWrapperLink>
              <NavigationWrapperLink href='/terms'>{t('terms')}</NavigationWrapperLink>
              <NavigationWrapperLink href='/price'>{t('price')}</NavigationWrapperLink>
              <NavigationWrapperLink href='/contact'>{t('contact')}</NavigationWrapperLink>
            </NavigationWrapper>
          </LogoLinks>
          <DownloadLinks>
            <p>{tFooter('download')}</p>
            <Link href='https://www.apple.com/app-store/'>
              <AppStoreIcon />
            </Link>
            <Link href='https://play.google.com/store'>
              <PlayStoreIcon />
            </Link>
          </DownloadLinks>
        </FooterTopContainer>
        <FooterBottomContainer>
          <p>{tFooter('copyright')}</p>
          <DesktopContainer>
            <SocialsWrapper>
              <Link href='https://x.com/'>
                <XIcon />
              </Link>
              <Link href='https://www.linkedin.com/'>
                <LinkedinIcon />
              </Link>
              <Link href='https://www.facebook.com/'>
                <FbIcon />
              </Link>
            </SocialsWrapper>
          </DesktopContainer>
        </FooterBottomContainer>
      </Container>
    </MainFooter>
  );
};

export default Footer;
