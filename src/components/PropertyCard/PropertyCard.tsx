'use client';

import React from 'react';
import Image from 'next/image';
import { PropertyCardProps } from './PropertyCard.types';
import * as S from './PropertyCard.styles';

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onClick }) => {
  const getImageToDisplay = () => {
    return property.imageUrl;
  };

  return (
    <S.StyledCard onClick={onClick}>
      <S.PropertyImage imageUrl={getImageToDisplay()}>
        <Image src={getImageToDisplay()} alt={property.title} fill style={{ objectFit: 'cover' }} />
        <S.AvailabilityBadge available={property.available}>
          {property.available ? 'Disponível' : 'Indisponível'}
        </S.AvailabilityBadge>
      </S.PropertyImage>

      <S.PropertyContent>
        <S.PropertyTitle>{property.title}</S.PropertyTitle>
        <S.PropertyLocation>
          {property.city}, {property.state}, {property.country}
        </S.PropertyLocation>

        <S.PropertyInfo>
          <span>👥 {property.maxGuests} hóspedes</span>
          <span>🛏️ {property.bedrooms} quartos</span>
          <span>🚿 {property.bathrooms} banheiros</span>
        </S.PropertyInfo>

        <S.PropertyDetails>
          <S.PropertyPrice>
            R$ {property.pricePerNight?.toLocaleString('pt-BR') || 0}/noite
          </S.PropertyPrice>
          <S.PropertyRating>
            ⭐ {property.rating?.toFixed(1) || 'N/A'} ({property.reviewCount || 0})
          </S.PropertyRating>
        </S.PropertyDetails>
      </S.PropertyContent>
    </S.StyledCard>
  );
};
