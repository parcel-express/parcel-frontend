import React from 'react';
import styled from 'styled-components';

import DropCheckIcon from '@/icons/DropCheckIcon';
import { colors } from '@/styles/colors';

import AsteriskIcon from '../icons/AsteriskIcon';
import DropArrowIcon from '../icons/DropArrowIcon';

import { Typography } from './Typography';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

const Title = styled.div`
  display: flex;
  gap: 2px;
`;

const InputContainer = styled.button.attrs({ type: 'button' })<{
  $open?: boolean;
  $padding?: string;
}>`
  padding: ${p => p.$padding ?? '12px 16px'};
  border-radius: 8px;
  ${props =>
    props.$open
      ? `
      
        border: 1px solid transparent;
        background: linear-gradient(${colors.background.light}, ${colors.background.light}) padding-box,
        linear-gradient(93.55deg, ${colors.brand.primary} 21.82%, ${colors.brand.secondary} 110.55%) border-box;
      `
      : `border: 1px solid ${colors.border.primary};`}
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  cursor: pointer;
  color: inherit;
  width: 100%;
  background: white;
  box-shadow:
    0px 1px 2px 0px rgba(16, 24, 40, 0.05),
    0px -2px 0px 0px rgba(16, 24, 40, 0.05) inset,
    0px 0px 0px 1px rgba(16, 24, 40, 0.18) inset;
  &:focus {
    outline: none;
    border: 1px solid transparent;
    background:
      linear-gradient(${colors.background.light}, ${colors.background.light}) padding-box,
      linear-gradient(93.55deg, ${colors.brand.primary} 21.82%, ${colors.brand.secondary} 110.55%)
        border-box;
  }
`;

const DropdownContainer = styled.div<{ $fitContent?: boolean; $alignRight?: boolean }>`
  position: absolute;
  top: 100%;
  ${p =>
    p.$alignRight
      ? `
    right: 0;
    left: auto;
  `
      : `
    left: 0;
    right: auto;
  `}
  ${p =>
    p.$fitContent
      ? `
    min-width: 100%;
    width: max-content;
    max-width: 90vw;
  `
      : `
    left: 0;
    right: 0;        
    width: auto;
  `}
  z-index: 1000;
  margin-top: 2px;
  padding: 4px 6px 4px 6px;
  border: 1px solid ${colors.border.light};
  border-radius: 8px;
  max-height: 256px;
  overflow-y: auto;
  background: white;
`;

const Item = styled.button.attrs({ type: 'button' })<{ $selected?: boolean; $padding?: string }>`
  padding: ${p => p.$padding ?? '8px 12px'};
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: ${props => (props.$selected ? colors.state.hover.lighter : 'transparent')};
  border: none;
  text-align: left;
  white-space: nowrap;
  &:hover {
    background-color: ${colors.background.light};
  }
`;

const PlainInput = styled.input<{ $placeholderColor?: 'lighter' | 'secondary'; $padding?: string }>`
  padding: ${p => p.$padding ?? '8px 12px'};
  border-radius: 8px;
  border: 1px solid ${colors.border.primary};
  background: white;
  width: 100%;
  font-size: 14px;
  color: ${colors.text.primary};
  box-shadow:
    0px 1px 2px 0px rgba(16, 24, 40, 0.05),
    0px -2px 0px 0px rgba(16, 24, 40, 0.05) inset,
    0px 0px 0px 1px rgba(16, 24, 40, 0.18) inset;
  &::placeholder {
    color: ${p =>
      p.$placeholderColor === 'secondary' ? colors.text.secondary : colors.text.lighter};
  }
  &:focus {
    outline: none;
    border: 1px solid transparent;
    background:
      linear-gradient(${colors.background.light}, ${colors.background.light}) padding-box,
      linear-gradient(93.55deg, ${colors.brand.primary} 21.82%, ${colors.brand.secondary} 110.55%)
        border-box;
  }
`;

