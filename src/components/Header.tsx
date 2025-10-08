'use client';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { DesktopContainer, MobileContainer } from '@/components/Responsive';
import AddressIcon from '@/icons/AddressIcon';
import BellIcon from '@/icons/BellIcon';
import BurgerMenuIcon from '@/icons/BurgerMenuIcon';
import CalculatorIcon from '@/icons/CalculcatorIcon';
import CloseIcon from '@/icons/CloseIcon';
import ContactIcon from '@/icons/ContactIcon';
import HomeIcon from '@/icons/HomeIcon';
import InvoiceIcon from '@/icons/InvoiceIcon';
import LogoIcon from '@/icons/LogoIcon';
import LogoutIcon from '@/icons/LogoutIcon';
import PackageIcon from '@/icons/PackageIcon';
import PlusTranspIcon from '@/icons/PlusTranspIcon';
import SettingsIcon from '@/icons/SettingsIcon';
import TariffsIcon from '@/icons/TariffsIcon';
import TermsIcon from '@/icons/TermsIcon';

import { colors } from '../styles/colors';

import Button from './Button';
import CalculatorPopup from './CalculatorPopup';
import Container from './Container';
import {
  SidebarWrapper as SidebarMenuWrapper,
  ItemsWrapper as SidebarItemsWrapper,
  MenuItem as SidebarMenuItem,
  ButtonWrapper as SidebarButtonWrapper,
} from './Sidebar';
import Typography from './Typography';
import UserBadge from './UserBadge';

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

const MobileButtons = styled.div`
  display: flex;
  gap: 8px;
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

const MobileUserBadgeWrapper = styled.div`
  padding: 0 0 12px 0;
  margin-top: -8px;
