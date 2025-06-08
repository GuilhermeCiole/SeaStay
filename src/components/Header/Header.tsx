'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '../styled/StyledComponents';
import * as S from './Header.styles';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <S.HeaderContainer>
      <Container>
        <S.HeaderContent>
          <S.LogoContainer>
            <Link href="/" onClick={closeMenu}>
              <S.LogoText>SeaStay</S.LogoText>
            </Link>
            <S.Subtitle>Encontre sua estadia perfeita</S.Subtitle>
          </S.LogoContainer>

          <S.Nav>
            <Link href="/">
              <S.Navtext>Início</S.Navtext>
            </Link>
            <Link href="/#filtros">
              <S.Navtext>Filtros</S.Navtext>
            </Link>
            <Link href="/#imoveis">
              <S.Navtext>Imóveis</S.Navtext>
            </Link>
          </S.Nav>

          <S.MobileMenuToggle onClick={toggleMenu} $isOpen={isOpen}>
            <div />
            <div />
            <div />
          </S.MobileMenuToggle>

          <S.MobileMenu $isOpen={isOpen}>
            <Link onClick={closeMenu} href="/">
              <S.MobileNavText>Início</S.MobileNavText>
            </Link>
            <Link onClick={closeMenu} href="/#filtros">
              <S.MobileNavText>Filtros</S.MobileNavText>
            </Link>
            <Link onClick={closeMenu} href="/#imoveis">
              <S.MobileNavText>Imóveis</S.MobileNavText>
            </Link>
          </S.MobileMenu>
        </S.HeaderContent>
      </Container>
    </S.HeaderContainer>
  );
};
