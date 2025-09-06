import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { colors } from '../styles/colors';

export type ButtonVariant =
  | 'transparent'
  | 'default'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'disabled';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'mdHero';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  disabled?: boolean;
  focused?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const sizeStyles = {
  xs: css`
    padding: 12px 20px;
    font-size: 12px;
    line-height: 100%;
    border-radius: 8px;
    gap: 4px;

    .icon {
      width: 20px;
      height: 20px;
    }
  `,
  sm: css`
    padding: 10px 14px;
    font-size: 14px;
    line-height: 20px;
    border-radius: 14px;
    gap: 4px;

    .icon {
      width: 20px;
      height: 20px;
    }
  `,
  md: css`
    padding: 17px 43px;
    font-size: 14px;
    line-height: 100%;
    border-radius: 14px;
    gap: 6px;

    .icon {
      width: 20px;
      height: 20px;
    }
  `,
  mdHero: css`
    padding: 12px 36px;
    font-size: 14px;
    line-height: 100%;
    border-radius: 8px;
    gap: 8px;
  `,
  lg: css`
    padding: 12px 18px;
    font-size: 14px;
    line-height: 24px;
    border-radius: 8px;
    gap: 6px;
    width: 100%;
    .icon {
      width: 20px;
      height: 20px;
    }
  `,
  xl: css`
    padding: 16px 22px;
    font-size: 18px;
    line-height: 28px;
    border-radius: 14px;
    gap: 8px;

    .icon {
      width: 24px;
      height: 24px;
    }
  `,
};

const variantStyles = {
  transparent: css`
    background: ${colors.background.transparent};
    border: none;
    padding: 0;
  `,
  default: css`
    background: ${colors.background.transparent};
    color: ${colors.text.white};
    border: 2px solid ${colors.border.white};
    box-shadow:
      0px 0px 0px 1px inset ${colors.shadow.inset},
      0px -2px 0px 0px inset ${colors.shadow.light},
      0px 1px 2px 0px ${colors.shadow.light};

    &:hover {
      background: ${colors.state.hover.background};
      box-shadow:
        0px 0px 0px 1px inset ${colors.shadow.inset},
        0px -2px 0px 0px inset ${colors.shadow.light},
        0px 2px 4px 0px ${colors.shadow.medium};
    }

    &:active {
      background: ${colors.state.hover.backgroundMedium};
      box-shadow:
        0px 0px 0px 1px inset ${colors.shadow.inset},
        0px -1px 0px 0px inset ${colors.shadow.light},
        0px 1px 2px 0px ${colors.shadow.light};
      transition: all 0.1s ease-in-out;
    }
  `,
  primary: css`
    background:
      linear-gradient(
        90deg,
        ${colors.overlay.gradientDark} 0%,
        ${colors.overlay.gradientDark} 100%
      ),
      linear-gradient(
        104.863deg,
        ${colors.brand.gradientStart} 21.817%,
        ${colors.brand.gradientEnd} 110.55%
      );
    color: ${colors.text.white};
    border: 2px solid ${colors.border.white};
    box-shadow:
      0px 0px 0px 1px inset ${colors.shadow.inset},
      0px -2px 0px 0px inset ${colors.shadow.light},
      0px 1px 2px 0px ${colors.shadow.light};

    &:hover {
      background:
        linear-gradient(
          90deg,
          ${colors.overlay.gradientMedium} 0%,
          ${colors.overlay.gradientMedium} 100%
        ),
        linear-gradient(
          104.863deg,
          ${colors.brand.gradientStart} 21.817%,
          ${colors.brand.gradientEnd} 110.55%
        );
      box-shadow:
        0px 0px 0px 1px inset ${colors.shadow.inset},
        0px -2px 0px 0px inset ${colors.shadow.light},
        0px 4px 8px 0px ${colors.shadow.darker},
        0px 0px 0px 0px ${colors.shadow.ring};
    }

    &:active {
      background:
        linear-gradient(
          90deg,
          ${colors.overlay.gradientDarker} 0%,
          ${colors.overlay.gradientDarker} 100%
        ),
        linear-gradient(
          104.863deg,
          ${colors.brand.gradientStart} 21.817%,
          ${colors.brand.gradientEnd} 110.55%
        );
      box-shadow:
        0px 0px 0px 1px inset ${colors.shadow.inset},
        0px -1px 0px 0px inset ${colors.shadow.light},
        0px 2px 4px 0px ${colors.shadow.dark};
      transition: all 0.1s ease-in-out;
    }
  `,
  secondary: css`
    background: ${colors.background.white};
    color: ${colors.text.black};
    border: 1px solid ${colors.border.primary};

    &:hover {
      background: ${colors.background.light};
      box-shadow:
        0px 0px 0px 1px inset ${colors.shadow.inset},
        0px -2px 0px 0px inset ${colors.shadow.light},
        0px 2px 4px 0px ${colors.shadow.medium};
      border-color: ${colors.border.secondary};
    }

    &:active {
      background: ${colors.background.lighter};
      box-shadow:
        0px 0px 0px 1px inset ${colors.shadow.inset},
        0px -1px 0px 0px inset ${colors.shadow.light},
        0px 1px 2px 0px ${colors.shadow.light};
      border-color: ${colors.border.tertiary};
      transition: all 0.1s ease-in-out;
    }
  `,
  tertiary: css`
    background: ${colors.background.light};
    color: ${colors.text.dark};
    border: 1px solid ${colors.border.primary};
    box-shadow:
      0px 0px 0px 1px inset ${colors.shadow.inset},
      0px -2px 0px 0px inset ${colors.shadow.light},
      0px 1px 2px 0px ${colors.shadow.light};

    &:hover {
      background: ${colors.background.lighter};
      box-shadow:
        0px 0px 0px 1px inset ${colors.shadow.inset},
        0px -2px 0px 0px inset ${colors.shadow.light},
        0px 2px 4px 0px ${colors.shadow.medium};
      border-color: ${colors.border.secondary};
    }

    &:active {
      background: ${colors.background.lightest};
      box-shadow:
        0px 0px 0px 1px inset ${colors.shadow.inset},
        0px -1px 0px 0px inset ${colors.shadow.light},
        0px 1px 2px 0px ${colors.shadow.light};
      border-color: ${colors.border.tertiary};
      transition: all 0.1s ease-in-out;
    }
  `,
  disabled: css`
    background: ${colors.background.white};
    color: ${colors.text.disabled};
    border: 1px solid ${colors.border.light};
    box-shadow: 0px 1px 2px 0px ${colors.shadow.light};
    cursor: not-allowed;
    transform: none;

    .icon {
      opacity: 0.5;
    }

    &:hover {
      background: ${colors.background.white};
      transform: none;
    }

    &:active {
      background: ${colors.background.white};
      transform: none;
    }
  `,
};

