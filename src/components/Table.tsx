'use client';
import React from 'react';
import styled from 'styled-components';

import ClockIcon from '@/icons/ClockIcon';
import LocationIcon from '@/icons/LocationIcon';
import { colors } from '@/styles/colors';

import { DesktopContainer, MobileContainer } from './Responsive';
import { Typography } from './Typography';

const DesktopGrid = styled.div<{ columns?: number }>`
  width: 100%;
  border: 1px solid ${colors.border.light};
  border-radius: 12px;
  display: grid;
  grid-template-columns: repeat(${p => p.columns ?? 2}, minmax(60px, 1fr));
  gap: 0;
  background-color: ${colors.background.white};
`;

const Title = styled.span`
  display: block;
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
  shouldForwardProp: prop => prop !== 'first',
})<{ first?: boolean }>`
  display: block;
  border-bottom: 1px solid ${colors.border.light};
  padding: 18px 0 18px ${p => (p.first ? '20px' : '24px')};
  white-space: normal;
`;

/* Mobile card styles */
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

const defaultData: string[][] = [
  ['თბილისი', 'ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი, პარასკევი, შაბათი', '₾10'],
  ['ბათუმი', 'ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი, პარასკევი', '₾12'],
  ['თბილისი', 'პარასკევი', '₾8'],
  ['ქუთაისი', 'ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი', '₾9'],
  ['რუსთავი', 'ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი, პარასკევი', '₾11'],
  ['გორი', 'ორშაბათი, სამშაბათი, ოთხშაბათი', '₾7'],
  ['ზუგდიდი', 'ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი, პარასკევი', '₾10'],
];

const defaultTitles: string[] = ['ქალაქი', 'ჩაბარება / აღება', 'ფასი'];

export type TableProps = {
  details?: string[][];
  columnTitles?: string[];
  rows?: number;
  mobileShowTitles?: boolean;
  columns?: number;
};

const Table: React.FC<TableProps> = ({
  details = defaultData,
  columnTitles = defaultTitles,
  rows,
  mobileShowTitles = false,
  columns,
}) => {
  const inferred = columnTitles?.length ?? 0;
  const cols = Math.max(1, columns ?? (inferred > 0 ? inferred : 2));
  const displayData = rows != null ? details.slice(0, rows) : details;

  return (
    <>
      <DesktopContainer>
        <DesktopGrid columns={cols}>
          {Array.from({ length: cols }).map((_, ci) => (
            <Typography
              key={`h-${ci}`}
              variant='text-xs'
              weight='semibold'
              color={colors.text.tertiary}
            >
              <Title>{columnTitles[ci] ?? ''}</Title>
            </Typography>
          ))}

          {displayData.map((row, index) =>
            Array.from({ length: cols }).map((_, ci) => {
              const value = row[ci] ?? '';
              return (
                <Typography
                  key={`${index}-${ci}`}
                  variant='text-sm'
                  weight='regular'
                  color={colors.text.tertiary}
                >
                  <Cell first={ci === 0}>{value}</Cell>
                </Typography>
              );
            })
          )}
        </DesktopGrid>
      </DesktopContainer>

      <MobileContainer>
        <MobileList>
          {displayData.map((row, idx) => (
            <Card key={idx}>
              {Array.from({ length: cols }).map((_, ci) => {
                const value = row[ci] ?? '';
                const showIcon = !mobileShowTitles && ci === 0;
                const showClock = !mobileShowTitles && ci === 1;
                const Section = ci === 0 ? CardTop : CardBody;
                return (
                  <Section key={`${idx}-m-${ci}`}>
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
                        <Typography variant='text-xs' weight='semibold' color={colors.text.lighter}>
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
                  </Section>
                );
              })}
            </Card>
          ))}
        </MobileList>
      </MobileContainer>
    </>
  );
};

export default Table;
