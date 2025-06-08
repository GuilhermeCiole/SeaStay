'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Container } from '@/components/Container';
import { MainLayoutProps } from './MainLayout.types';
import * as S from './MainLayout.styles';

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <S.Main>
        <Container>{children}</Container>
      </S.Main>
      <S.Footer>
        <Container>
          <p>&copy; {new Date().getFullYear()} SeaStay - Todos os direitos reservados</p>
        </Container>
      </S.Footer>
    </>
  );
};
