'use client';

import styled from 'styled-components';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
`;

export const ErrorIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const ErrorTitle = styled.h2`
  color: #dc2626;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`;

export const ErrorText = styled.p`
  color: #6b7280;
  margin-bottom: 2rem;
  max-width: 400px;
`;
