'use client';
import { useTranslations } from 'next-intl';
import React from 'react';
import styled from 'styled-components';

import Button from '@/components/Button';
import { DesktopContainer } from '@/components/Responsive';
import CloseIcon from '@/icons/CloseIcon';
import { colors } from '@/styles/colors';

import Dropdown from './Dropdown';
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
  width: 534px;
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
  background-color: ${colors.background.white} !important;
  border: none !important;
  box-shadow: none !important;

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
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (max-width: 1080px) {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: ${colors.background.lighter};
    padding: 20px 0 16px 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
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
    padding-bottom: 20px;
  }
`;

const InputsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ButtonWrapper = styled.div`
  margin-top: -4px;
  @media (max-width: 1080px) {
    margin-top: 4px;
  }
`;

const DropdownContainer = styled.div`
  width: 100%;
`;

interface NewBranchPopupProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const NewBranchPopup: React.FC<NewBranchPopupProps> = ({ isOpen, onClose }) => {
  const tAddresses = useTranslations('Addresses');

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleOverlayKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
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
      <Popup role='dialog' aria-modal='true' aria-labelledby='new-branch-popup-title'>
        <DesktopContainer>
          <CloseButton aria-label='Close' onClick={onClose} type='button'>
            <CloseIcon />
          </CloseButton>
        </DesktopContainer>

        <FrameBody>
          <StickyTitle>
            <TitleContent>
              <Typography variant='text-md' weight='semibold' color={colors.text.black}>
                {tAddresses('Popup.title')}
              </Typography>
              <Typography variant='text-xs' weight='regular' color={colors.text.black}>
                {tAddresses('Popup.subtitle')}
              </Typography>
            </TitleContent>
            <MobileClose aria-label='Close' onClick={onClose} type='button'>
              <CloseIcon />
            </MobileClose>
          </StickyTitle>
          <InputsBox>
            <DropdownContainer>
              <Dropdown
                value=''
                variant='input'
                onChange={() => {}}
                placeholder={tAddresses('Popup.form.branchNamePlaceholder')}
                label={tAddresses('Popup.form.branchName')}
                inputPadding='12px 16px'
                items={[]}
              />
            </DropdownContainer>
            <DropdownContainer>
              <Dropdown
                value=''
                variant='input'
                onChange={() => {}}
                placeholder={tAddresses('Popup.form.firstNamePlaceholder')}
                label={tAddresses('Popup.form.firstName')}
                inputPadding='12px 16px'
                items={[]}
              />
            </DropdownContainer>
            <DropdownContainer>
              <Dropdown
                value=''
                variant='input'
                onChange={() => {}}
                placeholder={tAddresses('Popup.form.companyPlaceholder')}
                label={tAddresses('Popup.form.company')}
                inputPadding='12px 16px'
                items={[]}
              />
            </DropdownContainer>
            <DropdownContainer>
              <Dropdown
                value=''
                variant='dropdown'
                onChange={() => {}}
                placeholder={tAddresses('Popup.form.cityPlaceholder')}
                label={tAddresses('Popup.form.city')}
                inputPadding='12px 16px'
                items={[]}
              />
            </DropdownContainer>
            <DropdownContainer>
              <Dropdown
                value=''
                variant='input'
                onChange={() => {}}
                placeholder={tAddresses('Popup.form.address')}
                label={tAddresses('Popup.form.addressPlaceholder')}
                inputPadding='12px 16px'
                items={[]}
              />
            </DropdownContainer>
            <DropdownContainer>
              <Dropdown
                value=''
                variant='input'
                onChange={() => {}}
                placeholder={tAddresses('Popup.form.phone')}
                label={tAddresses('Popup.form.phonePlaceholder')}
                inputPadding='12px 16px'
                items={[]}
              />
            </DropdownContainer>
          </InputsBox>
          <ButtonWrapper>
            <Button variant='primary' size='lg' onClick={onClose}>
              {tAddresses('Popup.button')}
            </Button>
          </ButtonWrapper>
        </FrameBody>
      </Popup>
    </Overlay>
  );
};

export default NewBranchPopup;
