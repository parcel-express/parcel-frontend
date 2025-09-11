'use client';
import React from 'react';
import styled from 'styled-components';

import ClockIcon from '@/icons/ClockIcon';
import LocationIcon from '@/icons/LocationIcon';
import { colors } from '@/styles/colors';

import { DesktopContainer, MobileContainer } from './Responsive';
import { Typography } from './Typography';

const DesktopGrid = styled.div`
  width: 100%;
  border: 1px solid ${colors.border.light};
  border-radius: 12px;
  padding: 0 84px 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${colors.background.white};
`;

const Title = styled.span`
  display: block;
  border-bottom: 1px solid ${colors.border.light};
  padding: 13px 0 13px 24px;
  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

const FirstRow = styled.span`
  display: block;
  border-bottom: 1px solid ${colors.border.light};
  padding: 18px 0 18px 20px;
`;

const SecondRow = styled.span`
  display: block;
  border-bottom: 1px solid ${colors.border.light};
  padding: 18px 0 18px 24px;
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
`;

const DescriptionWapper = styled.div`
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
const defaultData = [
  {
    firstrow: 'თბილისი',
    secondrow: 'ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი, პარასკევი, შაბათი',
  },
  { firstrow: 'ბათუმი', secondrow: 'ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი, პარასკევი' },
  { firstrow: 'თბილისი', secondrow: 'პარასკევი' },
  { firstrow: 'ქუთაისი', secondrow: 'ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი' },
  { firstrow: 'რუსთავი', secondrow: 'ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი, პარასკევი' },
  { firstrow: 'გორი', secondrow: 'ორშაბათი, სამშაბათი, ოთხშაბათი' },
  { firstrow: 'ზუგდიდი', secondrow: 'ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი, პარასკევი' },
];

const defaultTitles = {
  firstTitle: 'ქალაქი',
  secondTitle: 'ჩაბარება / აღება',
} as const;

export type TableDetail = {
  firstrow: string;
  secondrow: string;
};

export type TableTitles = {
  firstTitle?: string;
  secondTitle?: string;
};

export type TableProps = {
  details?: TableDetail[];
  titles?: TableTitles;
  rows?: number;
};

const Table: React.FC<TableProps> = ({ details = defaultData, titles = defaultTitles, rows }) => {
  const displayData = rows != null ? details.slice(0, rows) : details;

  return (
    <>
      <DesktopContainer>
        <DesktopGrid>
          <Typography variant='text-xs' weight='semibold' color={colors.text.lighter}>
            <Title>{titles.firstTitle}</Title>
          </Typography>
          <Typography variant='text-xs' weight='semibold' color={colors.text.lighter}>
            <Title>{titles.secondTitle}</Title>
          </Typography>

          {displayData.map((item, index) => (
            <React.Fragment key={index}>
              <Typography variant='text-sm' weight='regular' color={colors.text.tertiary}>
                <FirstRow>{item.firstrow}</FirstRow>
              </Typography>
              <Typography variant='text-sm' weight='regular' color={colors.text.tertiary}>
                <SecondRow>{item.secondrow}</SecondRow>
              </Typography>
            </React.Fragment>
          ))}
        </DesktopGrid>
      </DesktopContainer>
      <MobileContainer>
        <MobileList>
          {displayData.map((item, idx) => (
            <Card key={idx}>
              <CardTop>
                <LocationIcon />
                <Typography variant='text-sm' weight='bold' color={colors.text.primary}>
                  {item.firstrow}
                </Typography>
              </CardTop>
              <CardBody>
                <IconWrapper>
                  <ClockIcon />
                </IconWrapper>
                <DescriptionWapper>
                  <Typography variant='text-xs' weight='regular' color={colors.text.primary}>
                    <TitleMobile>{titles.secondTitle}</TitleMobile>
                  </Typography>
                  <Typography variant='text-sm' weight='bold' color={colors.text.primary}>
                    {item.secondrow}
                  </Typography>
                </DescriptionWapper>
              </CardBody>
            </Card>
          ))}
        </MobileList>
      </MobileContainer>
    </>
  );
};

export default Table;
