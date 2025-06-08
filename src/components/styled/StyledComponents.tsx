'use client';

import styled from 'styled-components';
export { Container } from '../Container';

export const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

export const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  overflow: hidden;
  border: 1px solid #f3f4f6;
`;

export const HoverCard = styled(Card)`
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  transition: all 0.2s;
  cursor: pointer;
  background: var(--primary);
  color: white;
  border: none;
  font-family:
    'Poppins',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    sans-serif;
  letter-spacing: -0.01em;

  &:hover {
    background: var(--primary-dark);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const AccentButton = styled(Button)`
  background: var(--accent);

  &:hover {
    background: var(--accent-dark);
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.35rem 0.25rem;
  border: 1px solid #e5e7eb;
  border-radius: 3px;
  font-size: 0.7rem;
  background-color: #f8fafc;
  color: #374151;
  transition: all 0.2s ease;
  font-family:
    'Poppins',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    sans-serif;

  &:focus {
    outline: none;
    border-color: var(--primary);
    background-color: #fff;
    box-shadow: 0 0 0 1px rgba(16, 185, 129, 0.2);
  }

  &::placeholder {
    color: #9ca3af;
    font-size: 0.7rem;
  }

  @media (min-width: 768px) {
    padding: 0.75rem;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 0.875rem;

    &::placeholder {
      font-size: 0.875rem;
    }
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.35rem 0.25rem;
  border: 1px solid #e5e7eb;
  border-radius: 3px;
  font-size: 0.7rem;
  background-color: #f8fafc;
  color: #374151;
  transition: all 0.2s ease;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.25rem center;
  padding-right: 1.2rem;
  font-family:
    'Poppins',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    sans-serif;

  &:focus {
    outline: none;
    border-color: var(--primary);
    background-color: #fff;
    box-shadow: 0 0 0 1px rgba(100, 116, 139, 0.2);
  }

  option {
    background-color: white;
    color: #374151;
    padding: 4px;
    font-size: 0.7rem;
  }

  @media (min-width: 768px) {
    padding: 0.75rem;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 0.875rem;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
    background-position: right 0.75rem center;
    padding-right: 2.5rem;

    option {
      padding: 6px;
      font-size: 0.875rem;
    }
  }
`;

export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 3px solid #f3f4f6;
  border-radius: 50%;
  border-top-color: var(--primary);
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Modal = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  transition: all 0.3s ease;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  transform: scale(${props => (props.about ? 1 : 0.9)});
  transition: transform 0.3s ease;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
`;
