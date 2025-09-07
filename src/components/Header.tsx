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
import Typography from './Typography';

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
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: inherit;
  &:hover {
    color: ${colors.brand.primary};
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
  z-index: 3;
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
  padding: 10px 12px;
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
  const tHeader = useTranslations('Header');
  const tNavigation = useTranslations('Navigation');
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
              <nav aria-label='Main navigation'>
                <NavList>
                  <li>
                    <Typography variant='text-sm' color={colors.text.black}>
                      <NavLink href='/'>{tNavigation('home')}</NavLink>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='text-sm' color={colors.text.black}>
                      <NavLink href='/order'>{tNavigation('order')}</NavLink>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='text-sm' color={colors.text.black}>
                      <NavLink href='/delivery'>{tNavigation('delivery')}</NavLink>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='text-sm' color={colors.text.black}>
                      <NavLink href='/terms'>{tNavigation('terms')}</NavLink>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='text-sm' color={colors.text.black}>
                      <NavLink href='/price'>{tNavigation('price')}</NavLink>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='text-sm' color={colors.text.black}>
                      <NavLink href='/contact'>{tNavigation('contact')}</NavLink>
                    </Typography>
                  </li>
                </NavList>
              </nav>
            </DesktopContainer>
            <DesktopContainer>
              <Buttons>
                <Button size='xs' type='button' variant='secondary' aria-label='Open calculator'>
                  <CalculatorIcon />
                </Button>
                <Button size='xs' type='button' variant='secondary' aria-label='View notifications'>
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
                    aria-label='Change language'
                  >
                    <Typography variant='text-sm' color={colors.text.black} weight='bold'>
                      {localeLabels[currentLocale] || 'GEO'}
                    </Typography>
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
                            aria-label={`Switch to ${label}`}
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
              <Button
                onClick={() => setMobileMenuOpen(true)}
                size='xs'
                variant='transparent'
                aria-label='Open menu'
              >
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
            <Button
              onClick={() => setMobileMenuOpen(false)}
              variant='transparent'
              size='xs'
              aria-label='Close menu'
            >
              <CloseIcon />
            </Button>
          </MobileMenuHeader>
          <MobileNavList>
            <li>
              <Typography variant='text-sm' color={colors.text.black}>
                <MobileNavLink href='/' onClick={() => setMobileMenuOpen(false)}>
                  {tNavigation('home')}
                </MobileNavLink>
              </Typography>
            </li>
            <li>
              <Typography variant='text-sm' color={colors.text.black}>
                <MobileNavLink href='/order' onClick={() => setMobileMenuOpen(false)}>
                  {tNavigation('order')}
                </MobileNavLink>
              </Typography>
            </li>
            <li>
              <Typography variant='text-sm' color={colors.text.black}>
                <MobileNavLink href='/delivery' onClick={() => setMobileMenuOpen(false)}>
                  {tNavigation('delivery')}
                </MobileNavLink>
              </Typography>
            </li>
            <li>
              <Typography variant='text-sm' color={colors.text.black}>
                <MobileNavLink href='/terms' onClick={() => setMobileMenuOpen(false)}>
                  {tNavigation('terms')}
                </MobileNavLink>
              </Typography>
            </li>
            <li>
              <Typography variant='text-sm' color={colors.text.black}>
                <MobileNavLink href='/price' onClick={() => setMobileMenuOpen(false)}>
                  {tNavigation('price')}
                </MobileNavLink>
              </Typography>
            </li>
            <li>
              <Typography variant='text-sm' color={colors.text.black}>
                <MobileNavLink href='/contact' onClick={() => setMobileMenuOpen(false)}>
                  {tNavigation('contact')}
                </MobileNavLink>
              </Typography>
            </li>
            <li>
              <Typography variant='text-sm' color={colors.text.black}>
                <MobileNavLink href='/' onClick={() => setMobileMenuOpen(false)}>
                  {tNavigation('logout')}
                </MobileNavLink>
              </Typography>
            </li>
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
                aria-label='Change language'
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
                        aria-label={`Switch to ${label}`}
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
