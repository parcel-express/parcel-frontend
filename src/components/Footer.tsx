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
import Typography from './Typography';

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
              <Typography variant='text-md' color={colors.text.light} weight='semibold'>
                <NavigationWrapperLink href='/'>{t('home')}</NavigationWrapperLink>
              </Typography>
              <Typography variant='text-md' color={colors.text.light} weight='semibold'>
                <NavigationWrapperLink href='/order'>{t('order')}</NavigationWrapperLink>
              </Typography>
              <Typography variant='text-md' color={colors.text.light} weight='semibold'>
                <NavigationWrapperLink href='/delivery'>{t('delivery')}</NavigationWrapperLink>
              </Typography>
              <Typography variant='text-md' color={colors.text.light} weight='semibold'>
                <NavigationWrapperLink href='/terms'>{t('terms')}</NavigationWrapperLink>
              </Typography>
              <Typography variant='text-md' color={colors.text.light} weight='semibold'>
                <NavigationWrapperLink href='/price'>{t('price')}</NavigationWrapperLink>
              </Typography>
              <Typography variant='text-md' color={colors.text.light} weight='semibold'>
                <NavigationWrapperLink href='/contact'>{t('contact')}</NavigationWrapperLink>
              </Typography>
            </NavigationWrapper>
          </LogoLinks>
          <DownloadLinks>
            <Typography variant='text-md' color={colors.text.white} weight='medium'>
              {tFooter('download')}
            </Typography>
            <Link href='https://www.apple.com/app-store/' aria-label='Download on the App Store'>
              <AppStoreIcon />
            </Link>
            <Link href='https://play.google.com/store' aria-label='Download on the Play Store'>
              <PlayStoreIcon />
            </Link>
          </DownloadLinks>
        </FooterTopContainer>
        <FooterBottomContainer>
          <Typography variant='text-md' color={colors.text.light} weight='regular'>
            {tFooter('copyright')}
          </Typography>
          <DesktopContainer>
            <SocialsWrapper>
              <Link href='https://x.com/' aria-label='Visit our Twitter profile'>
                <XIcon />
              </Link>
              <Link href='https://www.linkedin.com/' aria-label='Visit our LinkedIn profile'>
                <LinkedinIcon />
              </Link>
              <Link href='https://www.facebook.com/' aria-label='Visit our Facebook profile'>
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
