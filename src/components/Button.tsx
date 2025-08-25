import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

export type ButtonVariant = 'default' | 'primary' | 'secondary' | 'tertiary' | 'disabled';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

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
    padding: 8px 12px;
    font-size: 14px;
    line-height: 20px;
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
    border-radius: 8px;
    gap: 4px;
    
    .icon {
      width: 20px;
      height: 20px;
    }
  `,
  md: css`
    padding: 10px 16px;
    font-size: 16px;
    line-height: 24px;
    border-radius: 8px;
    gap: 6px;
    
    .icon {
      width: 20px;
      height: 20px;
    }
  `,
  lg: css`
    padding: 12px 18px;
    font-size: 16px;
    line-height: 24px;
    border-radius: 8px;
    gap: 6px;
    
    .icon {
      width: 20px;
      height: 20px;
    }
  `,
  xl: css`
    padding: 16px 22px;
    font-size: 18px;
    line-height: 28px;
    border-radius: 10px;
    gap: 8px;
    
    .icon {
      width: 24px;
      height: 24px;
    }
  `,
};

const variantStyles = {
  default: css`
    background: transparent;
    color: #ffffff;
    border: 2px solid rgba(255, 255, 255, 0.12);
    box-shadow: 0px 0px 0px 1px inset rgba(10, 13, 18, 0.18), 
                0px -2px 0px 0px inset rgba(10, 13, 18, 0.05),
                0px 1px 2px 0px rgba(10, 13, 18, 0.05);
    
    &:hover {
      background: rgba(255, 255, 255, 0.05);
      transform: translateY(-1px);
      box-shadow: 0px 0px 0px 1px inset rgba(10, 13, 18, 0.18), 
                  0px -2px 0px 0px inset rgba(10, 13, 18, 0.05),
                  0px 2px 4px 0px rgba(10, 13, 18, 0.08);
    }
    
    &:active {
      background: rgba(255, 255, 255, 0.12);
      transform: translateY(0px) scale(0.98);
      box-shadow: 0px 0px 0px 1px inset rgba(10, 13, 18, 0.18), 
                  0px -1px 0px 0px inset rgba(10, 13, 18, 0.05),
                  0px 1px 2px 0px rgba(10, 13, 18, 0.05);
      transition: all 0.1s ease-in-out;
    }
  `,
  primary: css`
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), 
                linear-gradient(104.863deg, rgb(102, 45, 145) 21.817%, rgb(48, 46, 156) 110.55%);
    color: #ffffff;
    border: 2px solid rgba(255, 255, 255, 0.12);
    box-shadow: 0px 0px 0px 1px inset rgba(10, 13, 18, 0.18), 
                0px -2px 0px 0px inset rgba(10, 13, 18, 0.05),
                0px 1px 2px 0px rgba(10, 13, 18, 0.05);
    
    &:hover {
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), 
                  linear-gradient(104.863deg, rgb(102, 45, 145) 21.817%, rgb(48, 46, 156) 110.55%);
      transform: translateY(-2px);
      box-shadow: 0px 0px 0px 1px inset rgba(10, 13, 18, 0.18), 
                  0px -2px 0px 0px inset rgba(10, 13, 18, 0.05),
                  0px 4px 8px 0px rgba(10, 13, 18, 0.12),
                  0px 0px 0px 0px rgba(158, 119, 237, 0.4);
    }
    
    &:active {
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), 
                  linear-gradient(104.863deg, rgb(102, 45, 145) 21.817%, rgb(48, 46, 156) 110.55%);
      transform: translateY(0px) scale(0.96);
      box-shadow: 0px 0px 0px 1px inset rgba(10, 13, 18, 0.18), 
                  0px -1px 0px 0px inset rgba(10, 13, 18, 0.05),
                  0px 2px 4px 0px rgba(10, 13, 18, 0.1);
      transition: all 0.1s ease-in-out;
    }
  `,
  secondary: css`
    background: #ffffff;
    color: #414651;
    border: 1px solid #d5d7da;
    box-shadow: 0px 0px 0px 1px inset rgba(10, 13, 18, 0.18), 
                0px -2px 0px 0px inset rgba(10, 13, 18, 0.05),
                0px 1px 2px 0px rgba(10, 13, 18, 0.05);
    
    &:hover {
      background: #f9fafb;
      transform: translateY(-1px);
      box-shadow: 0px 0px 0px 1px inset rgba(10, 13, 18, 0.18), 
                  0px -2px 0px 0px inset rgba(10, 13, 18, 0.05),
                  0px 2px 4px 0px rgba(10, 13, 18, 0.08);
      border-color: #c1c4c9;
    }
    
    &:active {
      background: #f3f4f6;
      transform: translateY(0px) scale(0.98);
      box-shadow: 0px 0px 0px 1px inset rgba(10, 13, 18, 0.18), 
                  0px -1px 0px 0px inset rgba(10, 13, 18, 0.05),
                  0px 1px 2px 0px rgba(10, 13, 18, 0.05);
      border-color: #b8bcc5;
      transition: all 0.1s ease-in-out;
    }
  `,
  tertiary: css`
    background: #f9fafb;
    color: #252b37;
    border: 1px solid #d5d7da;
    box-shadow: 0px 0px 0px 1px inset rgba(10, 13, 18, 0.18), 
                0px -2px 0px 0px inset rgba(10, 13, 18, 0.05),
                0px 1px 2px 0px rgba(10, 13, 18, 0.05);
    
    &:hover {
      background: #f3f4f6;
      transform: translateY(-1px);
      box-shadow: 0px 0px 0px 1px inset rgba(10, 13, 18, 0.18), 
                  0px -2px 0px 0px inset rgba(10, 13, 18, 0.05),
                  0px 2px 4px 0px rgba(10, 13, 18, 0.08);
      border-color: #c1c4c9;
    }
    
    &:active {
      background: #e5e7eb;
      transform: translateY(0px) scale(0.98);
      box-shadow: 0px 0px 0px 1px inset rgba(10, 13, 18, 0.18), 
                  0px -1px 0px 0px inset rgba(10, 13, 18, 0.05),
                  0px 1px 2px 0px rgba(10, 13, 18, 0.05);
      border-color: #b8bcc5;
      transition: all 0.1s ease-in-out;
    }
  `,
  disabled: css`
    background: #ffffff;
    color: #a4a7ae;
    border: 1px solid #e9eaeb;
    box-shadow: 0px 1px 2px 0px rgba(10, 13, 18, 0.05);
    cursor: not-allowed;
    transform: none;
    
    .icon {
      opacity: 0.5;
    }
    
    &:hover {
      background: #ffffff;
      transform: none;
    }
    
    &:active {
      background: #ffffff;
      transform: none;
    }
  `,
};

const focusedStyles = css`
  box-shadow: 0px 1px 2px 0px rgba(10, 13, 18, 0.05),
              0px 0px 0px 2px #ffffff,
              0px 0px 0px 4px #9e77ed;
  
  &:hover {
    transform: translateY(-2px) !important;
  }
  
  &:active {
    transform: translateY(0px) scale(0.97) !important;
  }
