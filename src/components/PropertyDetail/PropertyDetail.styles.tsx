'use client';

import styled from 'styled-components';

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem 0;

  @media (min-width: 768px) {
    padding: 2rem 0;
  }
`;

export const PropertyHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const PropertyTitle = styled.h1`
  font-size: 1.5rem;
  color: var(--primary);
  margin: 0;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const PropertyLocation = styled.p`
  font-size: 1rem;
  color: var(--gray-600);
  margin: 0;
`;

export const PropertyImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  border-radius: 0.75rem;
  overflow: hidden;
  margin: 1rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    height: 400px;
  }
`;

export const PropertyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`;

export const PropertyMainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const PropertySidebar = styled.div`
  background-color: var(--gray-50);
  padding: 1.5rem;
  border-radius: 0.75rem;
  height: fit-content;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const PropertyPrice = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 1rem;
`;

export const BookButton = styled.button`
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  width: 100%;
  cursor: pointer;
  transition: all 0.2s ease;
  margin: 1.5rem 0;

  &:hover {
    background-color: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    background-color: var(--gray-300);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const PropertySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SectionTitle = styled.h3`
  font-size: 1.25rem;
  color: var(--primary);
  margin: 0;
`;

export const PropertyDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
`;

export const PropertyDescription = styled.p`
  line-height: 1.6;
  color: var(--gray-700);
  white-space: pre-line;
`;

export const PropertyAmenities = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const AmenityItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
`;

export const AmenityIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--accent);
  color: white;
  font-size: 11px;

  &::before {
    content: '✓';
  }
`;

export const EmptyMessage = styled.div`
  color: var(--text-muted);
  font-style: italic;
  font-size: 0.9rem;
  grid-column: 1 / -1;
`;

export const PropertyAvailability = styled.div<{ available: boolean }>`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  background-color: ${props => (props.available ? '#dcfce7' : '#fee2e2')};
  color: ${props => (props.available ? '#15803d' : '#b91c1c')};
  font-weight: 500;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: 1px solid var(--primary);
  border-radius: 0.375rem;
  font-size: 0.9rem;
  color: var(--primary);
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: var(--primary-dark);
    border-color: var(--primary-dark);
    background-color: rgba(79, 70, 229, 0.05);
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export const ModalTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--primary);
  margin-top: 0;
  margin-bottom: 1rem;
`;

export const ModalText = styled.p`
  margin-bottom: 1.5rem;
  color: var(--gray-700);
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const ConfirmButton = styled.button`
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--primary-dark);
  }
`;

export const CancelButton = styled.button`
  background-color: var(--gray-200);
  color: var(--gray-700);
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--gray-300);
  }
`;
