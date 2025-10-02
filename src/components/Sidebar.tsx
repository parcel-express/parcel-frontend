import { useTranslations } from 'next-intl';
import React from 'react';
import styled from 'styled-components';

import AddressIcon from '@/icons/AddressIcon';
import ContactIcon from '@/icons/ContactIcon';
import HomeIcon from '@/icons/HomeIcon';
import InvoiceIcon from '@/icons/InvoiceIcon';
import LogoIcon from '@/icons/LogoIcon';
import PackageIcon from '@/icons/PackageIcon';
import PlusTranspIcon from '@/icons/PlusTranspIcon';
import SettingsIcon from '@/icons/SettingsIcon';
import TariffsIcon from '@/icons/TariffsIcon';
import TermsIcon from '@/icons/TermsIcon';
import { colors } from '@/styles/colors';

import { Button } from './Button';
import Typography from './Typography';

export const SidebarWrapper = styled.div`
  width: 292px;
  position: sticky;
  top: 0;
  height: 100vh;
  background: ${colors.background.white};
  padding: 20px 16px 12px 16px;
  border: 1px solid ${colors.border.light};
  border-bottom: 0;
  border-radius: 12px 12px 0 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const MenuItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 12px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  :hover {
    background: ${colors.state.hover.lighter};
    border-radius: 8px;
  }
`;

export const ButtonWrapper = styled.div`
  padding: 12px 0;
  border-top: 1px solid ${colors.border.light};
  border-bottom: 1px solid ${colors.border.light};
  margin: 8px 0 8px 0;
`;

const Sidebar = () => {
  const tSidebar = useTranslations('Sidebar');
  return (
    <SidebarWrapper>
      <LogoWrapper>
        <LogoIcon />
      </LogoWrapper>
      <ItemsWrapper>
        <MenuItem>
          <HomeIcon />
          <Typography variant='text-sm' color={colors.text.secondary} weight='regular'>
            {tSidebar('home')}
          </Typography>
        </MenuItem>
        <MenuItem>
          <PackageIcon width={22} height={21} />
          <Typography variant='text-sm' color={colors.text.secondary} weight='regular'>
            {tSidebar('orders')}
          </Typography>
        </MenuItem>
        <MenuItem>
          <TermsIcon />
          <Typography variant='text-sm' color={colors.text.secondary} weight='regular'>
            {tSidebar('terms')}
          </Typography>
        </MenuItem>
        <MenuItem>
          <InvoiceIcon />
          <Typography variant='text-sm' color={colors.text.secondary} weight='regular'>
            {tSidebar('invoice')}
          </Typography>
        </MenuItem>
      </ItemsWrapper>
      <ButtonWrapper>
        <Button variant='primary' size='lg'>
          <PlusTranspIcon />
          {tSidebar('button')}
        </Button>
      </ButtonWrapper>
      <ItemsWrapper>
        <MenuItem>
          <TariffsIcon />
          <Typography variant='text-sm' color={colors.text.secondary} weight='regular'>
            {tSidebar('tariffs')}
          </Typography>
        </MenuItem>
        <MenuItem>
          <AddressIcon />
          <Typography variant='text-sm' color={colors.text.secondary} weight='regular'>
            {tSidebar('addresses')}
          </Typography>
        </MenuItem>
        <MenuItem>
          <SettingsIcon />
          <Typography variant='text-sm' color={colors.text.secondary} weight='regular'>
            {tSidebar('settings')}
          </Typography>
        </MenuItem>
        <MenuItem>
          <ContactIcon />
          <Typography variant='text-sm' color={colors.text.secondary} weight='regular'>
            {tSidebar('contact')}
          </Typography>
        </MenuItem>
      </ItemsWrapper>
    </SidebarWrapper>
  );
};

export default Sidebar;
