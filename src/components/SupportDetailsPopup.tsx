'use client';
import { useTranslations } from 'next-intl';
import React from 'react';
import styled from 'styled-components';

import Button from '@/components/Button';
import { DesktopContainer } from '@/components/Responsive';
import CloseIcon from '@/icons/CloseIcon';
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
  margin-bottom: 8px;

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
  gap: 12px;
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

const MainCard = styled.div`
  background-color: ${colors.background.white};
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MainCardComments = styled.div`
  background-color: ${colors.background.white};
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CardTitle = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: -4px;
  margin-top: 12px;
`;

const RowComments = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: space-between;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface SupportDetailsPopup {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const SupportDetailsPopup: React.FC<SupportDetailsPopup> = ({ isOpen, onClose }) => {
  const tSupport = useTranslations('Support');

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleOverlayKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      onClose();
    }
    if ((e.key === 'Enter' || e.key === ' ') && e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <Overlay
      role='button'
      tabIndex={0}
      onClick={handleOverlayClick}
      onKeyDown={handleOverlayKeyDown}
    >
      <Popup role='dialog' aria-modal='true' aria-labelledby='popup-title'>
        <DesktopContainer>
          <CloseButton aria-label='Close' onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        </DesktopContainer>

        <FrameBody>
          <StickyTitle>
            <Typography variant='text-md' weight='semibold' color={colors.text.black}>
              {tSupport('Popup.title')}
            </Typography>
            <MobileClose aria-label='Close' onClick={onClose} type='button'>
              <CloseIcon />
            </MobileClose>
          </StickyTitle>
          <Header>
            <IDWrapper>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                {tSupport('Popup.id')}
              </Typography>
            </IDWrapper>
            <StatusBadge variant='paid' label={tSupport('Popup.status')} />
          </Header>
          <MainCard>
            <Typography variant='text-sm' weight='medium' color={colors.text.black}>
              {tSupport('Popup.card1.row1')}
            </Typography>
            <Typography variant='text-sm' weight='medium' color={colors.text.black}>
              {tSupport('Popup.card1.row2')}
            </Typography>
            <Typography variant='text-sm' weight='medium' color={colors.text.black}>
              {tSupport('Popup.card1.row3')}
            </Typography>
          </MainCard>
          <MainCardComments>
            <RowComments>
              <Typography variant='text-sm' weight='bold' color={colors.text.black}>
                {tSupport('Popup.card2.topic')}
              </Typography>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                {tSupport('Popup.card2.topicValue')}
              </Typography>
            </RowComments>
            <RowComments>
              <Typography variant='text-sm' weight='bold' color={colors.text.black}>
                {tSupport('Popup.card2.userComment')}
              </Typography>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                {tSupport('Popup.card2.userCommentValue')}
              </Typography>
            </RowComments>
            <RowComments>
              <Typography variant='text-sm' weight='bold' color={colors.text.black}>
                {tSupport('Popup.card2.companyComment')}
              </Typography>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                {tSupport('Popup.card2.companyCommentValue')}
              </Typography>
            </RowComments>
          </MainCardComments>
          <CardTitle>
            <Typography variant='text-sm' weight='bold' color={colors.text.black}>
              {tSupport('Popup.card3.title')}
            </Typography>
          </CardTitle>
          <MainCard>
            <Row>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                {tSupport('Popup.card3.tracking')}
              </Typography>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                #455445
              </Typography>
            </Row>
            <Row>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                {tSupport('Popup.card3.company')}
              </Typography>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                {tSupport('Popup.card3.companyValue')}
              </Typography>
            </Row>
            <Row>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                {tSupport('Popup.card3.name')}
              </Typography>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                {tSupport('Popup.card3.nameValue')}
              </Typography>
            </Row>
            <Row>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                {tSupport('Popup.card3.phone')}
              </Typography>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                +995 577 48 88 96
              </Typography>
            </Row>
            <Row>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                {tSupport('Popup.card3.email')}
              </Typography>
              <Typography variant='text-sm' weight='medium' color={colors.text.black}>
                deliver@gmail.com
              </Typography>
            </Row>
          </MainCard>
        </FrameBody>
      </Popup>
    </Overlay>
  );
};

export default SupportDetailsPopup;
