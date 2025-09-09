import React from 'react';
import styled from 'styled-components';

import { colors } from '@/styles/colors';

const TableContainer = styled.div`
  border: 1px solid ${colors.border.light};
  width: 100%;
  border-radius: 14px;
  padding: 0 84px 0 0;
`;

const Table = () => {
  return <TableContainer>Table</TableContainer>;
};

export default Table;