const focusedStyles = css`
  box-shadow:
    0px 1px 2px 0px ${colors.shadow.light},
    0px 0px 0px 2px ${colors.background.white},
    0px 0px 0px 4px ${colors.state.focus.ring};
`;

const pulseAnimation = css`
  @keyframes pulse {
    0% {
      box-shadow:
        0px 0px 0px 1px inset ${colors.shadow.inset},
        0px -2px 0px 0px inset ${colors.shadow.light},
        0px 1px 2px 0px ${colors.shadow.light},
        0px 0px 0px 0px ${colors.shadow.ringTransparent};
    }
    50% {
      box-shadow:
        0px 0px 0px 1px inset ${colors.shadow.inset},
        0px -2px 0px 0px inset ${colors.shadow.light},
        0px 1px 2px 0px ${colors.shadow.light},
        0px 0px 0px 4px ${colors.shadow.ringLight};
    }
    100% {
      box-shadow:
        0px 0px 0px 1px inset ${colors.shadow.inset},
        0px -2px 0px 0px inset ${colors.shadow.light},
        0px 1px 2px 0px ${colors.shadow.light},
        0px 0px 0px 0px ${colors.shadow.ringTransparent};
    }
  }
`;

const rippleEffect = css`
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: ${colors.overlay.light};
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition:
      width 0.3s ease,
      height 0.3s ease;
  }

  &:active::after {
    width: 300px;
    height: 300px;
    transition:
      width 0.1s ease,
      height 0.1s ease;
  }
`;

const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $focused: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-style: normal;
  border: none;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  position: relative;
  user-select: none;

  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant }) => variantStyles[$variant]}
  ${({ $focused }) => $focused && focusedStyles}
  ${rippleEffect}
  ${pulseAnimation}
  
  &:disabled {
    ${variantStyles.disabled}
  }

  &:not(:disabled):active {
    transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const TextWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  size = 'md',
  leftIcon,
  rightIcon,
  disabled = false,
  focused = false,
  onClick,
  type = 'button',
  ...props
}) => {
  const effectiveVariant = disabled ? 'disabled' : variant;

  return (
    <StyledButton
      type={type}
      $variant={effectiveVariant}
      $size={size}
      $focused={focused && !disabled}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {leftIcon && <IconWrapper className='icon'>{leftIcon}</IconWrapper>}
      <TextWrapper>{children}</TextWrapper>
      {rightIcon && <IconWrapper className='icon'>{rightIcon}</IconWrapper>}
    </StyledButton>
  );
};

export default Button;
