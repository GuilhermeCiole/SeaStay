'use client';

import styled from 'styled-components';
import { Button, Card } from '../styled/StyledComponents';

export const FiltersContainer = styled(Card)`
  padding: 0.4rem 0.3rem;
  margin-bottom: 0.75rem;
  background: linear-gradient(135deg, var(--gray-50) 0%, var(--gray-100) 100%);

  &:hover {
    transform: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }

  @media (min-width: 768px) {
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const FiltersHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.75rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }
`;

export const FiltersGrid = styled.div`
  display: grid;
  gap: 0.4rem;
  grid-template-columns: 1fr;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;

  @media (min-width: 768px) {
    gap: 0.5rem;
  }
`;

export const Label = styled.label`
  font-weight: 600;
  color: var(--primary);
  font-size: 0.65rem;
  margin-bottom: 0;

  @media (min-width: 768px) {
    font-size: 0.875rem;
    margin-bottom: 0;
  }
`;

export const FilterTitle = styled.h3`
  margin: 0;
  color: var(--primary);
  font-size: 0.9rem;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const ClearButton = styled(Button)`
  padding: 0.3rem 0.5rem;
  font-size: 0.7rem;
  background: #f1f5f9;
  color: var(--primary);
  border: 1px solid var(--primary);
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }

  &:hover {
    background: var(--primary-light);
    color: var(--primary-dark);
  }
`;

export const PriceRange = styled.div`
  display: flex;
  gap: 0.1rem;
  align-items: center;

  @media (min-width: 768px) {
    gap: 0.5rem;
  }
`;

export const RangeInput = styled.input`
  flex: 1;
  padding: 0.35rem 0.25rem;
  border: 1px solid var(--gray-200);
  border-radius: 3px;
  font-size: 0.7rem;
  background-color: var(--gray-50);
  color: var(--gray-700);
  font-family: 'Poppins', sans-serif;

  &:focus {
    outline: none;
    border-color: var(--primary);
    background-color: #fff;
    box-shadow: 0 0 0 1px rgba(79, 70, 229, 0.2);
  }

  &::placeholder {
    color: var(--gray-400);
    font-size: 0.7rem;
  }

  @media (min-width: 768px) {
    padding: 0.75rem;
    border: 2px solid var(--gray-200);
    border-radius: 8px;
    font-size: 0.875rem;

    &::placeholder {
      font-size: 0.875rem;
    }
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.15rem;
  margin-top: 0.3rem;

  @media (min-width: 768px) {
    gap: 0.5rem;
    margin-top: 0.5rem;
  }
`;

export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 0.15rem;
  cursor: pointer;
  user-select: none;
  width: 100%;

  @media (min-width: 768px) {
    gap: 0.5rem;
  }
`;

export const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const StyledCheckbox = styled.div<{ checked: boolean }>`
  width: 14px;
  height: 14px;
  min-width: 14px;
  background-color: ${props => (props.checked ? 'var(--primary)' : '#fff')};
  border: 1px solid ${props => (props.checked ? 'var(--primary)' : 'var(--gray-300)')};
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    border-color: var(--primary);
  }

  ${props =>
    props.checked &&
    `
    &:after {
      content: '';
      width: 3px;
      height: 7px;
      border: solid white;
      border-width: 0 1px 1px 0;
      position: absolute;
      top: 2px;
      left: 5px;
      transform: rotate(45deg);
    }
  `}

  @media (min-width: 768px) {
    width: 18px;
    height: 18px;
    min-width: 18px;
    border-width: 2px;
    border-radius: 4px;

    ${props =>
      props.checked &&
      `
      &:after {
        width: 5px;
        height: 10px;
        border-width: 0 2px 2px 0;
        top: 2px;
        left: 6px;
      }
    `}
  }
`;

export const AmenitiesSection = styled.div`
  grid-column: 1 / -1;
  margin-top: 0.25rem;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

export const AmenitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.25rem;
  margin-top: 0.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 0.5rem;
  }
`;

export const AmenitiesLabel = styled.label`
  font-size: 0.7rem;
  color: #374151;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const ShowMoreButton = styled.button`
  background: none;
  border: none;
  color: var(--primary);
  font-size: 0.7rem;
  margin-top: 0.5rem;
  padding: 0;
  cursor: pointer;
  display: block;
  margin-left: auto;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    font-size: 0.875rem;
    margin-top: 1rem;
  }
`;
