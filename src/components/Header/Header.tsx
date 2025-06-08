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
            <Link href="/" onClick={closeMenu} legacyBehavior>
              <S.StyledLink>SeaStay</S.StyledLink>
            </Link>
            <S.Subtitle>Encontre sua estadia perfeita</S.Subtitle>
          </S.LogoContainer>

          <S.Nav>
            <Link href="/" legacyBehavior>
              <S.NavLink>Início</S.NavLink>
            </Link>
            <Link href="/#filtros" legacyBehavior>
              <S.NavLink>Filtros</S.NavLink>
            </Link>
            <Link href="/#imoveis" legacyBehavior>
              <S.NavLink>Imóveis</S.NavLink>
            </Link>
          </S.Nav>

          <S.MobileMenuToggle onClick={toggleMenu} $isOpen={isOpen}>
            <div />
            <div />
            <div />
          </S.MobileMenuToggle>

          <S.MobileMenu $isOpen={isOpen}>
            <Link href="/" legacyBehavior>
              <S.MobileNavLink onClick={closeMenu}>Início</S.MobileNavLink>
            </Link>
            <Link href="/#filtros" legacyBehavior>
              <S.MobileNavLink onClick={closeMenu}>Filtros</S.MobileNavLink>
            </Link>
            <Link href="/#imoveis" legacyBehavior>
              <S.MobileNavLink onClick={closeMenu}>Imóveis</S.MobileNavLink>
            </Link>
          </S.MobileMenu>
        </S.HeaderContent>
      </Container>
    </S.HeaderContainer>
  );
};
