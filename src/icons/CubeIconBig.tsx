import * as React from 'react';

const CubeIconBig = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={315}
    height={295}
    viewBox='0 0 315 295'
    fill='none'
    aria-hidden
  >
    <defs>
      <linearGradient id='cube-big-top' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stopColor='#8A49D2' />
        <stop offset='100%' stopColor='#5C2AA0' />
      </linearGradient>
      <linearGradient id='cube-big-left' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stopColor='#5B2C90' />
        <stop offset='100%' stopColor='#37206A' />
      </linearGradient>
      <linearGradient id='cube-big-right' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stopColor='#6F39A8' />
        <stop offset='100%' stopColor='#2F1F60' />
      </linearGradient>
      <filter id='cube-big-shadow' x='-20%' y='-20%' width='140%' height='140%'>
        <feDropShadow dx='0' dy='12' stdDeviation='18' floodColor='#000' floodOpacity='0.18' />
      </filter>
    </defs>

    <polygon
      points='157.5,16 247.5,68 157.5,120 67.5,68'
      fill='url(#cube-big-top)'
      filter='url(#cube-big-shadow)'
    />
    <polygon points='67.5,68 157.5,120 157.5,240 67.5,188' fill='url(#cube-big-left)' />
    <polygon points='247.5,68 157.5,120 157.5,240 247.5,188' fill='url(#cube-big-right)' />
    <polyline
      points='67.5,68 157.5,16 247.5,68'
      fill='none'
      stroke='#3A2358'
      strokeOpacity='0.12'
    />
  </svg>
);

export default CubeIconBig;
