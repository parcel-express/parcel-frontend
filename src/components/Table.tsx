'use client';
import { useTranslations } from 'next-intl';
import React from 'react';
import styled from 'styled-components';

import ArrowsIcon from '@/icons/ArrowsIcon';
import ClockIcon from '@/icons/ClockIcon';
import LocationIcon from '@/icons/LocationIcon';
import RightArrowIcon from '@/icons/RightArrowIcon';
import { colors } from '@/styles/colors';

import { DesktopContainer, MobileContainer } from './Responsive';
import { Typography } from './Typography';

const DesktopGrid = styled.div<{
  $columns?: number;
  $arrow?: boolean;
  $cornerStyle?: 'all' | 'bottom';
}>`
  width: 100%;
  border: 1px solid ${colors.border.light};
  border-radius: ${p => (p.$cornerStyle === 'bottom' ? '0 0 12px 12px' : '12px')};
  display: grid;
  grid-template-columns: ${p =>
    p.$arrow
      ? `repeat(${(p.$columns ?? 2) - 1}, minmax(60px, 1fr)) 48px`
      : `repeat(${p.$columns ?? 2}, minmax(60px, 1fr))`};
  gap: 0;
  background-color: ${colors.background.white};
`;

const Title = styled.span`
  display: flex;
  gap: 4px;
  align-items: center;
  border-bottom: 1px solid ${colors.border.light};
  padding: 13px 0 13px 24px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

const Cell = styled.span.withConfig({
  shouldForwardProp: prop => prop !== 'first' && prop !== 'withCheckbox',
})<{ first?: boolean; withCheckbox?: boolean }>`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${colors.border.light};
  min-height: 57px;
  padding: 0
    ${p => {
      if (!p.first) return '24px';
      return p.withCheckbox ? '16px' : '20px';
    }};
  white-space: normal;
`;

const MobileList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Card = styled.div`
  border: 1px solid ${colors.border.light};
  border-radius: 8px;
  background: ${colors.background.white};
  padding: 16px 0;
  @media screen and (max-width: 1080px) {
    padding: 16px 0 0 0;
  }
`;

const CardTop = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 0 0 16px 16px;
  border-bottom: 1px solid ${colors.border.light};
`;

const CardBody = styled.div`
  display: flex;
  gap: 4px;
  padding: 16px 0 0 16px;
  @media screen and (max-width: 1080px) {
    border-bottom: 1px solid ${colors.border.light};
    padding: 16px;
  }
  &:last-child {
    border-bottom: none;
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const TitleMobile = styled.span`
  display: block;
`;

const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
`;

const FirstCellInner = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 12px;
`;

const ArrowHeader = styled.span`
  display: block;
  border-bottom: 1px solid ${colors.border.light};
  padding: 22px 0;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;

const StyledCheckbox = styled.span<{ $checked: boolean }>`
  width: 20px;
  height: 20px;
  border: 2px solid ${colors.border.primary};
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${colors.background.white};
  transition:
    border-color 0.15s,
    background 0.15s;

  ${HiddenCheckbox}:focus-visible + & {
    outline: 2px solid ${colors.text.black};
    outline-offset: 2px;
  }

  ${p =>
    p.$checked &&
    `
    border-color: ${colors.text.black};
  `}
`;

const CheckboxWrapper = styled.label`
  position: relative;
  display: inline-flex;
  cursor: pointer;
`;

const RightArrowWrapper = styled.span`
  margin-left: auto;
  padding-right: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CenterCellArrow = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${colors.border.light};
  min-height: 56px;
  cursor: pointer;
`;

const MobileOrdersList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const OrderCard = styled.button`
  border: 1px solid ${colors.border.light};
  border-radius: 8px;
  background: ${colors.background.white};
  padding: 16px;
  cursor: pointer;
  outline: none;
  display: block;
`;

const OrderHeader = styled.header`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding-bottom: 12px;
  margin-bottom: 12px;
`;

const OrderId = styled.span`
  display: inline-flex;
`;

const OrderStatusWrap = styled.span`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

const RouteList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const RouteItem = styled.li`
  display: flex;
  gap: 8px;
  width: 100%;
`;

const RouteUserInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 26px;
`;

const RouteTexts = styled.span`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  border-top: 1px solid ${colors.border.light};
  padding-top: 20px;
`;

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const User = styled.div`
  display: flex;
  align-items: center;
`;

const UserAddress = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  &::before {
    content: '';
    position: absolute;
    left: -26px;
    top: 0;
    width: 16px;
    height: 16px;
    border: 2px solid ${colors.brand.gradientStart};
    background: ${colors.background.white};
    border-radius: 15px;
    box-sizing: border-box;
  }
  & + &::before {
    border-width: 1px;
    border-color: ${colors.brand.gradientStart};
  }
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    left: -18px;
    top: 16px;
    width: 1px;
    height: 100%;
    background: ${colors.text.black};
    opacity: 10%;
  }
