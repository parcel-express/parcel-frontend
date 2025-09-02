import * as React from 'react';
import styled from 'styled-components';

const StyledSvg = styled.svg`
  &:hover path {
    fill: #fff;
  }
`;
const XIcon = () => (
  <StyledSvg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none'>
    <path
      fill='#E9D7FE'
      fillRule='evenodd'
      d='m15.945 23-5.549-7.91L3.449 23H.509l8.583-9.769L.51 1h7.546l5.23 7.455L19.839 1h2.94l-8.185 9.316L23.491 23h-7.546Zm3.273-2.23H17.24L4.718 3.23h1.98l5.014 7.023.867 1.219 6.64 9.298Z'
      clipRule='evenodd'
    />
  </StyledSvg>
);
export default XIcon;
