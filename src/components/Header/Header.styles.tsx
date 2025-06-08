'use client';

import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: white;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  @media (min-width: 768px) {
    padding: 0.5rem 0;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled.a`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(45deg, #ffffff, #e0f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
  text-decoration: none;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const Logo = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(45deg, #ffffff, #e0f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 0.75rem;
  opacity: 0.9;
  font-weight: 300;
  color: #e0f2fe;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const Nav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
  }
`;

export const NavLink = styled.a`
  color: white;
  font-weight: 500;
  position: relative;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
    color: white;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -1px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background-color: var(--accent-light);
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 70%;
  }
`;

export const MobileMenuToggle = styled.button<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 200;

  &:focus {
    outline: none;
  }

  @media (min-width: 768px) {
    display: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ $isOpen }) => ($isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ $isOpen }) => ($isOpen ? '0' : '1')};
      transform: ${({ $isOpen }) => ($isOpen ? 'translateX(20px)' : 'translateX(0)')};
    }

    &:nth-child(3) {
      transform: ${({ $isOpen }) => ($isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--primary-dark);
  height: auto;
  padding: 1.5rem;
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-150%)')};
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  border-radius: 0 0 8px 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  z-index: 99;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileNavLink = styled.a`
  font-size: 1rem;
  text-transform: uppercase;
  padding: 1rem 0;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: white;
  text-decoration: none;
  transition: color 0.3s linear;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: var(--accent-light);
  }
`;
