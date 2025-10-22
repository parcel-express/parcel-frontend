'use client';
import React, { useState } from 'react';
import styled from 'styled-components';

import DropArrowIcon from '@/icons/DropArrowIcon';
import { colors } from '@/styles/colors';

import { Typography } from './Typography';

type CountryCode = {
  code: string;
  prefix: string;
};

const countryCodes: CountryCode[] = [
  { code: 'GE', prefix: '+995' },
  { code: 'US', prefix: '+1' },
  { code: 'UK', prefix: '+44' },
  { code: 'RU', prefix: '+7' },
];

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const Label = styled.label`
  display: flex;
  gap: 4px;
`;

const PhoneContainer = styled.div`
  display: flex;
  border: 1px solid ${colors.border.primary};
  border-radius: 8px;
  background: ${colors.background.white};
  box-shadow:
    0px 1px 2px 0px rgba(16, 24, 40, 0.05),
    0px -2px 0px 0px rgba(16, 24, 40, 0.05) inset,
    0px 0px 0px 1px rgba(16, 24, 40, 0.18) inset;
  &:focus-within {
    border: 1px solid transparent;
    background:
      linear-gradient(${colors.background.white}, ${colors.background.white}) padding-box,
      linear-gradient(93.55deg, ${colors.brand.primary} 21.82%, ${colors.brand.secondary} 110.55%)
        border-box;
  }
`;

const PrefixButton = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  border: none !important;
  background: transparent;
  cursor: pointer;
  position: relative;
  border: 1px solid ${colors.border.primary};
`;

const PrefixDropdown = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  background: ${colors.background.white};
  z-index: 10;
  min-width: 120px;
  padding: 4px 6px;
  max-height: 256px;
  overflow-y: auto;
  border: 1px solid ${colors.border.primary};
  border-radius: 8px;
  margin-top: 4px;
`;

const PrefixOption = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  padding: 8px 12px;
  border: none;
  background: none;
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  &:hover {
    background: ${colors.background.light};
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 8px 12px;
  border: none;
  outline: none;
  font-size: 14px;
  font-family: inherit;
  background: transparent;
  color: ${colors.text.primary};
  &::placeholder {
    color: ${colors.text.lighter};
  }
`;

type PhoneInputProps = {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  required?: boolean;
};

const PhoneInput: React.FC<PhoneInputProps> = ({
  value,
  onChange,
  label,
  placeholder = '000 000 000',
  required = false,
}) => {
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(
    () => countryCodes[0] ?? { code: 'GE', prefix: '+995' }
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <InputWrapper>
      {label && (
        <Label>
          <Typography variant='text-sm' color={colors.text.black} weight='medium'>
            {label}
          </Typography>
          {required && (
            <Typography variant='text-sm' color={colors.brand.primary} weight='medium'>
              *
            </Typography>
          )}
        </Label>
      )}
      <PhoneContainer>
        <PrefixButton
          type='button'
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
        >
          <Typography variant='text-md' color={colors.text.black} weight='medium'>
            {selectedCountry.code}
          </Typography>
          <DropArrowIcon />
          <PrefixDropdown $isOpen={isDropdownOpen}>
            {countryCodes.map(country => (
              <PrefixOption
                key={country.code}
                type='button'
                onClick={() => {
                  setSelectedCountry(country);
                  setIsDropdownOpen(false);
                }}
              >
                <Typography variant='text-sm' color={colors.text.black} weight='medium'>
                  {country.code}
                </Typography>
                <Typography variant='text-sm' color={colors.text.secondary} weight='regular'>
                  {country.prefix}
                </Typography>
              </PrefixOption>
            ))}
          </PrefixDropdown>
        </PrefixButton>
        <Input
          type='tel'
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
        />
      </PhoneContainer>
    </InputWrapper>
  );
};

export default PhoneInput;