`;

const pulseAnimation = css`
  @keyframes pulse {
    0% {
      box-shadow: 0px 0px 0px 1px inset rgba(10, 13, 18, 0.18), 
                  0px -2px 0px 0px inset rgba(10, 13, 18, 0.05),
                  0px 1px 2px 0px rgba(10, 13, 18, 0.05),
                  0px 0px 0px 0px rgba(158, 119, 237, 0);
    }
    50% {
      box-shadow: 0px 0px 0px 1px inset rgba(10, 13, 18, 0.18), 
                  0px -2px 0px 0px inset rgba(10, 13, 18, 0.05),
                  0px 1px 2px 0px rgba(10, 13, 18, 0.05),
                  0px 0px 0px 4px rgba(158, 119, 237, 0.2);
    }
    100% {
      box-shadow: 0px 0px 0px 1px inset rgba(10, 13, 18, 0.18), 
                  0px -2px 0px 0px inset rgba(10, 13, 18, 0.05),
                  0px 1px 2px 0px rgba(10, 13, 18, 0.05),
                  0px 0px 0px 0px rgba(158, 119, 237, 0);
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
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.3s ease, height 0.3s ease;
  }
  
  &:active::after {
    width: 300px;
    height: 300px;
    transition: width 0.1s ease, height 0.1s ease;
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
  font-family: 'Inter', sans-serif;
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
  padding: 0 2px;
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
      {leftIcon && (
        <IconWrapper className="icon">
          {leftIcon}
        </IconWrapper>
      )}
      <TextWrapper>
        {children}
      </TextWrapper>
      {rightIcon && (
        <IconWrapper className="icon">
          {rightIcon}
        </IconWrapper>
      )}
    </StyledButton>
  );
};

export default Button;