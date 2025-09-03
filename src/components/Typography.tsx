import React from 'react';
import styled, { css } from 'styled-components';

export type TypographyVariant =
  | 'display-2xl'
  | 'display-xl'
  | 'display-lg'
  | 'display-md'
  | 'display-sm'
  | 'display-xs'
  | 'text-xl'
  | 'text-lg'
  | 'text-md'
  | 'text-sm'
  | 'text-xs';

export type TypographyWeight = 'regular' | 'medium' | 'semibold' | 'bold';

export type TypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';

interface TypographyProps {
  variant: TypographyVariant;
  weight?: TypographyWeight;
  color?: string;
  children: React.ReactNode;
  as?: TypographyElement;
  className?: string;
}

const variantStyles = {
  'display-2xl': css`
    font-size: 72px;
    line-height: 90px;
    letter-spacing: -1.44px;
  `,
  'display-xl': css`
    font-size: 60px;
    line-height: 72px;
    letter-spacing: -1.2px;
  `,
  'display-lg': css`
    font-size: 48px;
    line-height: 60px;
    letter-spacing: -0.96px;
  `,
  'display-md': css`
    font-size: 38px;
    line-height: 44px;
    letter-spacing: -0.72px;
  `,
  'display-sm': css`
    font-size: 30px;
    line-height: 38px;
  `,
  'display-xs': css`
    font-size: 24px;
    line-height: 32px;
  `,
  'text-xl': css`
    font-size: 20px;
    line-height: 30px;
  `,
  'text-lg': css`
    font-size: 18px;
    line-height: 28px;
  `,
  'text-md': css`
    font-size: 16px;
    line-height: 24px;
  `,
  'text-sm': css`
    font-size: 14px;
    line-height: 20px;
  `,
  'text-xs': css`
    font-size: 12px;
    line-height: 18px;
  `,
};

const weightStyles = {
  regular: css`
    font-weight: 400;
  `,
  medium: css`
    font-weight: 500;
  `,
  semibold: css`
    font-weight: 600;
  `,
  bold: css`
    font-weight: 700;
  `,
};

const StyledText = styled.div<{
  $variant: TypographyVariant;
  $weight: TypographyWeight;
  $color?: string;
}>`
  color: ${props => props.$color || '#181d27'};
  margin: 0;

  ${props => variantStyles[props.$variant]}
  ${props => weightStyles[props.$weight]}
`;

export const Typography: React.FC<TypographyProps> = ({
  variant,
  weight = 'regular',
  color,
  children,
  as = 'p',
  className,
}) => {
  return (
    <StyledText
      as={as}
      $variant={variant}
      $weight={weight}
      {...(color && { $color: color })}
      className={className}
    >
      {children}
    </StyledText>
  );
};

// Convenient pre-configured components for common use cases
export const Heading1 = ({
  children,
  weight = 'bold',
  ...props
}: Omit<TypographyProps, 'variant' | 'as'> & { weight?: TypographyWeight }) => (
  <Typography variant='display-xl' weight={weight} as='h1' {...props}>
    {children}
  </Typography>
);

export const Heading2 = ({
  children,
  weight = 'semibold',
  ...props
}: Omit<TypographyProps, 'variant' | 'as'> & { weight?: TypographyWeight }) => (
  <Typography variant='display-lg' weight={weight} as='h2' {...props}>
    {children}
  </Typography>
);

export const Heading3 = ({
  children,
  weight = 'semibold',
  ...props
}: Omit<TypographyProps, 'variant' | 'as'> & { weight?: TypographyWeight }) => (
  <Typography variant='display-md' weight={weight} as='h3' {...props}>
    {children}
  </Typography>
);

export const Heading4 = ({
  children,
  weight = 'semibold',
  ...props
}: Omit<TypographyProps, 'variant' | 'as'> & { weight?: TypographyWeight }) => (
  <Typography variant='display-sm' weight={weight} as='h4' {...props}>
    {children}
  </Typography>
);

export const Heading5 = ({
  children,
  weight = 'semibold',
  ...props
}: Omit<TypographyProps, 'variant' | 'as'> & { weight?: TypographyWeight }) => (
  <Typography variant='display-xs' weight={weight} as='h5' {...props}>
    {children}
  </Typography>
);

export const Heading6 = ({
  children,
  weight = 'semibold',
  ...props
}: Omit<TypographyProps, 'variant' | 'as'> & { weight?: TypographyWeight }) => (
  <Typography variant='text-xl' weight={weight} as='h6' {...props}>
    {children}
  </Typography>
);

export const BodyLarge = ({
  children,
  weight = 'regular',
  ...props
}: Omit<TypographyProps, 'variant' | 'as'> & { weight?: TypographyWeight }) => (
  <Typography variant='text-lg' weight={weight} as='p' {...props}>
    {children}
  </Typography>
);

export const BodyMedium = ({
  children,
  weight = 'regular',
  ...props
}: Omit<TypographyProps, 'variant' | 'as'> & { weight?: TypographyWeight }) => (
  <Typography variant='text-md' weight={weight} as='p' {...props}>
    {children}
  </Typography>
);

export const BodySmall = ({
  children,
  weight = 'regular',
  ...props
}: Omit<TypographyProps, 'variant' | 'as'> & { weight?: TypographyWeight }) => (
  <Typography variant='text-sm' weight={weight} as='p' {...props}>
    {children}
  </Typography>
);

export const Caption = ({
  children,
  weight = 'regular',
  ...props
}: Omit<TypographyProps, 'variant' | 'as'> & { weight?: TypographyWeight }) => (
  <Typography variant='text-xs' weight={weight} as='span' {...props}>
    {children}
  </Typography>
);

export default Typography;
