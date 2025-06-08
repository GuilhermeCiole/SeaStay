'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useProperty } from '@/contexts/PropertyContext';
import { PropertyCard } from '../PropertyCard';
import { Loading } from '../Loading';
import * as S from './PropertyList.styles';

export const PropertyList: React.FC = () => {
  const { state } = useProperty();
  const router = useRouter();

  const handlePropertyClick = (propertyId: string) => {
    router.push(`/property/${propertyId}`);
  };

  if (state.loading) {
    return <Loading message="Carregando imóveis..." />;
  }

  if (state.error) {
    return (
      <S.ErrorMessage>
        <h3>Erro ao carregar os imóveis</h3>
        <p>{state.error}</p>
      </S.ErrorMessage>
    );
  }

  if (state.filteredProperties.length === 0) {
    return (
      <S.NoResults>
        <h3>Nenhum imóvel encontrado</h3>
        <p>Tente ajustar os filtros para ver mais opções.</p>
      </S.NoResults>
    );
  }

  return (
    <S.ListContainer>
      {state.filteredProperties.map(property => (
        <PropertyCard
          key={property.id}
          property={property}
          onClick={() => handlePropertyClick(property.id)}
        />
      ))}
    </S.ListContainer>
  );
};