const Value = styled.span`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

type DropdownProps = {
  items: { label: string; value: string }[];
  onChange: (value: string) => void;
  value: string;
  placeholder: string;
  label: string;
  variant?: 'dropdown' | 'input';
  menuFitContent?: boolean;
  placeholderColor?: 'lighter' | 'secondary';
  required?: boolean;
  inputPadding?: string;
};
const Dropdown: React.FC<DropdownProps> = ({
  items,
  onChange,
  value,
  placeholder,
  label,
  variant = 'dropdown',
  menuFitContent = false,
  placeholderColor = 'lighter',
  required = false,
  inputPadding,
}) => {
  const [open, setOpen] = React.useState(false);
  const [alignRight, setAlignRight] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const listRef = React.useRef<HTMLDivElement | null>(null);
  const listId = React.useId();
  const toggle = () => setOpen(prev => !prev);

  const selectedItem = React.useMemo(() => items.find(i => i.value === value), [items, value]);

  React.useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (!open) return;
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [open]);

  React.useEffect(() => {
    if (!open) return;

    const updateAlignment = () => {
      if (!containerRef.current || !listRef.current) return;
      const padding = 8;
      const triggerRect = containerRef.current.getBoundingClientRect();
      const menuWidth = listRef.current.scrollWidth;
      if (triggerRect.left + menuWidth > window.innerWidth - padding) {
        setAlignRight(true);
      } else {
        setAlignRight(false);
      }
    };

    const rAF = requestAnimationFrame(updateAlignment);

    window.addEventListener('resize', updateAlignment);
    window.addEventListener('scroll', updateAlignment, true);

    return () => {
      cancelAnimationFrame(rAF);
      window.removeEventListener('resize', updateAlignment);
      window.removeEventListener('scroll', updateAlignment, true);
    };
  }, [open]);

  if (variant === 'input') {
    return (
      <Container>
        {label && (
          <Title>
            <Typography variant='text-sm' weight='medium' color={colors.text.secondary}>
              {label}
            </Typography>
            {required && <AsteriskIcon />}
          </Title>
        )}
        <PlainInput
          placeholder={placeholder}
          $placeholderColor={placeholderColor}
          $padding={inputPadding ?? ''}
          value={value}
          onChange={e => onChange(e.target.value)}
          aria-label={label || placeholder}
          required={required}
        />
      </Container>
    );
  }

  return (
    <>
      <Container ref={containerRef}>
        {label && (
          <Title>
            <Typography variant='text-sm' weight='medium' color={colors.text.secondary}>
              {label}
            </Typography>
            {required && <AsteriskIcon />}
          </Title>
        )}
        <InputContainer
          $open={open}
          $padding={inputPadding ?? ''}
          aria-expanded={open}
          aria-haspopup='listbox'
          aria-controls={open ? listId : undefined}
          onClick={toggle}
        >
          <Value>
            <Typography
              variant='text-sm'
              color={
                selectedItem
                  ? colors.text.primary
                  : placeholderColor === 'secondary'
                    ? colors.text.secondary
                    : colors.text.lighter
              }
            >
              {selectedItem ? selectedItem.label : placeholder}
            </Typography>
          </Value>
          <DropArrowIcon />
        </InputContainer>
        {open && (
          <DropdownContainer
            ref={listRef}
            role='listbox'
            id={listId}
            $fitContent={menuFitContent}
            $alignRight={alignRight}
          >
            {items.map(item => {
              const isSelected = item.value === value;
              return (
                <Item
                  key={item.value}
                  role='option'
                  aria-selected={isSelected}
                  $selected={isSelected}
                  onClick={() => {
                    onChange(item.value);
                    setOpen(false);
                  }}
                >
                  <Typography
                    variant='text-sm'
                    color={colors.text.primary}
                    weight={isSelected ? 'medium' : 'regular'}
                  >
                    {item.label}
                  </Typography>
                  {isSelected && <DropCheckIcon />}
                </Item>
              );
            })}
          </DropdownContainer>
        )}
      </Container>
    </>
  );
};

export default Dropdown;
