'use client';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { Value } from '@wojtekmaj/react-daterange-picker/src/shared/types.js';
import { useTranslations } from 'next-intl';
import React, { useState, useEffect, useRef } from 'react';
import 'react-calendar/dist/Calendar.css';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import CalendarIcon from '@/icons/CalendarIcon';
import LeftArrowIcon from '@/icons/LeftArrowIcon';
import RightArrowIcon from '@/icons/RightArrowIcon';
import { colors } from '@/styles/colors';

import Button from './Button';

const Wrapper = styled.div`
  .react-daterange-picker {
    border: none;
    background: transparent;
  }

  .react-daterange-picker__wrapper {
    background: ${colors.background.white};
    border: 1px solid ${colors.border.primary};
    border-radius: 8px;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 2px;
  }
  @media (max-width: 1080px) {
    width: 238px;
    .react-daterange-picker__wrapper {
      width: 208px;
      padding: 8px 8px;
    }
  }
  .react-calendar__navigation__prev2-button,
  .react-calendar__navigation__next2-button {
    display: none;
  }

  .react-daterange-picker__inputGroup {
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    padding: 0;
    color: ${colors.text.secondary};
  }

  .react-daterange-picker__calendar-button {
    order: -1;
    padding: 0;
  }

  .react-daterange-picker__clear-button {
    order: 2;
  }

  .react-daterange-picker__calendar {
    border-radius: 12px;
    border: 1px solid ${colors.border.primary};
    margin-top: 8px;
  }

  /* Inner calendar */
  .react-daterange-picker__calendar .react-calendar {
    border: none;
    border-radius: 0;
    padding: 20px 24px;
    border-radius: 12px;
  }

  .react-calendar__navigation {
    margin-bottom: 12px;
    display: flex;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: ${colors.state.hover.lighter};
    border-radius: 9999px;
  }

  .react-calendar__navigation button {
    color: ${colors.text.secondary};
    font-weight: 600;
    font-size: 16px;
    min-width: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-calendar__month-view__weekdays__weekday {
    font-size: 14px;
    font-weight: 500;
    color: ${colors.text.secondary} !important;
    text-align: center;
  }

  .react-calendar__month-view__weekdays__weekday:nth-child(6) abbr,
  .react-calendar__month-view__weekdays__weekday:nth-child(7) abbr {
    color: ${colors.text.secondary} !important;
  }
  .react-calendar__month-view__weekdays__weekday abbr {
    text-transform: none;
    font-weight: 500;
    text-decoration: none;
    display: inline-block;
    overflow: hidden;
    padding: 3px 1px;
  }

  .react-calendar__tile,
  .react-calendar__month-view__days__day,
  .react-calendar__month-view__days__day--neighboringMonth,
  .react-calendar__month-view__days__day--weekend {
    color: ${colors.text.secondary} !important;
  }

  .react-calendar__tile {
    border-radius: 9999px;
    text-align: center;
    font-size: 14px;
    margin: 4px 0 4px 0;
    padding: 10px 8px;
  }

  /* --- Remove grey range background & active fill --- */
  .react-calendar__tile--range,
  .react-calendar__tile--rangeStart,
  .react-calendar__tile--rangeEnd,
  .react-calendar__tile--rangeBothEnds,
  .react-calendar__tile--active {
    background: transparent !important;
  }

  .react-calendar__tile--rangeStart,
  .react-calendar__tile--rangeEnd,
  .react-calendar__tile--rangeBothEnds {
    position: relative;
    font-weight: 600;
    color: ${colors.text.dark} !important;
  }
  .react-calendar__tile--rangeStart::after,
  .react-calendar__tile--rangeEnd::after,
  .react-calendar__tile--rangeBothEnds::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 4px;
    transform: translateX(-50%);
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${colors.brand.primary};
  }

  .react-calendar__tile--now {
    background: ${colors.background.white};
    color: ${colors.text.dark} !important;
    font-weight: 600;
  }

  .react-calendar__tile--active {
    background: transparent;
    border-radius: 9999px;
  }

  .react-calendar__tile--range {
    background: transparent;
    color: ${colors.text.secondary};
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: ${colors.state.hover.lighter};
  }

  .react-calendar__tile--hover {
    background: transparent;
  }

  .react-calendar__navigation__prev-button svg,
  .react-calendar__navigation__next-button svg {
    stroke: ${colors.text.secondary};
    display: flex;
    align-items: center;
    justify-self: center;
  }
  .react-calendar__navigation__prev-button,
  .react-calendar__navigation__next-button {
    width: 40px;
    height: 44px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .react-calendar__tile:disabled,
  .react-calendar__month-view__days__day--neighboringMonth {
    color: ${colors.text.lighter} !important;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
  border-top: 1px solid ${colors.border.primary};
  background: ${colors.background.white};
  padding: 16px;
  border-radius: 0 0 12px 12px;
  @media screen (max-width: 1080px) {
    gap: 4px;
  }
`;

interface SharedDateRangePickerProps {
  onChange?: (value: Value) => void;
  value?: Value;
}

const DatePicker: React.FC<SharedDateRangePickerProps> = ({ onChange, value }) => {
  const [date, setDate] = useState<Value>(value ?? [new Date(), new Date()]);
  const [isOpen, setIsOpen] = useState(false);
  const [calendarContainer, setCalendarContainer] = useState<HTMLElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const Calendar = useTranslations('Calendar');
  const shouldCloseRef = useRef(false);

  useEffect(() => {
    if (isOpen && wrapperRef.current) {
      const el = wrapperRef.current.querySelector('.react-daterange-picker__calendar');
      if (el) setCalendarContainer(el as HTMLElement);
    } else if (!isOpen) {
      setCalendarContainer(null);
    }
  }, [isOpen]);

  const handleChange = (newDate: Value) => {
    setDate(newDate);
  };

  return (
    <Wrapper ref={wrapperRef}>
      <DateRangePicker
        onChange={handleChange}
        value={date}
        format='dd.MM.yyyy'
        calendarIcon={<CalendarIcon />}
        clearIcon={null}
        calendarProps={{
          prevLabel: <LeftArrowIcon />,
          nextLabel: <RightArrowIcon />,
          prev2Label: null,
          next2Label: null,
        }}
        closeCalendar={false}
        isOpen={isOpen}
        onCalendarOpen={() => setIsOpen(true)}
        onCalendarClose={() => {
          if (shouldCloseRef.current) {
            shouldCloseRef.current = false;
            setIsOpen(false);
          } else {
            setIsOpen(true);
          }
        }}
      />
      {calendarContainer &&
        createPortal(
          <ActionButtons>
            <Button
              variant='secondary'
              size='md'
              onClick={() => {
                const now = new Date();
                const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                const todayRange: Value = [today, today];
                setDate(todayRange);
              }}
            >
              {Calendar('button1')}
            </Button>
            <Button
              variant='primary'
              size='md'
              onClick={() => {
                shouldCloseRef.current = true;
                onChange?.(date);
                setIsOpen(false);
              }}
            >
              {Calendar('button2')}
            </Button>
          </ActionButtons>,
          calendarContainer
        )}
    </Wrapper>
  );
};

export default DatePicker;
