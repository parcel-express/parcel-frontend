'use client';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import styled from 'styled-components';

import { Button, Typography } from '@/components';
import DashboardContainer from '@/components/DashboardContainer';
import Header from '@/components/Header';
import MessagePopup from '@/components/MessagePopup';
import { DesktopContainer, MobileContainer } from '@/components/Responsive';
import BellIcon from '@/icons/BellIcon';
import PlusTranspIcon from '@/icons/PlusTranspIcon';
import { colors } from '@/styles/colors';

const MainCard = styled.div`
  background-color: ${colors.background.white};
  border-radius: 12px;
  padding: 20px 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (max-width: 1080px) {
    background: transparent;
    padding: 0;
  }
`;

const StyledButton = styled(Button)`
  position: relative;
  color: ${colors.brand.gradientStart};
  border: none !important;
  box-shadow: none !important;
  outline: none;
  background: transparent !important;
  font-weight: 600 !important;
  margin-left: auto;
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
    pointer-events: none;
  }
  & > * {
    position: relative;
    z-index: 1;
  }
  & svg {
    color: ${colors.brand.primary};
    stroke: ${colors.brand.primary};
    fill: ${colors.brand.primary};
  }
  @media screen and (max-width: 1080px) {
    width: 100%;
  }
`;

const MessageWrapper = styled.div`
  border-radius: 8px;
  padding: 12px 24px;
  border: 1px solid ${colors.border.primary};
  @media screen and (max-width: 1080px) {
    background-color: ${colors.background.white};
    padding: 16px 20px;
  }
`;

const IconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 70px;
  height: 70px;
  border-radius: 8px;

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
    pointer-events: none;
  }

  & > * {
    position: relative;
    z-index: 1;
  }
  @media screen and (max-width: 1080px) {
    min-width: 43px;
    height: 43px;
  }
`;

const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

const BioWrapper = styled.div`
  max-width: 764px;
  @media screen and (max-width: 1080px) {
    margin-top: 16px;
  }
`;

const DetailsButtonWrapper = styled.div`
  border: none;
  background: transparent;
  & > button {
    overflow: visible;
  }
`;

const IconButtons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
`;

const MessagesScreen = () => {
  const tMessages = useTranslations('Messages');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const messages = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
  }));

  return (
    <>
      <MobileContainer>
        <Header />
      </MobileContainer>
      <DashboardContainer title={tMessages('title')}>
        <MainCard>
          <StyledButton
            variant='primary'
            size='xs'
            leftIcon={<PlusTranspIcon color='#662D91' />}
            onClick={() => setIsPopupOpen(true)}
          >
            {tMessages('button')}
          </StyledButton>

          {messages.map(message => (
            <MessageWrapper key={message.id}>
              <DesktopContainer>
                <CardDetails>
                  <IconWrapper>
                    <BellIcon />
                  </IconWrapper>
                  <BioWrapper>
                    <Typography variant='text-xs' color={colors.text.black} weight='medium'>
                      {tMessages('Card.bio')}
                    </Typography>
                  </BioWrapper>
                  <DetailsButtonWrapper>
                    <Button variant='transparent' size='sm'>
                      <Typography color={colors.brand.primary} weight='bold' variant='text-sm'>
                        {tMessages('Card.button')}
                      </Typography>
                    </Button>
                  </DetailsButtonWrapper>
                </CardDetails>
              </DesktopContainer>
              <MobileContainer>
                <IconButtons>
                  <IconWrapper>
                    <BellIcon />
                  </IconWrapper>
                  <DetailsButtonWrapper>
                    <Button variant='transparent' size='sm'>
                      <Typography color={colors.brand.primary} weight='bold' variant='text-sm'>
                        {tMessages('Card.button')}
                      </Typography>
                    </Button>
                  </DetailsButtonWrapper>
                </IconButtons>
                <BioWrapper>
                  <Typography variant='text-xs' color={colors.text.black} weight='medium'>
                    {tMessages('Card.bio')}
                  </Typography>
                </BioWrapper>
              </MobileContainer>
            </MessageWrapper>
          ))}
        </MainCard>
      </DashboardContainer>
      <MessagePopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
};

export default MessagesScreen;
