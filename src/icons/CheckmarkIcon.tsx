// ...existing code...
import * as React from 'react';
const CheckmarkIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width={62} height={54} fill='none'>
    <path
      fill='url(#checkmark-grad)'
      d='m.39 44.073 8.4 4.505 7.094 3.805 1.863.982 1.047.57 1.527-1.914 4.427-5.515L62 0 19.234 40.76 0 30.65l.35 12.14.04 1.283Z'
    />
    <defs>
      <linearGradient
        id='checkmark-grad'
        x1={13.204}
        x2={71.338}
        y1={16.293}
        y2={20.439}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#662D91' />
        <stop offset={1} stopColor='#302E9C' />
      </linearGradient>
    </defs>
  </svg>
);
export default CheckmarkIcon;
// ...existing code...
