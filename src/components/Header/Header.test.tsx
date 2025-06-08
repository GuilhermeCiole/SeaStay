import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

jest.mock('next/link', () => {
  const MockedLink = ({
    children,
    href,
    legacyBehavior,
  }: {
    children: React.ReactNode;
    href?: string;
    legacyBehavior?: boolean;
  }) => {
    if (legacyBehavior) {
      return children;
    }
    return <a href={href || '#'}>{children}</a>;
  };

  MockedLink.displayName = 'MockedNextLink';

  return MockedLink;
});

describe('Header Component', () => {
  it('renderiza o logotipo e subtítulo corretamente', () => {
    render(<Header />);

    expect(screen.getByText('SeaStay')).toBeInTheDocument();
    expect(screen.getByText('Encontre sua estadia perfeita')).toBeInTheDocument();
  });

  it('contém links de navegação', () => {
    render(<Header />);

    expect(screen.getAllByText('Início').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Filtros').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Imóveis').length).toBeGreaterThanOrEqual(1);
  });
});
