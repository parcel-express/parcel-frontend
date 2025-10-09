'use client';
import { useTranslations } from 'next-intl';
import React from 'react';
import styled from 'styled-components';

import Button from '@/components/Button';
import { DesktopContainer } from '@/components/Responsive';
import BillingIcon from '@/icons/BillingIcon';
import CloseIcon from '@/icons/CloseIcon';
import PrinterIcon from '@/icons/PrinterIcon';
import { colors } from '@/styles/colors';

import Typography from './Typography';

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
  gap: 20px;
  max-height: calc(100vh - 80px);
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  @media (max-width: 1080px) {
    gap: 16px;
    padding-bottom: 108px;
  }
`;

const IDWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

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
    & > * {
      width: 100%;
    }
  }
`;

const IconWrapper = styled.div`
  margin-right: 8px;
`;

const MainCard = styled.div`
  background-color: ${colors.background.white};
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardTitle = styled.div`
  margin-bottom: -4px;
`;

interface InvoicesDetailPopupProps {
  onClose: () => void;
  invoiceIndex: number;
  children?: React.ReactNode;
}

const InvoicesDetailPopup: React.FC<InvoicesDetailPopupProps> = ({ onClose }) => {
  const tInvoiceDetails = useTranslations('InvoiceDetails');

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
              {tInvoiceDetails('title')}
            </Typography>
            <MobileClose aria-label='Close' onClick={onClose} type='button'>
              <CloseIcon />
            </MobileClose>
          </StickyTitle>
          <Header>
            <IDWrapper>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                {tInvoiceDetails('subtitle')}
              </Typography>
              <Typography variant='text-xs' weight='medium' color={colors.text.tertiary}>
                {tInvoiceDetails('invoiceDate')}
              </Typography>
            </IDWrapper>
            <Buttons>
              <Button variant='secondary' size='mdSearch' onClick={onClose}>
                <IconWrapper>
                  <BillingIcon />
                </IconWrapper>
                {tInvoiceDetails('buttons.download')}
              </Button>
              <Button variant='secondary' size='mdSearch' onClick={onClose}>
                <IconWrapper>
                  <PrinterIcon />
                </IconWrapper>
                {tInvoiceDetails('buttons.print')}
              </Button>
            </Buttons>
          </Header>

          <MainCard>
            <Row>
              <Typography variant='text-sm' weight='bold' color={colors.text.black}>
                {tInvoiceDetails('card1.orderName')}
              </Typography>
              <Typography variant='text-sm' weight='bold' color={colors.text.black}>
                {tInvoiceDetails('card1.orderNameValue')}
              </Typography>
            </Row>
            <Row>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                {tInvoiceDetails('card1.id')}
              </Typography>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                #455445
              </Typography>
            </Row>
            <Row>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                {tInvoiceDetails('card1.name')}
              </Typography>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                {tInvoiceDetails('card1.nameValue')}
              </Typography>
            </Row>
            <Row>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                {tInvoiceDetails('card1.code')}
              </Typography>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                545455656
              </Typography>
            </Row>
            <Row>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                {tInvoiceDetails('card1.phone')}
              </Typography>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                +995 577 48 88 96
              </Typography>
            </Row>
            <Row>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                {tInvoiceDetails('card1.email')}
              </Typography>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                deliver@gmail.com
              </Typography>
            </Row>
            <Row>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                {tInvoiceDetails('card1.iBan')}
              </Typography>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                GE34TB232342343435445
              </Typography>
            </Row>
          </MainCard>

          <CardTitle>
            <Typography variant='text-sm' weight='semibold' color={colors.text.black}>
              {tInvoiceDetails('card2.title')}
            </Typography>
          </CardTitle>
          <MainCard>
            <Row>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                {tInvoiceDetails('card1.orderName')}
              </Typography>
              <Typography variant='text-sm' weight='bold' color={colors.text.black}>
                12.00₾
              </Typography>
            </Row>
            <Row>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                {tInvoiceDetails('card1.id')}
              </Typography>
              <Typography variant='text-sm' weight='bold' color={colors.text.black}>
                12.00₾
              </Typography>
            </Row>
            <Row>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                {tInvoiceDetails('card1.name')}
              </Typography>
              <Typography variant='text-sm' weight='bold' color={colors.text.black}>
                12.00₾
              </Typography>
            </Row>
            <Row>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                {tInvoiceDetails('card1.code')}
              </Typography>
              <Typography variant='text-sm' weight='bold' color={colors.text.black}>
                0.00₾
              </Typography>
            </Row>
            <Row>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                {tInvoiceDetails('card1.phone')}
              </Typography>
              <Typography variant='text-sm' weight='bold' color={colors.text.black}>
                64.00₾
              </Typography>
            </Row>
          </MainCard>
        </FrameBody>
      </Popup>
    </Overlay>
  );
};

export default InvoicesDetailPopup;
