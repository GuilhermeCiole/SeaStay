'use client';

import React from 'react';
import { ContainerProps } from './Container.types';
import * as S from './Container.styles';

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <S.StyledContainer className={className}>{children}</S.StyledContainer>;
};
