'use client';

import styled from 'styled-components';
import { HoverCard } from '../styled/StyledComponents';
import { StyledPropertyProps } from './PropertyCard.types';

export const PropertyImage = styled.div<StyledPropertyProps>`
  height: 180px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 8px 8px 0 0;
  background-color: #f3f4f6;

  @media (min-width: 768px) {
    height: 200px;
    border-radius: 12px 12px 0 0;
  }
`;

export const AvailabilityBadge = styled.div<StyledPropertyProps>`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  padding: 0.2rem 0.5rem;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 600;
  background: ${props => (props.available ? '#10b981' : '#ef4444')};
  color: white;

  @media (min-width: 768px) {
    top: 1rem;
    right: 1rem;
    padding: 0.25rem 0.75rem;
    font-size: 0.75rem;
  }
`;

export const PropertyContent = styled.div`
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

export const PropertyTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--gray-800);
  line-height: 1.4;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const PropertyLocation = styled.p`
  margin: 0 0 0.75rem 0;
  color: #6b7280;
  font-size: 0.8rem;

  @media (min-width: 768px) {
    margin: 0 0 1rem 0;
    font-size: 0.875rem;
  }
`;

export const PropertyDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;

  @media (min-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const PropertyPrice = styled.div`
  font-weight: 700;
  color: var(--primary);
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const PropertyRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.8rem;
  color: #6b7280;

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const PropertyInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  font-size: 0.8rem;
  color: #6b7280;
  margin-bottom: 0.75rem;

  @media (min-width: 768px) {
    gap: 1rem;
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }
`;

export const StyledCard = styled(HoverCard)`
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--gray-200);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px rgba(0, 0, 0, 0.07);
    border-color: var(--gray-300);
  }
`;
