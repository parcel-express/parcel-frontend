import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import styled from 'styled-components';

import CalendarIcon from '@/icons/CalendarIcon';
import CloseIcon from '@/icons/CloseIcon';
import { colors } from '@/styles/colors';

import Button from './Button';
import Dropdown from './Dropdown';
import Typography from './Typography';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
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
`;

const CloseButton = styled(Button).attrs({ variant: 'default', size: 'xs' })`
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
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 8px;
`;

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const LastSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

const TotalPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ButtonWrapper = styled.div`
  max-height: 44px;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

const DateRangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const DateRangeBox = styled.div`
  display: flex;
  border: 1px solid ${colors.border.primary};
  border-radius: 8px;
  background: ${colors.background.white};
  margin-top: 4px;
`;

const SingleDate = styled.label`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 20px;
  font-size: 14px;
  position: relative;

  &:not(:last-child) {
    border-right: 1px solid ${colors.border.primary};
  }

  input {
    border: none;
    background: transparent;
    outline: none;
    cursor: pointer;
  }

  input::-webkit-calendar-picker-indicator {
    opacity: 0;
    cursor: pointer;
  }
`;

const DateTitles = styled.div`
  display: flex;
  gap: 133px;
`;

const CalculatorPopup = ({ onClose }: { onClose: () => void }) => {
  const tCalculator = useTranslations('Calculator');
  const [dates, setDates] = useState({ start: '', end: '' });

  const handleChange = (key: 'start' | 'end', value: string) =>
    setDates(d => ({ ...d, [key]: value }));
  return (
    <Overlay>
      <Popup>
        <CloseButton
          variant='default'
          size='xs'
          onClick={onClose}
          aria-label='Close popup'
          type='button'
        >
          <CloseIcon />
        </CloseButton>
        <Container>
          <Title>
            <Typography variant='text-md' weight='semibold'>
              {tCalculator('title')}
            </Typography>
            <Typography variant='text-sm' weight='regular'>
              {tCalculator('bio')}
            </Typography>
          </Title>
          <DropdownWrapper>
            <Typography variant='text-sm' weight='regular' color={colors.text.secondary}>
              {tCalculator('input1Title')}
            </Typography>
            <Dropdown
              variant='dropdown'
              label=''
              placeholder={tCalculator('placeholder1')}
              items={[]}
              value=''
              onChange={() => {}}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Typography variant='text-sm' weight='regular' color={colors.text.secondary}>
              {tCalculator('input2Title')}
            </Typography>
            <Dropdown
              variant='dropdown'
              label=''
              placeholder={tCalculator('placeholder2')}
              items={[]}
              value=''
              onChange={() => {}}
            />
          </DropdownWrapper>

          <DateRangeWrapper>
            <DateTitles>
              <Typography variant='text-sm' weight='regular' color={colors.text.secondary}>
                {tCalculator('input3Title')}
              </Typography>
              <Typography variant='text-sm' weight='regular' color={colors.text.secondary}>
                {tCalculator('input4Title')}
              </Typography>
            </DateTitles>
            <DateRangeBox>
              <SingleDate>
                <CalendarIcon />
                <input
                  type='text'
                  value={dates.start}
                  placeholder={tCalculator('placeholder3')}
                  onChange={e => handleChange('start', e.target.value)}
                />
              </SingleDate>
              <SingleDate>
                <CalendarIcon />
                <input
                  type='text'
                  value={dates.end}
                  placeholder={tCalculator('placeholder4')}
                  onChange={e => handleChange('end', e.target.value)}
                />
              </SingleDate>
            </DateRangeBox>
          </DateRangeWrapper>

          <DropdownWrapper>
            <Typography variant='text-sm' weight='regular' color={colors.text.secondary}>
              {tCalculator('input5Title')}
            </Typography>
            <Dropdown
              variant='input'
              label=''
              items={[]}
              value=''
              onChange={() => {}}
              placeholder={tCalculator('placeholder5')}
            />
          </DropdownWrapper>
          <LastSection>
            <TotalPrice>
              <Typography variant='text-sm' weight='bold' color={colors.text.black}>
                {tCalculator('checkout')}
              </Typography>
              <Typography variant='display-md' weight='bold' color={colors.text.black}>
                {tCalculator('price')}
              </Typography>
            </TotalPrice>
            <ButtonWrapper>
              <Button
                variant='primary'
                size='md'
                onClick={onClose}
                backgroundOpacity={0.2}
                style={{ color: colors.text.black }}
              >
                {tCalculator('button')}
              </Button>
            </ButtonWrapper>
          </LastSection>
        </Container>
      </Popup>
    </Overlay>
  );
};

export default CalculatorPopup;
