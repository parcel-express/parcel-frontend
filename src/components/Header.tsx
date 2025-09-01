'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { DesktopContainer, MobileContainer } from '@/components/Responsive';

import Button from './Button';
import Container from './Container';

const LogoImage = styled(Image)`
  object-fit: contain;
`;

const MainHeader = styled.header`
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid var(--Colors-Border-border-primary, #d5d7da);
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  overflow: visible;
`;

const NavList = styled.ul`
  display: flex;
  gap: 34px;
  :hover {
    font-weight: 700;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 9px;
  overflow: visible;
`;

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled(Button)`
  width: 52px;
  height: 52px;
  margin-bottom: 5px;
`;

const DropdownMenu = styled.div`
  background-color: #fff;
  position: absolute;
  border-radius: 8px;
  border: 1px solid #d5d7da;
  width: 52px;
  padding: 5px;
`;

const DropdownItem = styled.button`
  border: none;
  background-color: #fff;
  width: 100%;
  height: 41px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #d9d9d9;
  }
`;

const Header = () => {
  const t = useTranslations('Navigation');
  const tHeader = useTranslations('Header');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'ka';
  const localeLabels: Record<string, string> = {
    ka: 'GEO',
    en: 'ENG',
    ru: 'RUS',
  };

  function handleLanguageChange(locale: string) {
    router.push(`/${locale}`);
  }
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <MainHeader>
      <Container>
        <HeaderContainer>
          <DesktopContainer>
            <LogoImage src='/images/header/logo.png' alt='logo' width={84} height={50} />
          </DesktopContainer>
          <MobileContainer>
            <Image src='/images/header/logo.png' alt='logo' width={59} height={35} />
          </MobileContainer>
          <DesktopContainer>
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
          </DesktopContainer>
          <DesktopContainer>
            <Buttons>
              <Button size='xs' type='button' variant='secondary'>
                <Image src='/images/header/calculator.png' alt='logo' width={24} height={24} />
              </Button>
              <Button size='xs' type='button' variant='secondary'>
                <Image src='/images/header/bell.png' alt='logo' width={24} height={24} />
              </Button>
              <Button size='md' type='button' variant='primary'>
                {tHeader('login')}
              </Button>
              <DropdownWrapper ref={dropdownRef}>
                <DropdownButton
                  size='xs'
                  type='button'
                  variant='secondary'
                  onClick={() => setDropdownOpen(open => !open)}
                >
                  {localeLabels[currentLocale] || 'GEO'}
                </DropdownButton>
                {dropdownOpen && (
                  <DropdownMenu>
                    {Object.entries(localeLabels)
                      .filter(([locale]) => locale !== currentLocale)
                      .map(([locale, label]) => (
                        <DropdownItem
                          key={locale}
                          onClick={() => {
                            setDropdownOpen(false);
                            handleLanguageChange(locale);
                          }}
                        >
                          {label}
                        </DropdownItem>
                      ))}
                  </DropdownMenu>
                )}
              </DropdownWrapper>
            </Buttons>
          </DesktopContainer>
          <MobileContainer>
            <Image src='/images/header/burgerMenu.png' alt='logo' width={24} height={24} />
          </MobileContainer>
        </HeaderContainer>
      </Container>
    </MainHeader>
  );
};

export default Header;
