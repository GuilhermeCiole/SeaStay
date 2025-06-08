'use client';

import React from 'react';
import { Button } from '../styled/StyledComponents';
import { ErrorMessageProps } from './ErrorMessage.types';
import * as S from './ErrorMessage.styles';

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <S.ErrorContainer>
      <S.ErrorIcon>❌</S.ErrorIcon>
      <S.ErrorTitle>Ops! Algo deu errado</S.ErrorTitle>
      <S.ErrorText>{message}</S.ErrorText>
      {onRetry && <Button onClick={onRetry}>Tentar novamente</Button>}
    </S.ErrorContainer>
  );
};
