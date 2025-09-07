import React from 'react';
import styled from 'styled-components';
import { useTranslations } from 'use-intl';

import { colors } from '@/styles/colors';

import Button from './Button';
import { DesktopContainer, MobileContainer } from './Responsive';
import Typography from './Typography';

const inputSizes = {
  md: {
    padding: '9px 13px 9px 21px',
  },
  xs: {
    padding: '4px 3px 4px 11px',
  },
} as const;

export type InputSize = keyof typeof inputSizes;

const Input = styled.div<{ $size?: InputSize }>`
  display: flex;
  justify-content: space-between;
  padding: ${({ $size }) => inputSizes[$size ?? 'md'].padding};
  align-items: center;
  width: 100%;
  background-color: ${colors.background.white};
  border: 1px solid ${colors.border.primary};
  border-radius: 8px;
`;

const StyledInput = styled.input<{ $size?: InputSize }>`
  border: none;
  outline: none;
  width: 100%;
  &::placeholder {
    opacity: 0.5;
  }
`;

const SearchInput: React.FC<{ size?: InputSize }> = ({ size = 'md' }) => {
  const tHero = useTranslations('Hero');
  return (
    <>
      <DesktopContainer>
        <Input $size={size}>
          <StyledInput placeholder={tHero('placeholder')} type='text' />
          <Button variant='primary' size='mdSearch'>
            <Typography variant='text-sm' weight='bold' color={colors.text.white}>
              {tHero('button')}
            </Typography>
          </Button>
        </Input>
      </DesktopContainer>
      <MobileContainer>
        <Input $size={size}>
          <StyledInput placeholder={tHero('placeholder')} type='text' />
          <Button variant='primary' size='xsSearch'>
            <Typography variant='text-xs' weight='bold' color={colors.text.white}>
              {tHero('button')}
            </Typography>
          </Button>
        </Input>
      </MobileContainer>
    </>
  );
};

export default SearchInput;
