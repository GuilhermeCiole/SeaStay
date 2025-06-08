'use client';

import { PropertyProvider } from '@/contexts/PropertyContext';
import { ProvidersProps } from './Providers.types';

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <PropertyProvider>{children}</PropertyProvider>;
};
