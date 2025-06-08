'use client';

import React from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { PropertyList } from '@/components/PropertyList';
import { Filters } from '@/components/Filters';

export default function Home() {
  return (
    <MainLayout>
      <Filters />
      <PropertyList />
    </MainLayout>
  );
}