`;

const Header = () => {
  const tHeader = useTranslations('Header');
  const tNavigation = useTranslations('Navigation');
  const tSidebar = useTranslations('Sidebar');
  const [isCalculatorOpen, setCalculatorOpen] = useState(false);
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
  const pathParts = pathname.split('/').filter(Boolean);
  const possibleLocale = pathParts[0];
  const hasLocale = Object.keys(localeLabels).includes(possibleLocale ?? '');
  const pageSegment = hasLocale ? pathParts[1] || '' : possibleLocale || '';
  const isOrdersPage = pageSegment === 'orders';

  function handleLanguageChange(locale: string) {
    router.push(`/${locale}`);
    setMobileMenuOpen(false);
  }

  const mobileMenuItemsHome = [
    { href: '/', key: 'home', label: tNavigation('home') },
    { href: '/orders', key: 'order', label: tNavigation('order') },
    { href: '/delivery', key: 'delivery', label: tNavigation('delivery') },
    { href: '/terms', key: 'terms', label: tNavigation('terms') },
    { href: '/price', key: 'price', label: tNavigation('price') },
    { href: '/contact', key: 'contact', label: tNavigation('contact') },
    { href: '/', key: 'logout', label: tNavigation('logout') },
  ];

  const ordersPrimary = [
    { href: '/', key: 'sb-home', icon: <HomeIcon />, label: tSidebar('home') },
    {
      href: '/orders',
      key: 'sb-orders',
      icon: <PackageIcon width={22} height={21} />,
      label: tSidebar('orders'),
    },
    { href: '/terms', key: 'sb-terms', icon: <TermsIcon />, label: tSidebar('terms') },
    { href: '/invoice', key: 'sb-invoice', icon: <InvoiceIcon />, label: tSidebar('invoice') },
  ];
  const ordersSecondary = [
    { href: '/tariffs', key: 'sb-tariffs', icon: <TariffsIcon />, label: tSidebar('tariffs') },
    {
      href: '/addresses',
      key: 'sb-addresses',
      icon: <AddressIcon />,
      label: tSidebar('addresses'),
    },
    { href: '/settings', key: 'sb-settings', icon: <SettingsIcon />, label: tSidebar('settings') },
    { href: '/contact', key: 'sb-contact', icon: <ContactIcon />, label: tSidebar('contact') },
  ];

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
                      <NavLink href='/orders'>{tNavigation('order')}</NavLink>
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
                <Button
                  size='xs'
                  type='button'
                  variant='secondary'
                  aria-label='Open calculator'
                  onClick={() => setCalculatorOpen(true)}
                >
                  <CalculatorIcon />
                </Button>
                <Button size='xs' type='button' variant='secondary' aria-label='View notifications'>
                  <BellIcon />
                </Button>
                <Button
                  size='md'
                  type='button'
                  variant='primary'
                  onClick={() => router.push(`/${currentLocale}/auth/login`)}
                >
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
              <MobileButtons>
                <Button
                  size='xs'
                  type='button'
                  variant='transparent'
                  aria-label='Open calculator'
                  onClick={() => setCalculatorOpen(true)}
                >
                  <CalculatorIcon />
                </Button>
                <Button
                  onClick={() => setMobileMenuOpen(true)}
                  size='xs'
                  variant='transparent'
                  aria-label='Open menu'
                >
                  <BurgerMenuIcon />
                </Button>
              </MobileButtons>
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
          {!isOrdersPage && (
            <MobileNavList>
              {mobileMenuItemsHome.map(item => (
                <li key={item.key}>
                  <Typography variant='text-sm' color={colors.text.black}>
                    <MobileNavLink href={item.href} onClick={() => setMobileMenuOpen(false)}>
                      {item.label}
                    </MobileNavLink>
                  </Typography>
                </li>
              ))}
            </MobileNavList>
          )}
          {isOrdersPage && (
            <SidebarMenuWrapper style={{ width: '100%', border: 'none', borderRadius: 0 }}>
              <MobileUserBadgeWrapper>
                <UserBadge
                  name='Gagi Murjikneli'
                  email='gagi.murjikneli@gmail.com'
                  presence='online'
                />
              </MobileUserBadgeWrapper>
              <SidebarItemsWrapper>
                {ordersPrimary.map(item => (
                  <SidebarMenuItem key={item.key} onClick={() => setMobileMenuOpen(false)}>
                    {item.icon}
                    <Typography variant='text-sm' color={colors.text.secondary}>
                      {item.label}
                    </Typography>
                  </SidebarMenuItem>
                ))}
              </SidebarItemsWrapper>
              <SidebarButtonWrapper>
                <Button
                  variant='primary'
                  size='lg'
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                >
                  <PlusTranspIcon />
                  {tSidebar('button')}
                </Button>
              </SidebarButtonWrapper>
              <SidebarItemsWrapper>
                {ordersSecondary.map(item => (
                  <SidebarMenuItem key={item.key} onClick={() => setMobileMenuOpen(false)}>
                    {item.icon}
                    <Typography variant='text-sm' color={colors.text.secondary}>
                      {item.label}
                    </Typography>
                  </SidebarMenuItem>
                ))}
              </SidebarItemsWrapper>
              <SidebarItemsWrapper>
                <SidebarMenuItem onClick={() => setMobileMenuOpen(false)}>
                  <LogoutIcon />
                  <Typography variant='text-sm' color={colors.text.secondary}>
                    {tSidebar('logout')}
                  </Typography>
                </SidebarMenuItem>
              </SidebarItemsWrapper>
            </SidebarMenuWrapper>
          )}
          {!isOrdersPage && (
            <Login>
              <Button
                size='lg'
                variant='primary'
                onClick={() => {
                  setMobileMenuOpen(false);
                  router.push(`/${currentLocale}/auth/login`);
                }}
              >
                {tHeader('login')}
              </Button>
            </Login>
          )}

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
      {isCalculatorOpen && <CalculatorPopup onClose={() => setCalculatorOpen(false)} />}
    </>
  );
};

export default Header;
