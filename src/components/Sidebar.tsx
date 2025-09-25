import React from 'react';
import styled from 'styled-components';
import { useTranslations } from 'use-intl';

import LogoIcon from '@/icons/LogoIcon';
import PackageIcon from '@/icons/PackageIcon';
import PlusTranspIcon from '@/icons/PlusTranspIcon';
import { colors } from '@/styles/colors';

import { Button } from './Button';
import Typography from './Typography';

const SidebarWrapper = styled.div`
  width: 292px;
  min-height: 100vh;
  min-height: 100dvh;
  background: ${colors.background.white};
  padding: 20px 16px 12px 16px;
  border: 1px solid ${colors.border.light};
  border-bottom: 0;
  border-radius: 12px 12px 0 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const MenuItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 12px;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  :hover {
    background: ${colors.state.hover.lighter};
    border-radius: 8px;
  }
`;

const ButtonWrapper = styled.div`
  padding: 12px 0;
  border-top: 1px solid ${colors.border.light};
  border-bottom: 1px solid ${colors.border.light};
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
          <Typography variant='text-sm' color={colors.text.secondary} weight='regular'>
            {tSidebar('home')}
          </Typography>
        </MenuItem>
        <MenuItem>
          <PackageIcon />
          <Typography variant='text-sm' color={colors.text.secondary} weight='regular'>
            {tSidebar('orders')}
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant='text-sm' color={colors.text.secondary} weight='regular'>
            {tSidebar('terms')}
          </Typography>
        </MenuItem>
        <MenuItem>
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
          <Typography variant='text-sm' color={colors.text.secondary} weight='regular'>
            {tSidebar('tariffs')}
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant='text-sm' color={colors.text.secondary} weight='regular'>
            {tSidebar('addresses')}
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant='text-sm' color={colors.text.secondary} weight='regular'>
            {tSidebar('settings')}
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant='text-sm' color={colors.text.secondary} weight='regular'>
            {tSidebar('contact')}
          </Typography>
        </MenuItem>
      </ItemsWrapper>
    </SidebarWrapper>
  );
};

export default Sidebar;
