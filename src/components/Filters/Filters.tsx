'use client';

import React, { useState } from 'react';
import { useProperty } from '@/contexts/PropertyContext';
import { Input, Select } from '../styled/StyledComponents';
import { Collapsible, CollapsibleTrigger } from '@/components/styled/collapsible';
import { FilterValue } from './Filters.types';
import * as S from './Filters.styles';

export const Filters: React.FC = () => {
  const { state, dispatch } = useProperty();
  const [showMore, setShowMore] = useState(false);

  const handleFilterChange = (key: string, value: FilterValue) => {
    dispatch({
      type: 'SET_FILTER',
      payload: { key, value },
    });
  };

  const clearFilters = () => {
    dispatch({
      type: 'CLEAR_FILTERS',
    });
  };

  const amenities = [
    'Wi-Fi',
    'Piscina',
    'Academia',
    'Ar-condicionado',
    'Estacionamento',
    'Churrasqueira',
    'Cozinha',
    'Cozinha equipada',
    'Cozinha compacta',
    'Aquecedor',
    'Lareira',
    'Hidromassagem',
    'TV',
    'Máquina de lavar',
    'Secadora',
    'Ferro de passar',
  ];

  const toggleAmenity = (amenity: string) => {
    const currentAmenities = [...state.filters.amenities];
    const index = currentAmenities.indexOf(amenity);

    if (index === -1) {
      currentAmenities.push(amenity);
    } else {
      currentAmenities.splice(index, 1);
    }

    handleFilterChange('amenities', currentAmenities);
  };

  return (
    <S.FiltersContainer id="filtros">
      <S.FiltersHeader>
        <S.FilterTitle>Filtros</S.FilterTitle>
        <S.ClearButton onClick={clearFilters}>Limpar filtros</S.ClearButton>
      </S.FiltersHeader>

      <S.FiltersGrid>
        <S.FilterGroup>
          <S.Label htmlFor="city">Cidade</S.Label>
          <Input
            id="city"
            type="text"
            placeholder="Ex: São Paulo"
            value={state.filters.city}
            onChange={e => handleFilterChange('city', e.target.value)}
          />
        </S.FilterGroup>

        <S.FilterGroup>
          <S.Label htmlFor="state">Estado</S.Label>
          <Input
            id="state"
            type="text"
            placeholder="Ex: SP"
            value={state.filters.state}
            onChange={e => handleFilterChange('state', e.target.value)}
          />
        </S.FilterGroup>

        <S.FilterGroup>
          <S.Label htmlFor="propertyType">Tipo de imóvel</S.Label>
          <Select
            id="propertyType"
            value={state.filters.propertyType}
            onChange={e => handleFilterChange('propertyType', e.target.value)}
          >
            <option value="">Todos os tipos</option>
            <option value="Casa">Casa</option>
            <option value="Apartamento">Apartamento</option>
            <option value="Chalé">Chalé</option>
            <option value="Cabana">Cabana</option>
            <option value="Flat">Flat</option>
          </Select>
        </S.FilterGroup>

        <S.FilterGroup>
          <S.Label htmlFor="priceRange">Faixa de preço (por noite)</S.Label>
          <S.PriceRange>
            <S.RangeInput
              id="priceMin"
              type="number"
              placeholder="Mín"
              min="0"
              value={state.filters.priceRange[0] || ''}
              onChange={e =>
                handleFilterChange('priceRange', [
                  parseInt(e.target.value) || 0,
                  state.filters.priceRange[1],
                ])
              }
            />
            <span>-</span>
            <S.RangeInput
              id="priceMax"
              type="number"
              placeholder="Máx"
              min="0"
              value={state.filters.priceRange[1] || ''}
              onChange={e =>
                handleFilterChange('priceRange', [
                  state.filters.priceRange[0],
                  parseInt(e.target.value),
                ])
              }
            />
          </S.PriceRange>
        </S.FilterGroup>

        <S.FilterGroup>
          <S.Label htmlFor="maxGuests">Máximo de hóspedes</S.Label>
          <Select
            id="maxGuests"
            value={state.filters.maxGuests}
            onChange={e => handleFilterChange('maxGuests', parseInt(e.target.value))}
          >
            <option value="0">Qualquer</option>
            <option value="1">1 hóspede</option>
            <option value="2">2 hóspedes</option>
            <option value="4">4 hóspedes</option>
            <option value="6">6 hóspedes</option>
            <option value="8">8+ hóspedes</option>
          </Select>
        </S.FilterGroup>

        <S.FilterGroup>
          <S.Label htmlFor="bedrooms">Quartos</S.Label>
          <Select
            id="bedrooms"
            value={state.filters.bedrooms}
            onChange={e => handleFilterChange('bedrooms', parseInt(e.target.value))}
          >
            <option value="0">Qualquer</option>
            <option value="1">1 quarto</option>
            <option value="2">2 quartos</option>
            <option value="3">3 quartos</option>
            <option value="4">4+ quartos</option>
          </Select>
        </S.FilterGroup>

        <S.FilterGroup>
          <S.CheckboxContainer>
            <S.CheckboxWrapper>
              <S.HiddenCheckbox
                type="checkbox"
                checked={state.filters.availableOnly}
                onChange={e => handleFilterChange('availableOnly', e.target.checked)}
              />
              <S.StyledCheckbox checked={state.filters.availableOnly} />
              <S.Label htmlFor="availableOnly">Apenas disponíveis</S.Label>
            </S.CheckboxWrapper>
          </S.CheckboxContainer>
        </S.FilterGroup>

        <S.AmenitiesSection>
          <Collapsible open={showMore} onOpenChange={setShowMore}>
            <S.Label>Comodidades</S.Label>
            <S.AmenitiesGrid>
              {amenities.slice(0, showMore ? amenities.length : 6).map(amenity => (
                <S.CheckboxWrapper key={amenity}>
                  <S.HiddenCheckbox
                    type="checkbox"
                    checked={state.filters.amenities.includes(amenity)}
                    onChange={() => toggleAmenity(amenity)}
                  />
                  <S.StyledCheckbox checked={state.filters.amenities.includes(amenity)} />
                  <span>
                    <S.AmenitiesLabel>{amenity}</S.AmenitiesLabel>
                  </span>
                </S.CheckboxWrapper>
              ))}
            </S.AmenitiesGrid>
            <CollapsibleTrigger asChild>
              <S.ShowMoreButton>{showMore ? 'Mostrar menos' : 'Mostrar mais'}</S.ShowMoreButton>
            </CollapsibleTrigger>
          </Collapsible>
        </S.AmenitiesSection>
      </S.FiltersGrid>
    </S.FiltersContainer>
  );
};
