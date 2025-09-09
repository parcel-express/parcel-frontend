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
      
        border: 2px solid transparent;
        background: linear-gradient(${colors.background.light}, ${colors.background.light}) padding-box,
        linear-gradient(93.55deg, #662D91 21.82%, #302E9C 110.55%) border-box;
      `
      : `border: 2px solid ${colors.border.primary};`}
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: inherit;
  width: 100%;
  background: white;
  &:focus {
    outline: none;
    border: 2px solid transparent;
    background:
      linear-gradient(${colors.background.light}, ${colors.background.light}) padding-box,
      linear-gradient(93.55deg, #662d91 21.82%, #302e9c 110.55%) border-box;
  }
`;

const DropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
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
  &:hover {
    background-color: ${colors.background.light};
  }
`;

type DropdownProps = {
  items: { label: string; value: string }[];
  onChange: (value: string) => void;
  value: string;
  placeholder: string;
  label: string;
};

const Dropdown: React.FC<DropdownProps> = ({ items, onChange, value, placeholder, label }) => {
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
          <DropdownContainer role='listbox' id={listId}>
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