`;

const Bullet = styled.span`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${colors.text.tertiary};
  display: inline-block;
  margin: 0 4px;
  opacity: 40%;
`;

const CheckIcon = () => (
  <svg width='14' height='14' viewBox='0 0 14 14' fill='none'>
    <path
      d='M11.2 3.5L5.75 9.8 3 6.9'
      stroke={colors.text.black}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const defaultData: React.ReactNode[][] = [];
const defaultTitles: string[] = [];

export type TableProps = {
  details?: React.ReactNode[][];
  columnTitles?: string[];
  rows?: number;
  mobileShowTitles?: boolean;
  columns?: number;
  showArrowsIcon?: boolean;
  showCheckbox?: boolean;
  showRightArrow?: boolean;
  selectedRows?: number[];
  onRowSelect?: (rowIndex: number, selected: boolean) => void;
  cornerStyle?: 'all' | 'bottom';
  mobileVariant?: 'default' | 'orders';
  onRightArrowClick?: (rowIndex: number) => void;
  onRowClick?: (rowIndex: number) => void;
};

const Table: React.FC<TableProps> = ({
  details = defaultData,
  columnTitles = defaultTitles,
  rows,
  mobileShowTitles = false,
  columns,
  showArrowsIcon = true,
  showCheckbox = false,
  showRightArrow = false,
  selectedRows,
  onRowSelect,
  cornerStyle = 'all',
  mobileVariant = 'default',
  onRightArrowClick,
  onRowClick,
}) => {
  const inferred = columnTitles?.length ?? 0;
  const dataCols = Math.max(1, columns ?? (inferred > 0 ? inferred : 2));
  const displayData = rows != null ? details.slice(0, rows) : details;
  const tOrders = useTranslations('Orders');

  const extraRight = showRightArrow ? 1 : 0;
  const totalCols = dataCols + extraRight;

  const isRowSelected = (i: number) => selectedRows?.includes(i) ?? false;

  const handleSelect = (rowIndex: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    onRowSelect?.(rowIndex, e.target.checked);
  };

  return (
    <>
      <DesktopContainer>
        <DesktopGrid $columns={totalCols} $arrow={showRightArrow} $cornerStyle={cornerStyle}>
          {/* Header */}
          {Array.from({ length: dataCols }).map((_, ci) => (
            <Typography
              key={`h-${ci}`}
              variant='text-xs'
              weight='semibold'
              color={colors.text.tertiary}
            >
              <Title>
                {columnTitles[ci] ?? ''}
                {showArrowsIcon && <ArrowsIcon />}
              </Title>
            </Typography>
          ))}
          {showRightArrow && (
            <Typography variant='text-xs' weight='semibold' color={colors.text.tertiary}>
              <ArrowHeader />
            </Typography>
          )}
          {/* Rows */}
          {displayData.map((row, rIndex) => (
            <React.Fragment key={`r-${rIndex}`}>
              {Array.from({ length: dataCols }).map((_, ci) => {
                const value = row[ci] ?? '';
                const isFirst = ci === 0;
                const checked = isRowSelected(rIndex);
                return (
                  <Typography
                    key={`${rIndex}-${ci}`}
                    variant='text-sm'
                    weight='regular'
                    color={colors.text.tertiary}
                  >
                    <Cell first={isFirst} withCheckbox={isFirst && showCheckbox}>
                      {isFirst && showCheckbox ? (
                        <FirstCellInner>
                          <CheckboxWrapper>
                            <HiddenCheckbox checked={checked} onChange={handleSelect(rIndex)} />
                            <StyledCheckbox $checked={checked}>
                              {checked && <CheckIcon />}
                            </StyledCheckbox>
                          </CheckboxWrapper>
                          <span>{value}</span>
                        </FirstCellInner>
                      ) : (
                        value
                      )}
                    </Cell>
                  </Typography>
                );
              })}
              {showRightArrow && (
                <CenterCellArrow
                  type='button'
                  aria-label='Open details'
                  onClick={() => onRightArrowClick?.(rIndex)}
                >
                  <RightArrowIcon />
                </CenterCellArrow>
              )}
            </React.Fragment>
          ))}
        </DesktopGrid>
      </DesktopContainer>

      <MobileContainer>
        {mobileVariant === 'default' && (
          <MobileList>
            {displayData.map((row, idx) => (
              <Card key={idx}>
                {Array.from({ length: dataCols }).map((_, ci) => {
                  const value = row[ci] ?? '';
                  const showIcon = !mobileShowTitles && ci === 0;
                  const showClock = !mobileShowTitles && ci === 1;
                  const Section = ci === 0 ? CardTop : CardBody;
                  return (
                    <Section key={`${idx}-m-${ci}`}>
                      {ci === 0 && showCheckbox && (
                        <IconWrapper style={{ display: 'flex', alignItems: 'center' }}>
                          <input
                            type='checkbox'
                            checked={isRowSelected(idx)}
                            onChange={handleSelect(idx)}
                          />
                        </IconWrapper>
                      )}
                      {showIcon && (
                        <IconWrapper>
                          <LocationIcon />
                        </IconWrapper>
                      )}
                      {showClock && (
                        <IconWrapper>
                          <ClockIcon />
                        </IconWrapper>
                      )}
                      <DescriptionWrapper>
                        {mobileShowTitles && (
                          <Typography
                            variant='text-xs'
                            weight='semibold'
                            color={colors.text.lighter}
                          >
                            <TitleMobile>{columnTitles[ci] ?? ''}</TitleMobile>
                          </Typography>
                        )}
                        <Typography
                          variant='text-sm'
                          weight={mobileShowTitles ? 'medium' : 'bold'}
                          color={colors.text.primary}
                        >
                          {value}
                        </Typography>
                      </DescriptionWrapper>
                      {ci === 0 && showRightArrow && (
                        <RightArrowWrapper>
                          <RightArrowIcon />
                        </RightArrowWrapper>
                      )}
                    </Section>
                  );
                })}
              </Card>
            ))}
          </MobileList>
        )}

        {mobileVariant === 'orders' && (
          <MobileOrdersList>
            {displayData.map((row, idx) => {
              const orderId = row[0];
              const label1 = row[1];
              const value1 = row[2];
              const label2 = row[3];
              const value2 = row[4];
              const status = row[5];
              return (
                <OrderCard
                  key={`ord-${idx}`}
                  onClick={() => onRowClick?.(idx)}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onRowClick?.(idx);
                    }
                  }}
                >
                  <OrderHeader>
                    <OrderId>
                      <Typography variant='text-sm' weight='medium' color={colors.text.primary}>
                        {orderId}
                      </Typography>
                    </OrderId>
                    <OrderStatusWrap>{status}</OrderStatusWrap>
                  </OrderHeader>

                  <RouteList>
                    <RouteItem>
                      <RouteUserInfos>
                        <UserAddress>
                          <User>
                            <Typography
                              variant='text-xs'
                              weight='medium'
                              color={colors.text.tertiary}
                              lineHeight='100%'
                            >
                              {tOrders('mobileCard.sender')}
                            </Typography>
                            <Bullet />
                            <Typography
                              variant='text-xs'
                              weight='medium'
                              color={colors.text.tertiary}
                              lineHeight='100%'
                            >
                              {label2}
                            </Typography>
                          </User>
                          <Typography
                            variant='text-sm'
                            weight='semibold'
                            color={colors.text.tertiary}
                            lineHeight='100%'
                          >
                            {tOrders('mobileCard.senderAddress')}
                          </Typography>
                        </UserAddress>
                        <UserAddress>
                          <User>
                            <Typography
                              variant='text-xs'
                              weight='medium'
                              color={colors.text.tertiary}
                              lineHeight='100%'
                            >
                              {tOrders('mobileCard.receiver')}
                            </Typography>
                            <Bullet />
                            <Typography
                              variant='text-xs'
                              weight='regular'
                              color={colors.text.tertiary}
                              lineHeight='100%'
                            >
                              {value2}
                            </Typography>
                          </User>
                          <Typography
                            variant='text-sm'
                            weight='semibold'
                            color={colors.text.tertiary}
                            lineHeight='100%'
                          >
                            {tOrders('mobileCard.receiverAddress')}
                          </Typography>
                        </UserAddress>
                      </RouteUserInfos>
                    </RouteItem>
                    <RouteItem>
                      <RouteTexts>
                        <DateWrapper>
                          <Typography
                            variant='text-xs'
                            weight='regular'
                            color={colors.text.tertiary}
                            lineHeight='100%'
                          >
                            {tOrders('mobileCard.orderDate')}
                          </Typography>
                          <Typography
                            variant='text-xs'
                            weight='regular'
                            color={colors.text.tertiary}
                            lineHeight='100%'
                          >
                            {label1}
                          </Typography>
                        </DateWrapper>
                        <DateWrapper>
                          <Typography
                            variant='text-xs'
                            weight='regular'
                            color={colors.text.tertiary}
                            lineHeight='100%'
                          >
                            {tOrders('mobileCard.pickupDate')}
                          </Typography>
                          <Typography
                            variant='text-xs'
                            weight='regular'
                            color={colors.text.tertiary}
                            lineHeight='100%'
                          >
                            {value1}
                          </Typography>
                        </DateWrapper>
                      </RouteTexts>
                    </RouteItem>
                  </RouteList>
                </OrderCard>
              );
            })}
          </MobileOrdersList>
        )}
      </MobileContainer>
    </>
  );
};

export default Table;
