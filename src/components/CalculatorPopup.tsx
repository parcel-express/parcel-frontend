'use client';
import { useFormik } from 'formik';
import { useTranslations } from 'next-intl';
import React, { useRef } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';

import { Button, Typography } from '@/components';
import CalendarIcon from '@/icons/CalendarIcon';
import CloseIcon from '@/icons/CloseIcon';
import { colors } from '@/styles/colors';

import Dropdown from './Dropdown';
import { DesktopContainer, MobileContainer } from './Responsive';

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
    max-width: 100%;
    border-radius: 12px 12px 0 0;
    padding: 20px;
  }
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
  @media (max-width: 1080px) {
    margin-bottom: 16px;
  }
`;

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const LastSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
  margin-top: auto;
  align-items: flex-end;
  @media (max-width: 1080px) {
    gap: 52px;
    flex-direction: column;
    align-items: stretch;
  }
`;

const TotalPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ButtonWrapper = styled.div`
  margin-left: auto;
  display: flex;
  @media (max-width: 1080px) {
    width: 100%;
  }
`;

const DateRangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const DateRangeBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  border: 1px solid ${colors.border.primary};
  border-radius: 8px;
  background: ${colors.background.white};
  margin-top: 4px;
`;

const DateInputRow = styled.button.attrs({ type: 'button' })`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 0;
  border: none;
  background: transparent;
  width: 100%;

  input {
    flex: 1;
    font: inherit;
    padding: 0;
    background: transparent;
    border: none;
    color: ${colors.text.black};
    -webkit-appearance: none;
    appearance: none;
    outline: none;
    box-shadow: none;
  }

  input::-webkit-calendar-picker-indicator {
    opacity: 0;
    border: none;
  }
`;

const DateField = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: relative;
  min-width: 0;
  &:not(:last-child) {
    border-right: 1px solid ${colors.border.primary};
  }
  @media (max-width: 1080px) {
    padding: 20px 0 20px 12px;
  }
`;

const DateLabels = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const DateLabel = styled.label`
  flex: 1;
  display: block;
`;

const CalculatorPopup = ({ onClose }: { onClose: () => void }) => {
  const tCalculator = useTranslations('Calculator');

  const startInputRef = useRef<HTMLInputElement | null>(null);
  const endInputRef = useRef<HTMLInputElement | null>(null);

  const formik = useFormik({
    initialValues: {
      input1: '',
      input2: '',
      startDate: '',
      endDate: '',
      input5: '',
    },
    validationSchema: Yup.object({
      input1: Yup.string().required('Required'),
      input2: Yup.string().required('Required'),
      startDate: Yup.date().required('Required'),
      endDate: Yup.date().min(Yup.ref('startDate'), 'End must be after start').required('Required'),
      input5: Yup.string().required('Required'),
    }),
    onSubmit: values => {
      console.warn('Form submit:', values);
      onClose();
    },
  });

  const openNativePicker = (ref: React.RefObject<HTMLInputElement | null>) => {
    const el = ref.current;
    if (!el) return;
    try {
      if (typeof el.showPicker === 'function') {
        el.showPicker();
        return;
      }
    } catch {}
    el.focus();
    el.click();
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };
  const handleOverlayKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <Overlay
      role='button'
      tabIndex={0}
      onClick={handleOverlayClick}
      onKeyDown={handleOverlayKeyDown}
    >
      <Popup>
        <form
          onSubmit={formik.handleSubmit}
          style={{ display: 'flex', flex: 1, flexDirection: 'column' }}
          noValidate
        >
          <DesktopContainer>
            <CloseButton
              variant='default'
              size='xs'
              onClick={onClose}
              aria-label='Close popup'
              type='button'
            >
              <CloseIcon />
            </CloseButton>
          </DesktopContainer>
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
              <Typography variant='text-sm' weight='medium' color={colors.text.secondary}>
                {tCalculator('input1Title')}
              </Typography>
              <Dropdown
                variant='dropdown'
                label=''
                placeholder={tCalculator('placeholder1')}
                items={[]}
                value={formik.values.input1}
                onChange={val => formik.setFieldValue('input1', val)}
              />
            </DropdownWrapper>
            <DropdownWrapper>
              <Typography variant='text-sm' weight='medium' color={colors.text.secondary}>
                {tCalculator('input2Title')}
              </Typography>
              <Dropdown
                variant='dropdown'
                label=''
                placeholder={tCalculator('placeholder2')}
                items={[]}
                value={formik.values.input2}
                onChange={val => formik.setFieldValue('input2', val)}
              />
            </DropdownWrapper>

            <DateRangeWrapper>
              <DateLabels>
                <DateLabel>
                  <Typography variant='text-sm' weight='medium' color={colors.text.secondary}>
                    {tCalculator('input3Title')}
                  </Typography>
                </DateLabel>
                <DateLabel>
                  <Typography variant='text-sm' weight='medium' color={colors.text.secondary}>
                    {tCalculator('input4Title')}
                  </Typography>
                </DateLabel>
              </DateLabels>
              <DateRangeBox>
                <DateField>
                  <DateInputRow
                    onClick={() => openNativePicker(startInputRef)}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') openNativePicker(startInputRef);
                    }}
                    aria-label={tCalculator('input3Title')}
                  >
                    <CalendarIcon />
                    <input
                      ref={startInputRef}
                      id='start-date'
                      name='startDate'
                      type='date'
                      value={formik.values.startDate}
                      onChange={e => {
                        formik.handleChange(e);
                        if (formik.values.endDate && e.target.value > formik.values.endDate) {
                          formik.setFieldValue('endDate', e.target.value);
                        }
                      }}
                      onBlur={formik.handleBlur}
                    />
                  </DateInputRow>
                </DateField>
                <DateField>
                  <DateInputRow
                    onClick={() => openNativePicker(endInputRef)}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') openNativePicker(endInputRef);
                    }}
                    aria-label={tCalculator('input4Title')}
                  >
                    <CalendarIcon />
                    <input
                      ref={endInputRef}
                      id='end-date'
                      name='endDate'
                      type='date'
                      min={formik.values.startDate || undefined}
                      value={formik.values.endDate}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </DateInputRow>
                </DateField>
              </DateRangeBox>
            </DateRangeWrapper>

            <DropdownWrapper>
              <Typography variant='text-sm' weight='medium' color={colors.text.secondary}>
                {tCalculator('input5Title')}
              </Typography>
              <Dropdown
                variant='input'
                label=''
                items={[]}
                value={formik.values.input5}
                onChange={val => formik.setFieldValue('input5', val)}
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
              <DesktopContainer>
                <ButtonWrapper>
                  <Button
                    variant='primary'
                    size='md'
                    type='submit'
                    backgroundOpacity={0.2}
                    disabled={formik.isSubmitting}
                    style={{ color: colors.text.black }}
                  >
                    {formik.isSubmitting ? '...' : tCalculator('button')}
                  </Button>
                </ButtonWrapper>
              </DesktopContainer>
              <MobileContainer>
                <Button
                  variant='primary'
                  size='lg'
                  type='submit'
                  backgroundOpacity={0.2}
                  disabled={formik.isSubmitting}
                  style={{ color: colors.text.black, width: '100%' }}
                >
                  {formik.isSubmitting ? '...' : tCalculator('button')}
                </Button>
              </MobileContainer>
            </LastSection>
          </Container>
        </form>
      </Popup>
    </Overlay>
  );
};

export default CalculatorPopup;
