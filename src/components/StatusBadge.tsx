import React from 'react';
import styled, { css } from 'styled-components';

export type StatusVariant = 'pending' | 'delayed' | 'cancelled' | 'delivered' | 'inProgress';

const STYLES: Record<StatusVariant, { bg: string; border: string; text: string; dot: string }> = {
  pending: { bg: '#FFFAEB', border: '#FEDF89', text: '#B54708', dot: '#F79009' },
  delayed: { bg: '#FEF3F2', border: '#FECDCA', text: '#B42318', dot: '#F04438' },
  cancelled: { bg: '#FEF3F2', border: '#FECDCA', text: '#B42318', dot: '#F04438' },
  delivered: { bg: '#ECFDF3', border: '#ABEFC6', text: '#067647', dot: '#17B26A' },
  inProgress: { bg: '#ECFDF3', border: '#ABEFC6', text: '#067647', dot: '#17B26A' },
};

const Badge = styled.span<{ $v: StatusVariant }>`
  ${({ $v }) => {
    const s = STYLES[$v];
    return css`
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 2px 4px;
      border: 1px solid ${s.border};
      background: ${s.bg};
      color: ${s.text};
      font-size: 12px;
      font-weight: 500;
      line-height: 1;
      border-radius: 4px;
      white-space: nowrap;
      user-select: none;
      &::before {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: ${s.dot};
        flex-shrink: 0;
      }
    `;
  }}
`;

interface StatusBadgeProps {
  variant: StatusVariant;
  label: string;
  title?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ variant, label, title }) => (
  <Badge $v={variant} role='status' aria-label={label} title={title || label}>
    {label}
  </Badge>
);

export default React.memo(StatusBadge);
