import React from 'react';
import styled from 'styled-components';
import { useTranslations } from 'use-intl';

import DropCheckIcon from '@/icons/DropCheckIcon';
import { colors } from '@/styles/colors';

import AsteriskIcon from '../icons/AsteriskIcon';
import DropArrowIcon from '../icons/DropArrowIcon';

import Typography from './Typography';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 320px;
`;

const Title = styled.div`
  display: flex;
  gap: 2px;
`;

const InputContainer = styled.button.attrs({ type: 'button' })<{ $open?: boolean }>`
  padding: 6px 10px;
  border-radius: 8px;
  ${props =>
    props.$open
      ? `
        border: 2px solid transparent;
        background: linear-gradient(${colors.background.light}, ${colors.background.light}) padding-box,
        linear-gradient(93.55deg, #662D91 21.82%, #302E9C 110.55%) border-box;
      `
      : `border: 1px solid ${colors.border.primary}; background: transparent;`}
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: inherit;
  width: 100%;
  &:focus {
    outline: none;
    border: 2px solid transparent;
    background:
      linear-gradient(${colors.background.light}, ${colors.background.light}) padding-box,
      linear-gradient(93.55deg, #662d91 21.82%, #302e9c 110.55%) border-box;
  }
`;

const DropdownContainer = styled.div`
  margin-top: 2px;
  padding: 4px 6px 1px 6px;
  border: 1px solid ${colors.border.light};
  border-radius: 8px;
  max-height: 256px;
  overflow-y: auto;
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
  items: string[];
};

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  const tDropdown = useTranslations('Dropdown');
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [selected, setSelected] = React.useState<string | null>(null);

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
        <Title>
          <Typography variant='text-sm' weight='medium' color={colors.text.secondary}>
            {tDropdown('title')}
          </Typography>
          <AsteriskIcon />
        </Title>
        <InputContainer $open={open} aria-expanded={open} onClick={toggle}>
          <Typography
            variant='text-md'
            color={selected ? colors.text.primary : colors.text.disabled}
          >
            {selected ?? tDropdown('placeholder')}
          </Typography>
          <DropArrowIcon />
        </InputContainer>
        {open && (
          <DropdownContainer>
            {items.map(item => (
              <Item
                key={item}
                $selected={selected === item}
                onClick={() => {
                  setSelected(item);
                  setOpen(false);
                }}
                aria-pressed={selected === item}
              >
                <Typography variant='text-md' color={colors.text.primary} weight='medium'>
                  {item}
                </Typography>
                {selected === item ? <DropCheckIcon /> : null}
              </Item>
            ))}
          </DropdownContainer>
        )}
      </Container>
    </>
  );
};

export default Dropdown;
