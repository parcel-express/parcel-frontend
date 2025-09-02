'use client';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { DesktopContainer, MobileContainer } from '@/components/Responsive';
import BellIcon from '@/icons/BellIcon';
import BurgerMenuIcon from '@/icons/BurgerMenuIcon';
import CalculatorIcon from '@/icons/CalculcatorIcon';
import CloseIcon from '@/icons/CloseIcon';
import LogoIcon from '@/icons/LogoIcon';

import Button from './Button';
import Container from './Container';

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
    text-shadow: 1px 0 black;
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
`;

const DropdownMenu = styled.div`
  background-color: #fff;
  position: absolute;
  border-radius: 8px;
  border: 1px solid #d5d7da;
  width: 52px;
  padding: 5px;
  top: 100%;
  margin-top: 5px;
`;

const MobileDropdownMenu = styled.div`
  background-color: #fff;
  position: absolute;
  border-radius: 8px;
  border: 1px solid #d5d7da;
  width: 52px;
  padding: 5px;
  bottom: 100%;
  margin-bottom: 5px;
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

const MobileMenuOverlay = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
`;

const MobileMenuContainer = styled.div<{ $isOpen: boolean }>`
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  z-index: 1001;
  display: flex;
  flex-direction: column;
`;

const MobileMenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
`;

const MobileNavList = styled.ul`
  list-style: none;
  padding: 0 16px 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const MobileNavLink = styled(Link)`
  display: block;
  font-size: 14px;
  line-height: 24px;
  padding: 10px 12px;
  &:hover {
    background: #f5f5f5;
  }
`;

const Login = styled.div`
  margin: 0 20.5px;
  border-top: 1px solid #e9eaeb;
  border-bottom: 1px solid #e9eaeb;
  padding: 12px 0;
`;

const MobileMenuFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  padding: 0 0 35px 0;
`;

const Header = () => {
  const t = useTranslations('Navigation');
  const tHeader = useTranslations('Header');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    setMobileMenuOpen(false);
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <MainHeader>
        <Container>
          <HeaderContainer>
            <LogoIcon />
            <DesktopContainer>
              <NavList>
                <ul>
                  <Link href='/'>{t('home')}</Link>
                </ul>
                <ul>
                  <Link href='/order'>{t('order')}</Link>
                </ul>
                <ul>
                  <Link href='/delivery'>{t('delivery')}</Link>
                </ul>
                <ul>
                  <Link href='/terms'>{t('terms')}</Link>
                </ul>
                <ul>
                  <Link href='/price'>{t('price')}</Link>
                </ul>
                <ul>
                  <Link href='/contact'>{t('contact')}</Link>
                </ul>
              </NavList>
            </DesktopContainer>
            <DesktopContainer>
              <Buttons>
                <Button size='xs' type='button' variant='secondary'>
                  <CalculatorIcon />
                </Button>
                <Button size='xs' type='button' variant='secondary'>
                  <BellIcon />
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
              <Button onClick={() => setMobileMenuOpen(true)} size='xs' variant='transparent'>
                <BurgerMenuIcon />
              </Button>
            </MobileContainer>
          </HeaderContainer>
        </Container>
      </MainHeader>

      <MobileMenuOverlay $isOpen={mobileMenuOpen} />
      <Container>
        <MobileMenuContainer $isOpen={mobileMenuOpen}>
          <MobileMenuHeader>
            <LogoIcon />
            <Button onClick={() => setMobileMenuOpen(false)} variant='transparent' size='xs'>
              <CloseIcon />
            </Button>
          </MobileMenuHeader>
          <MobileNavList>
            <MobileNavLink href='/' onClick={() => setMobileMenuOpen(false)}>
              {t('home')}
            </MobileNavLink>
            <MobileNavLink href='/order' onClick={() => setMobileMenuOpen(false)}>
              {t('order')}
            </MobileNavLink>
            <MobileNavLink href='/delivery' onClick={() => setMobileMenuOpen(false)}>
              {t('delivery')}
            </MobileNavLink>
            <MobileNavLink href='/terms' onClick={() => setMobileMenuOpen(false)}>
              {t('terms')}
            </MobileNavLink>
            <MobileNavLink href='/price' onClick={() => setMobileMenuOpen(false)}>
              {t('price')}
            </MobileNavLink>
            <MobileNavLink href='/contact' onClick={() => setMobileMenuOpen(false)}>
              {t('contact')}
            </MobileNavLink>
            <MobileNavLink href='/' onClick={() => setMobileMenuOpen(false)}>
              {t('logout')}
            </MobileNavLink>
          </MobileNavList>

          <Login>
            <Button size='lg' variant='primary'>
              {tHeader('login')}
            </Button>
          </Login>

          <MobileMenuFooter>
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
                <MobileDropdownMenu>
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
                </MobileDropdownMenu>
              )}
            </DropdownWrapper>
          </MobileMenuFooter>
        </MobileMenuContainer>
      </Container>
    </>
  );
};

export default Header;
