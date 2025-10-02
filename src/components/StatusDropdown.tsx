import { useTranslations } from 'next-intl';
import React from 'react';

import Dropdown from './Dropdown';

export type StatusValue =
  | 'new'
  | 'activated'
  | 'in_progress'
  | 'expired'
  | 'cancelled'
  | 'continued'
  | 'updated'
  | 'occupied'
  | 'additional'
  | 'started'
  | 'temporary'
  | 'completed'
  | 'confirmed'
  | 'pending'
  | 'suspended'
  | 'introduced'
  | 'unnoticed';

type StatusKey =
  | 'status1'
  | 'status2'
  | 'status3'
  | 'status4'
  | 'status5'
  | 'status6'
  | 'status7'
  | 'status8'
  | 'status9'
  | 'status10'
  | 'status11'
  | 'status12'
  | 'status13'
  | 'status14'
  | 'status15'
  | 'status16'
  | 'status17';

const STATUS_KEYS: {
  key: StatusKey;
  value: StatusValue;
}[] = [
  { key: 'status1', value: 'new' },
  { key: 'status2', value: 'activated' },
  { key: 'status3', value: 'in_progress' },
  { key: 'status4', value: 'expired' },
  { key: 'status5', value: 'cancelled' },
  { key: 'status6', value: 'continued' },
  { key: 'status7', value: 'updated' },
  { key: 'status8', value: 'occupied' },
  { key: 'status9', value: 'additional' },
  { key: 'status10', value: 'started' },
  { key: 'status11', value: 'temporary' },
  { key: 'status12', value: 'completed' },
  { key: 'status13', value: 'confirmed' },
  { key: 'status14', value: 'pending' },
  { key: 'status15', value: 'suspended' },
  { key: 'status16', value: 'introduced' },
  { key: 'status17', value: 'unnoticed' },
];

type StatusDropdownProps = {
  value: StatusValue | '';
  onChange: (value: StatusValue) => void;
  label?: string;
  placeholder?: string;
  placeholderColor?: 'lighter' | 'secondary';
};

const StatusDropdown: React.FC<StatusDropdownProps> = ({
  value,
  onChange,
  label = '',
  placeholder,
  placeholderColor = 'lighter',
}) => {
  const t = useTranslations('Status');

  const items = React.useMemo(
    () =>
      STATUS_KEYS.map(s => ({
        label: (() => {
          try {
            return t(`Status.${s.key}` as string);
          } catch {
            return s.value;
          }
        })(),
        value: s.value,
      })),
    [t]
  );

  return (
    <Dropdown
      items={items}
      value={value}
      onChange={v => onChange(v as StatusValue)}
      placeholder={placeholder ?? t('placeholder')}
      label={label}
      variant='dropdown'
      menuFitContent
      placeholderColor={placeholderColor}
    />
  );
};

export default StatusDropdown;
