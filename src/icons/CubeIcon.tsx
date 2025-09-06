import * as React from 'react';

const CubeIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={175}
    height={164}
    viewBox='0 0 175 164'
    fill='none'
    aria-hidden
  >
    <defs>
      <linearGradient id='cube-small-top' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stopColor='#8A49D2' />
        <stop offset='100%' stopColor='#5C2AA0' />
      </linearGradient>
      <linearGradient id='cube-small-left' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stopColor='#5B2C90' />
        <stop offset='100%' stopColor='#37206A' />
      </linearGradient>
      <linearGradient id='cube-small-right' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stopColor='#6F39A8' />
        <stop offset='100%' stopColor='#2F1F60' />
      </linearGradient>
      <filter id='cube-small-shadow' x='-20%' y='-20%' width='140%' height='140%'>
        <feDropShadow dx='0' dy='8' stdDeviation='12' floodColor='#000' floodOpacity='0.18' />
      </filter>
    </defs>

    <polygon
      points='87.5,12 147.5,48 87.5,84 27.5,48'
      fill='url(#cube-small-top)'
      filter='url(#cube-small-shadow)'
    />
    <polygon points='27.5,48 87.5,84 87.5,150 27.5,114' fill='url(#cube-small-left)' />
    <polygon points='147.5,48 87.5,84 87.5,150 147.5,114' fill='url(#cube-small-right)' />
    <polyline points='27.5,48 87.5,12 147.5,48' fill='none' stroke='#3A2358' strokeOpacity='0.12' />
  </svg>
);

export default CubeIcon;
