'use client';
import React from 'react';

import Dropdown from '@/components/Dropdown';

function DeliveryScreen() {
  const [selectedDropdown, setSelectedDropdown] = React.useState<string>('');

  return (
    <Dropdown
      value={selectedDropdown}
      onChange={value => {
        setSelectedDropdown(value);
      }}
      placeholder=''
      label=''
      items={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
      ]}
    />
  );
}

export default DeliveryScreen;
