'use client';

import styled from 'styled-components';

export const Main = styled.main`
  min-height: calc(100vh - 70px);
  padding: 2rem 0;

  @media (min-width: 768px) {
    padding: 3rem 0;
  }
`;

export const Footer = styled.footer`
  background-color: var(--gray-800);
  color: white;
  padding: 2rem 0;
  text-align: center;
  font-size: 0.875rem;
`;
