'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';
import styled from 'styled-components';

import Button from '@/components/Button';
import { DesktopContainer } from '@/components/Responsive';
import BillingIcon from '@/icons/BillingIcon';
import BoxIcon from '@/icons/BoxIcon';
import CloseIcon from '@/icons/CloseIcon';
import HelpIcon from '@/icons/HelpIcon';
import InvoiceIcon from '@/icons/InvoiceIcon';
import PrinterIcon from '@/icons/PrinterIcon';
import SenderIcon from '@/icons/SenderIcon';
import { colors } from '@/styles/colors';

import StatusBadge from './StatusBadge';
import { Typography } from './Typography';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  background: ${colors.overlay.gradientDarker};
  justify-content: center;
  align-items: center;
  z-index: 1000;

  @media (max-width: 1080px) {
    align-items: flex-end;
  }
`;

const Popup = styled.div`
  position: relative;
  width: 788px;
  padding: 20px;
  border-radius: 14px;
  backdrop-filter: blur(31.5px);
  background: ${colors.background.lighter};
  display: flex;
  flex-direction: column;

  @media (max-width: 1080px) {
    width: 100%;
    max-height: 85vh;
    border-radius: 12px 12px 0 0;
    padding: 0 16px 0 16px;
    overflow-y: auto;
  }
`;

const CloseButton = styled(Button).attrs({ variant: 'default', size: 'xs', type: 'button' })`
  position: absolute;
  top: 0;
  right: -60px;
  background-color: ${colors.background.white};
  border: none;
  box-shadow: none;
  &:hover,
  &:focus,
  &:active {
    background-color: ${colors.background.white} !important;
    border: none !important;
    box-shadow: none !important;
    filter: none !important;
    opacity: 1 !important;
  }

  @media (max-width: 640px) {
    right: 0;
    top: -48px;
  }
