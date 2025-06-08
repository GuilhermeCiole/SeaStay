'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useProperty } from '@/contexts/PropertyContext';
import { PropertyDetailProps } from './PropertyDetail.types';
import { Container } from '../Container';
import { Loading } from '../Loading';
import { ErrorMessage } from '../ErrorMessage';
import * as S from './PropertyDetail.styles';

export const PropertyDetail: React.FC<PropertyDetailProps> = ({ id }) => {
  const router = useRouter();
  const { state, dispatch } = useProperty();
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    dispatch({ type: 'SELECT_PROPERTY', payload: id });

    return () => {
      dispatch({ type: 'CLEAR_SELECTED_PROPERTY' });
    };
  }, [id, dispatch]);

  useEffect(() => {
    setIsLoading(state.loading);
  }, [state.loading]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleConfirm = () => {
    alert('Reserva enviada com sucesso!');
    closeModal();
  };

  const handleBack = () => {
    router.push('/');
  };

  if (isLoading) {
    return <Loading message="Carregando detalhes do imóvel..." />;
  }

  if (state.error) {
    return (
      <ErrorMessage
        message={`Erro ao carregar imóvel: ${state.error}`}
        onRetry={() => dispatch({ type: 'SELECT_PROPERTY', payload: id })}
      />
    );
  }

  if (!state.selectedProperty) {
    return (
      <ErrorMessage
        message="Imóvel não encontrado"
        onRetry={() => dispatch({ type: 'SELECT_PROPERTY', payload: id })}
      />
    );
  }

  const property = state.selectedProperty;

  return (
    <Container>
      <S.BackButton onClick={handleBack}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Voltar para a página inicial
      </S.BackButton>

      <S.DetailContainer>
        <S.PropertyHeader>
          <S.PropertyTitle>{property.title}</S.PropertyTitle>
          <S.PropertyLocation>
            {property.city}, {property.state}, {property.country}
          </S.PropertyLocation>
          <S.PropertyAvailability $available={property.available}>
            {property.available ? 'Disponível' : 'Indisponível'}
          </S.PropertyAvailability>
        </S.PropertyHeader>

        <S.PropertyImageContainer>
          <Image src={property.imageUrl} alt={property.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" priority/>
        </S.PropertyImageContainer>

        <S.PropertyGrid>
          <S.PropertyMainContent>
            <S.PropertySection>
              <S.SectionTitle>Características</S.SectionTitle>
              <S.PropertyDetails>
                <S.DetailItem>👥 {property.maxGuests} hóspedes</S.DetailItem>
                <S.DetailItem>🏠 {property.propertyType}</S.DetailItem>
                <S.DetailItem>🛏️ {property.bedrooms} quartos</S.DetailItem>
                <S.DetailItem>🚿 {property.bathrooms} banheiros</S.DetailItem>
                <S.DetailItem>⭐ {property.rating?.toFixed(1) || 'N/A'}</S.DetailItem>
                <S.DetailItem>👤 {property.reviewCount || 0} avaliações</S.DetailItem>
              </S.PropertyDetails>
            </S.PropertySection>

            <S.PropertySection>
              <S.SectionTitle>Descrição</S.SectionTitle>
              <S.PropertyDescription>
                {property.description || 'Nenhuma descrição disponível para este imóvel.'}
              </S.PropertyDescription>
            </S.PropertySection>

            <S.PropertySection>
              <S.SectionTitle>Comodidades</S.SectionTitle>
              <S.PropertyAmenities>
                {property.amenities && property.amenities.length > 0 ? (
                  property.amenities.map((amenity, index) => (
                    <S.AmenityItem key={`${amenity}-${index}`}>
                      <S.AmenityIcon />
                      {amenity}
                    </S.AmenityItem>
                  ))
                ) : (
                  <S.EmptyMessage>Nenhuma comodidade listada.</S.EmptyMessage>
                )}
              </S.PropertyAmenities>
            </S.PropertySection>
          </S.PropertyMainContent>

          <S.PropertySidebar>
            <S.PropertyPrice>
              R$ {property.pricePerNight?.toLocaleString('pt-BR')}/noite
            </S.PropertyPrice>
            <p>
              Entre em contato com o anfitrião para obter mais informações e realizar sua reserva.
            </p>
            <S.BookButton disabled={!property.available} onClick={openModal}>
              {property.available ? 'Reservar agora' : 'Indisponível para reserva'}
            </S.BookButton>
            <p>ID da propriedade: {property.id}</p>
          </S.PropertySidebar>
        </S.PropertyGrid>
      </S.DetailContainer>

      {showModal && (
        <S.ModalOverlay onClick={e => e.target === e.currentTarget && closeModal()}>
          <S.ModalContent>
            <S.ModalTitle>Reservar Imóvel</S.ModalTitle>
            <S.ModalText>
              Deseja prosseguir com a reserva do imóvel <strong>{property.title}</strong> por{' '}
              <strong>R$ {property.pricePerNight?.toLocaleString('pt-BR')}</strong> por noite?
            </S.ModalText>
            <S.ModalButtons>
              <S.CancelButton onClick={closeModal}>Cancelar</S.CancelButton>
              <S.ConfirmButton onClick={handleConfirm}>Confirmar</S.ConfirmButton>
            </S.ModalButtons>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </Container>
  );
};
