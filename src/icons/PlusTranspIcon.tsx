import * as React from 'react';
type Props = React.SVGProps<SVGSVGElement> & { color?: string };
const PlusTranspIcon = ({ color = '#fff', ...props }: Props) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={25} height={25} fill='none' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M12.5 5.018v14m-7-7h14'
    />
  </svg>
);
export default PlusTranspIcon;