`;

const StickyTitle = styled.div`
  @media (max-width: 1080px) {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: ${colors.background.lighter};
    padding: 20px 0 20px 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const MobileClose = styled(Button).attrs({
  variant: 'transparent',
  size: 'xs',
  type: 'button',
})`
  display: none;
  @media (max-width: 1080px) {
    display: flex;
  }
`;

const FrameBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-height: calc(100vh - 80px);
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  @media (max-width: 1080px) {
    gap: 8px;
    padding-bottom: 108px;
  }
`;

const IDWrapper = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.background.white};
  padding: 24px;
  border-radius: 12px;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 20px;
    padding: 16px;
    align-items: flex-start;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  @media (max-width: 640px) {
    justify-content: flex-start;
  }
`;

const IconWrapper = styled.div`
  margin-right: 8px;
`;

const Sections = styled.div`
  display: flex;
  gap: 64px;
  padding: 4px 0 12px 20px;
  border-bottom: 1px solid ${colors.border.primary};
  :hover {
    cursor: pointer;
    color: ${colors.brand.gradientStart};
  }
`;

const MainCard = styled.div`
  background-color: ${colors.background.white};
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const UserInfos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  @media (max-width: 1080px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

const UserCard = styled.div`
  background-color: ${colors.background.white};
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CardTitle = styled.div`
  display: flex;
  gap: 8px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ParcelDetails = styled.div`
  position: relative;
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 8px;
  border-radius: 12px;
  padding: 12px;
  background: transparent;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(
      93.55deg,
      ${colors.brand.primary} 21.82%,
      ${colors.brand.secondary} 110.55%
    );
    opacity: 0.1;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const ParcelInfos = styled.div`
  display: flex;
  flex-direction: column;
`;

interface OrdersDetailPopupProps {
  onClose: () => void;
  children?: React.ReactNode;
}

const OrdersDetailPopup: React.FC<OrdersDetailPopupProps> = ({ onClose }) => {
  const tOrderDetails = useTranslations('OrderDetails');

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  function handleOverlayKeyDown(_event: React.KeyboardEvent<HTMLDivElement>): void {
    throw new Error('Function not implemented.');
  }

  return (
    <Overlay
      role='button'
      tabIndex={0}
      onClick={handleOverlayClick}
      onKeyDown={handleOverlayKeyDown}
    >
      <Popup>
        <DesktopContainer>
          <CloseButton aria-label='Close' onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        </DesktopContainer>

        <FrameBody>
          <StickyTitle>
            <Typography variant='text-md' weight='semibold' color={colors.text.black}>
              {tOrderDetails('title')}
            </Typography>
            <MobileClose aria-label='Close' onClick={onClose} type='button'>
              <CloseIcon />
            </MobileClose>
          </StickyTitle>
          <Header>
            <IDWrapper>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                {tOrderDetails('subtitle')}
              </Typography>
            </IDWrapper>
            <Buttons>
              <Button variant='secondary' size='mdSearch' onClick={onClose}>
                <IconWrapper>
                  <HelpIcon />
                </IconWrapper>
                {tOrderDetails('buttons.help')}
              </Button>
              <Button variant='secondary' size='mdSearch' onClick={onClose}>
                <IconWrapper>
                  <InvoiceIcon />
                </IconWrapper>
                {tOrderDetails('buttons.invoice')}
              </Button>
              <Button variant='secondary' size='mdSearch' onClick={onClose}>
                <IconWrapper>
                  <PrinterIcon />
                </IconWrapper>
                {tOrderDetails('buttons.print')}
              </Button>
            </Buttons>
          </Header>
          <Sections>
            <Typography variant='text-sm' weight='medium' color={colors.text.secondary}>
              {tOrderDetails('sections.orderDetails')}
            </Typography>
            <Typography variant='text-sm' weight='medium' color={colors.text.secondary}>
              {tOrderDetails('sections.photos')}
            </Typography>
          </Sections>
          <MainCard>
            <Row>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                {tOrderDetails('card1.status')}
              </Typography>
              <StatusBadge variant='pending' label={tOrderDetails('card1.statusLabel')} />
            </Row>
            <Row>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                {tOrderDetails('card1.quality')}
              </Typography>
              <Typography variant='text-sm' weight='regular' color={colors.text.black}>
                {tOrderDetails('card1.qualityValue')}
              </Typography>
            </Row>
            <Row>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                {tOrderDetails('card1.orderDate')}
              </Typography>
              <Typography variant='text-sm' weight='regular' color={colors.text.black}>
                19.07.2025 11:49
              </Typography>
            </Row>
            <Row>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                {tOrderDetails('card1.pickupDate')}
              </Typography>
              <Typography variant='text-sm' weight='regular' color={colors.text.black}>
                19.07.2025
              </Typography>
            </Row>
            <Row>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                {tOrderDetails('card1.expectedDate')}
              </Typography>
              <Typography variant='text-sm' weight='regular' color={colors.text.black}>
                19.07.2025
              </Typography>
            </Row>
            <Row>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                {tOrderDetails('card1.deliveryDate')}
              </Typography>
              <Typography variant='text-sm' weight='regular' color={colors.text.black}>
                ---
              </Typography>
            </Row>
          </MainCard>
          <UserInfos>
            <UserCard>
              <CardTitle>
                <SenderIcon />
                <Typography variant='text-sm' weight='semibold' color={colors.text.black}>
                  {tOrderDetails('card2.title')}
                </Typography>
              </CardTitle>
              <Row>
                <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                  {tOrderDetails('card2.name')}
                </Typography>
                <Typography variant='text-sm' weight='regular' color={colors.text.black}>
                  {tOrderDetails('card2.nameValue')}
                </Typography>
              </Row>
              <Row>
                <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                  {tOrderDetails('card2.city')}
                </Typography>
                <Typography variant='text-sm' weight='regular' color={colors.text.black}>
                  {tOrderDetails('card2.cityValue')}
                </Typography>
              </Row>
              <Row>
                <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                  {tOrderDetails('card2.address')}
                </Typography>
                <Typography variant='text-sm' weight='regular' color={colors.text.black}>
                  {tOrderDetails('card2.addressValue')}
                </Typography>
              </Row>
              <Row>
                <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                  {tOrderDetails('card2.phone')}
                </Typography>
                <Typography variant='text-sm' weight='regular' color={colors.text.black}>
                  577488896
                </Typography>
              </Row>
            </UserCard>
            <UserCard>
              <CardTitle>
                <SenderIcon />
                <Typography variant='text-sm' weight='semibold' color={colors.text.black}>
                  {tOrderDetails('card3.title')}
                </Typography>
              </CardTitle>
              <Row>
                <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                  {tOrderDetails('card3.name')}
                </Typography>
                <Typography variant='text-sm' weight='regular' color={colors.text.black}>
                  {tOrderDetails('card3.nameValue')}
                </Typography>
              </Row>
              <Row>
                <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                  {tOrderDetails('card2.city')}
                </Typography>
                <Typography variant='text-sm' weight='regular' color={colors.text.black}>
                  {tOrderDetails('card2.cityValue')}
                </Typography>
              </Row>
              <Row>
                <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                  {tOrderDetails('card2.address')}
                </Typography>
                <Typography variant='text-sm' weight='regular' color={colors.text.black}>
                  {tOrderDetails('card2.addressValue')}
                </Typography>
              </Row>
              <Row>
                <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                  {tOrderDetails('card2.phone')}
                </Typography>
                <Typography variant='text-sm' weight='regular' color={colors.text.black}>
                  577488896
                </Typography>
              </Row>
            </UserCard>
            <UserCard>
              <CardTitle>
                <BoxIcon />
                <Typography variant='text-sm' weight='semibold' color={colors.text.black}>
                  {tOrderDetails('card4.title')}
                </Typography>
              </CardTitle>
              <ParcelDetails>
                <Image src='/images/orders/parcel.png' alt='Parcel' width={75} height={75} />
                <ParcelInfos>
                  <Typography variant='text-sm' weight='regular' color={colors.text.black}>
                    {tOrderDetails('card4.weight')}
                  </Typography>
                  <Typography variant='text-sm' weight='regular' color={colors.text.black}>
                    {tOrderDetails('card4.quantity')}
                  </Typography>
                </ParcelInfos>
              </ParcelDetails>
            </UserCard>
            <UserCard>
              <CardTitle>
                <BillingIcon />
                <Typography variant='text-sm' weight='semibold' color={colors.text.black}>
                  {tOrderDetails('card5.title')}
                </Typography>
              </CardTitle>
              <Row>
                <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                  {tOrderDetails('card5.price')}
                </Typography>
                <Typography variant='text-sm' weight='regular' color={colors.text.black}>
                  {tOrderDetails('card5.priceValue')}
                </Typography>
              </Row>
              <Row>
                <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                  {tOrderDetails('card5.services')}
                </Typography>
                <Typography variant='text-sm' weight='regular' color={colors.text.black}>
                  {tOrderDetails('card5.servicesValue')}
                </Typography>
              </Row>
              <Row>
                <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                  {tOrderDetails('card5.items')}
                </Typography>
                <Typography variant='text-sm' weight='regular' color={colors.text.black}>
                  {tOrderDetails('card5.itemsValue')}
                </Typography>
              </Row>
              <Row>
                <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                  {tOrderDetails('card5.cod')}
                </Typography>
                <Typography variant='text-sm' weight='regular' color={colors.text.black}>
                  {tOrderDetails('card5.codValue')}
                </Typography>
              </Row>
              <Row>
                <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                  {tOrderDetails('card5.payment')}
                </Typography>
                <Typography variant='text-sm' weight='regular' color={colors.text.black}>
                  {tOrderDetails('card5.paymentValue')}
                </Typography>
              </Row>
              <Row>
                <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                  {tOrderDetails('card5.company')}
                </Typography>
                <Typography variant='text-sm' weight='regular' color={colors.text.black}>
                  {tOrderDetails('card5.companyValue')}
                </Typography>
              </Row>
              <Row>
                <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                  {tOrderDetails('card5.type')}
                </Typography>
                <Typography variant='text-sm' weight='regular' color={colors.text.black}>
                  {tOrderDetails('card5.typeValue')}
                </Typography>
              </Row>
            </UserCard>
          </UserInfos>
        </FrameBody>
      </Popup>
    </Overlay>
  );
};

export default OrdersDetailPopup;
