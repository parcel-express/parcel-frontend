import React from 'react';
import styled from 'styled-components';
import { useTranslations } from 'use-intl';

import SearchIcon from '@/icons/SearchIcon';
import { colors } from '@/styles/colors';

import Button from './Button';
import { DesktopContainer, MobileContainer } from './Responsive';
import Typography from './Typography';

const inputSizes = {
  md: {
    padding: '8px 12px',
  },
  xs: {
    paddingNoIcon: '4px 3px 4px 11px',
    paddingWithIcon: '12px 14px',
  },
} as const;

const StyledInput = styled.input<{ $size?: InputSize }>`
  border: none;
  outline: none;
  width: 100%;
  &::placeholder {
    opacity: 0.5;
  }
`;

const LeftIconWrapper = styled.div<{ $size?: InputSize }>`
  display: flex;
  align-items: center;
  margin-right: 8px;
  pointer-events: none;
  svg {
    display: block;
  }
`;

export type InputSize = keyof typeof inputSizes;

const Input = styled.div<{ $size?: InputSize; $hasLeftIcon?: boolean }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: ${({ $size, $hasLeftIcon }) =>
    $size === 'xs'
      ? $hasLeftIcon
        ? inputSizes.xs.paddingWithIcon
        : inputSizes.xs.paddingNoIcon
      : inputSizes.md.padding};
  width: 100%;
  background-color: ${colors.background.white};
  border: 1px solid ${colors.border.primary};
  border-radius: 8px;
`;

const SearchInput: React.FC<{
  size?: InputSize;
  placeholder?: string;
  mode?: 'button' | 'icon';
  onIconClick?: () => void;
  leftIcon?: boolean;
}> = ({ size = 'md', placeholder, mode = 'button', leftIcon = true }) => {
  const tHero = useTranslations('Hero');
  const resolvedPlaceholder = placeholder ?? tHero('placeholder');
  const renderContent = () => (
    <Input $size={size} $hasLeftIcon={leftIcon}>
      {leftIcon && (
        <LeftIconWrapper $size={size} aria-hidden>
          <SearchIcon />
        </LeftIconWrapper>
      )}
      <StyledInput placeholder={resolvedPlaceholder} type='text' $size={size} />
      {mode === 'button' && (
        <Button variant='primary' size={size === 'xs' ? 'xsSearch' : 'mdSearch'}>
          <Typography
            variant={size === 'xs' ? 'text-xs' : 'text-sm'}
            weight='bold'
            color={colors.text.white}
          >
            {tHero('button')}
          </Typography>
        </Button>
      )}
    </Input>
  );

  return (
    <>
      <DesktopContainer>{renderContent()}</DesktopContainer>
      <MobileContainer>{renderContent()}</MobileContainer>
    </>
  );
};

export default SearchInput;
