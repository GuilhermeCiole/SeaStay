'use client';

import styled from 'styled-components';

export const ListContainer = styled.div`
  display: grid;
  gap: 1.25rem;
  grid-template-columns: 1fr;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 150px;

  @media (min-width: 768px) {
    min-height: 200px;
  }
`;

export const ErrorMessage = styled.div`
  text-align: center;
  color: #ef4444;
  padding: 1.5rem;
  background: #fee2e2;
  border-radius: 8px;
  margin: 1.5rem 0;

  @media (min-width: 768px) {
    padding: 2rem;
    margin: 2rem 0;
  }
`;

export const NoResults = styled.div`
  text-align: center;
  color: #6b7280;
  padding: 1.5rem;
  background: #f3f4f6;
  border-radius: 8px;
  margin: 1.5rem 0;

  @media (min-width: 768px) {
    padding: 2rem;
    margin: 2rem 0;
  }
`;
