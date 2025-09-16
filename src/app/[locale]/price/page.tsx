import type { Metadata } from 'next';
import React from 'react';

import PriceScreen from '@/screens/PriceScreen';

export const metadata: Metadata = {
  title: 'Price',
};
function PricePage() {
  return <PriceScreen />;
}
export default PricePage;
