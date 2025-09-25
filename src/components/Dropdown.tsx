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

const InputContainer = styled.button.attrs({ type: 'button' })<{ $open?: boolean }>`
  padding: 8px 12px;
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
  cursor: pointer;
  color: inherit;
  width: 100%;
  background: white;
  &:focus {
    outline: none;
    border: 1px solid transparent;
    background:
      linear-gradient(${colors.background.light}, ${colors.background.light}) padding-box,
      linear-gradient(93.55deg, ${colors.brand.primary} 21.82%, ${colors.brand.secondary} 110.55%)
        border-box;
  }
`;

const DropdownContainer = styled.div<{ $fitContent?: boolean }>`
  position: absolute;
  top: 100%;
  ${p =>
    p.$fitContent
      ? `
    left: 0;
    right: auto;        
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

const Item = styled.button.attrs({ type: 'button' })<{ $selected?: boolean }>`
  padding: 8px;
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

const PlainInput = styled.input`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid ${colors.border.primary};
  background: white;
  width: 100%;
  font: inherit;
  color: ${colors.text.primary};
  &::placeholder {
    color: ${colors.text.disabled};
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

type DropdownProps = {
  items: { label: string; value: string }[];
  onChange: (value: string) => void;
  value: string;
  placeholder: string;
  label: string;
  variant?: 'dropdown' | 'input';
  menuFitContent?: boolean;
};

const Dropdown: React.FC<DropdownProps> = ({
  items,
  onChange,
  value,
  placeholder,
  label,
  variant = 'dropdown',
  menuFitContent = false,
}) => {
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const listId = React.useId();
  const toggle = () => setOpen(prev => !prev);

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

  if (variant === 'input') {
    return (
      <Container>
        {label && (
          <Title>
            <Typography variant='text-sm' weight='medium' color={colors.text.secondary}>
              {label}
            </Typography>
            <AsteriskIcon />
          </Title>
        )}
        <PlainInput
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
          aria-label={label || placeholder}
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
            <AsteriskIcon />
          </Title>
        )}
        <InputContainer
          $open={open}
          aria-expanded={open}
          aria-haspopup='listbox'
          aria-controls={open ? listId : undefined}
          onClick={toggle}
        >
          <Typography variant='text-md' color={value ? colors.text.primary : colors.text.disabled}>
            {items.find(item => item.value === value)?.label ?? placeholder}
          </Typography>
          <DropArrowIcon />
        </InputContainer>
        {open && (
          <DropdownContainer role='listbox' id={listId} $fitContent={menuFitContent}>
            {items.map(item => (
              <Item
                key={item.value}
                $selected={value === item.value}
                onClick={() => {
                  setOpen(false);
                  onChange(item.value);
                }}
                role='option'
                aria-selected={value === item.value}
              >
                <Typography variant='text-md' color={colors.text.primary} weight='medium'>
                  {item?.label}
                </Typography>
                {value === item.value ? <DropCheckIcon /> : null}
              </Item>
            ))}
          </DropdownContainer>
        )}
      </Container>
    </>
  );
};

export default Dropdown;
