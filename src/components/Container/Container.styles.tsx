'use client';

import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 0.3rem;

  @media (min-width: 640px) {
    max-width: 640px;
    padding: 0 1rem;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 1280px) {
    max-width: 1200px;
  }
`;
