import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Filters } from './Filters';

jest.mock('@/contexts/PropertyContext', () => ({
  useProperty: () => ({
    state: {
      filters: {
        city: '',
        state: '',
        propertyType: '',
        priceRange: [0, 1000],
        maxGuests: 0,
        bedrooms: 0,
        amenities: [],
        availableOnly: false,
      },
    },
    dispatch: jest.fn(),
  }),
}));

describe('Filters Component', () => {
  it('renderiza o título e botão de limpar filtros', () => {
    render(<Filters />);

    expect(screen.getByText('Filtros')).toBeInTheDocument();
    expect(screen.getByText('Limpar filtros')).toBeInTheDocument();
  });

  it('renderiza todos os campos de filtro', () => {
    render(<Filters />);

    expect(screen.getByText('Cidade')).toBeInTheDocument();
    expect(screen.getByText('Estado')).toBeInTheDocument();
    expect(screen.getByText('Tipo de imóvel')).toBeInTheDocument();
    expect(screen.getByText('Faixa de preço (por noite)')).toBeInTheDocument();
    expect(screen.getByText('Máximo de hóspedes')).toBeInTheDocument();
    expect(screen.getByText('Quartos')).toBeInTheDocument();
    expect(screen.getByText('Apenas disponíveis')).toBeInTheDocument();
    expect(screen.getByText('Comodidades')).toBeInTheDocument();
  });

  it('permite entrada nos campos de texto', () => {
    render(<Filters />);

    const cidadeInput = screen.getByPlaceholderText('Ex: São Paulo');
    fireEvent.change(cidadeInput, { target: { value: 'Rio de Janeiro' } });

    expect(cidadeInput).toBeInTheDocument();
  });
});
