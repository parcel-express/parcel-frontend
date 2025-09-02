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

import { colors } from '../styles/colors';

import Button from './Button';
import Container from './Container';

const MainHeader = styled.header`
  width: 100%;
  background-color: ${colors.background.white};
  border-bottom: 1px solid ${colors.border.primary};
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
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: inherit;

  &:hover {
    color: ${colors.brand.purple};
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
  background-color: ${colors.background.white};
  position: absolute;
  border-radius: 8px;
  border: 1px solid ${colors.border.primary};
  width: 52px;
  padding: 5px;
  top: 100%;
  margin-top: 5px;
`;

const MobileDropdownMenu = styled.div`
  background-color: ${colors.background.white};
  position: absolute;
  border-radius: 8px;
  border: 1px solid ${colors.border.primary};
  width: 52px;
  padding: 5px;
  bottom: 100%;
  margin-bottom: 5px;
`;

const DropdownItem = styled.button`
  border: none;
  background-color: ${colors.background.white};
  width: 100%;
  height: 41px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  color: ${colors.text.black};
  &:hover {
    background-color: ${colors.state.hover.medium};
  }
  &:focus {
    outline: 2px solid ${colors.state.focus.outline};
    outline-offset: 2px;
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
  background: ${colors.overlay.dark};
`;

const MobileMenuContainer = styled.div<{ $isOpen: boolean }>`
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${colors.background.white};
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
  color: ${colors.text.black};
  text-decoration: none;
  border-radius: 4px;
  &:hover {
    background: ${colors.state.hover.light};
  }
  &:focus {
    outline: 2px solid ${colors.state.focus.outline};
    outline-offset: 2px;
  }
`;

const Login = styled.div`
  margin: 0 20.5px;
  border-top: 1px solid ${colors.border.light};
  border-bottom: 1px solid ${colors.border.light};
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
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);
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
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target as Node)
      ) {
        setDesktopDropdownOpen(false);
      }
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target as Node)) {
        setMobileDropdownOpen(false);
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
              <NavList role='navigation' aria-label='Main navigation'>
                <li>
                  <NavLink href='/'>{t('home')}</NavLink>
                </li>
                <li>
                  <NavLink href='/order'>{t('order')}</NavLink>
                </li>
                <li>
                  <NavLink href='/delivery'>{t('delivery')}</NavLink>
                </li>
                <li>
                  <NavLink href='/terms'>{t('terms')}</NavLink>
                </li>
                <li>
                  <NavLink href='/price'>{t('price')}</NavLink>
                </li>
                <li>
                  <NavLink href='/contact'>{t('contact')}</NavLink>
                </li>
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
                <DropdownWrapper ref={desktopDropdownRef}>
                  <DropdownButton
                    size='xs'
                    type='button'
                    variant='secondary'
                    onClick={() => setDesktopDropdownOpen(open => !open)}
                  >
                    {localeLabels[currentLocale] || 'GEO'}
                  </DropdownButton>
                  {desktopDropdownOpen && (
                    <DropdownMenu>
                      {Object.entries(localeLabels)
                        .filter(([locale]) => locale !== currentLocale)
                        .map(([locale, label]) => (
                          <DropdownItem
                            key={locale}
                            onClick={() => {
                              setDesktopDropdownOpen(false);
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
            <DropdownWrapper ref={mobileDropdownRef}>
              <DropdownButton
                size='xs'
                type='button'
                variant='secondary'
                onClick={() => setMobileDropdownOpen(open => !open)}
              >
                {localeLabels[currentLocale] || 'GEO'}
              </DropdownButton>
              {mobileDropdownOpen && (
                <MobileDropdownMenu>
                  {Object.entries(localeLabels)
                    .filter(([locale]) => locale !== currentLocale)
                    .map(([locale, label]) => (
                      <DropdownItem
                        key={locale}
                        onClick={() => {
                          setMobileDropdownOpen(false);
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
