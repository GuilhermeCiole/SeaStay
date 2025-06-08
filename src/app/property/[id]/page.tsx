'use client';

import { PropertyDetail } from '@/components/PropertyDetail';
import { MainLayout } from '@/layouts/MainLayout';

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  return (
    <MainLayout>
      <PropertyDetail id={params.id} />
    </MainLayout>
  );
}
