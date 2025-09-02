'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';
import styled from 'styled-components';

import Container from './Container';
import { DesktopContainer } from './Responsive';

const MainFooter = styled.footer`
  background: linear-gradient(93.55deg, #662d91 21.82%, #302e9c 110.55%);
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

const LogoImage = styled.img`
  width: 84px;
  height: 50px;
`;

const NavigationWrapper = styled.nav`
  display: flex;
  gap: 32px;
  color: #e9d7fe;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  align-items: center;
  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    margin-bottom: 44px;
  }
`;

const LogoLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  text-align: left;
`;

const DownloadLinks = styled.div`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FooterBottomContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 32px 32px 0 32px;
  color: #d6bbfb;
  font-size: 16px;
  line-height: 24px;
  border-top: 1px solid var(--Colors-Border-border-brand_alt, #7f56d9);
  @media (max-width: 1080px) {
    padding: 23px 0 0 0;
  }
`;

const SocialsWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const Footer = () => {
  const t = useTranslations('Navigation');
  const tFooter = useTranslations('Footer');
  return (
    <MainFooter>
      <Container>
        <FooterTopContainer>
          <LogoLinks>
            <LogoImage src='/images/footer/logoTransp.png' alt='logo' width={84} height={50} />
            <NavigationWrapper>
              <Link href='/home'>{t('home')}</Link>
              <Link href='/order'>{t('order')}</Link>
              <Link href='/delivery'>{t('delivery')}</Link>
              <Link href='/terms'>{t('terms')}</Link>
              <Link href='/price'>{t('price')}</Link>
              <Link href='/contact'>{t('contact')}</Link>
            </NavigationWrapper>
          </LogoLinks>
          <DownloadLinks>
            <p>{tFooter('download')}</p>
            <Image src='/images/footer/appstore.png' alt='appstore' width={134} height={40} />
            <Image src='/images/footer/playstore.png' alt='playstore' width={134} height={40} />
          </DownloadLinks>
        </FooterTopContainer>
        <FooterBottomContainer>
          <p>{tFooter('copyright')}</p>
          <DesktopContainer>
            <SocialsWrapper>
              <Image src='/images/footer/x.png' alt='x' width={24} height={24} />
              <Image src='/images/footer/linkedin.png' alt='linkedin' width={24} height={24} />
              <Image src='/images/footer/fb.png' alt='facebook' width={24} height={24} />
            </SocialsWrapper>
          </DesktopContainer>
        </FooterBottomContainer>
      </Container>
    </MainFooter>
  );
};

export default Footer;
