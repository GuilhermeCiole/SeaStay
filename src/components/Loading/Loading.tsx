'use client';

import React from 'react';
import { LoadingSpinner } from '../styled/StyledComponents';
import { LoadingProps } from './Loading.types';
import * as S from './Loading.styles';

export const Loading: React.FC<LoadingProps> = ({
  message = 'Carregando imóveis incríveis...',
}) => {
  return (
    <S.LoadingContainer>
      <LoadingSpinner />
      <S.LoadingText>{message}</S.LoadingText>
    </S.LoadingContainer>
  );
};
