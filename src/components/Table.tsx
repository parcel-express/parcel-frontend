import React from 'react';
import styled from 'styled-components';

import { colors } from '@/styles/colors';

import { Typography } from './Typography';

const TableContainer = styled.div`
  width: 100%;
  border: 1px solid ${colors.border.light};
  border-radius: 12px;
  padding: 0 84px 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${colors.background.white};
  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled.span`
  display: block;
  border-bottom: 1px solid ${colors.border.light};
  padding: 13px 0 13px 24px;
  @media (max-width: 1080px) {
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

const data = [
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

const titles = {
  firstTitle: 'ქალაქი',
  secondTitle: 'ჩაბარება / აღება',
} as const;

const Table = () => {
  return (
    <TableContainer>
      <Typography variant='text-xs' weight='semibold' color={colors.text.lighter}>
        <Title>{titles.firstTitle}</Title>
      </Typography>
      <Typography variant='text-xs' weight='semibold' color={colors.text.lighter}>
        <Title>{titles.secondTitle}</Title>
      </Typography>

      {data.map((item, index) => (
        <React.Fragment key={index}>
          <Typography variant='text-sm' weight='regular' color={colors.text.tertiary}>
            <FirstRow>{item.firstrow}</FirstRow>
          </Typography>
          <Typography variant='text-sm' weight='regular' color={colors.text.tertiary}>
            <SecondRow>{item.secondrow}</SecondRow>
          </Typography>
        </React.Fragment>
      ))}
    </TableContainer>
  );
};

export default Table;
