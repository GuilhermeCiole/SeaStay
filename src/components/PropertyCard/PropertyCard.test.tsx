import React from 'react';
import { render, screen } from '@testing-library/react';
import { PropertyCard } from './PropertyCard';
import { Property } from '../../contexts/property.types';

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { fill, priority, alt, ...rest } = props;

    // eslint-disable-next-line @next/next/no-img-element
    return <img {...rest} alt={alt || ''} />;
  },
}));

describe('PropertyCard Component', () => {
  const mockProperty: Property = {
    id: '1',
    title: 'Casa na Praia',
    imageUrl: '/test-image.jpg',
    city: 'Florianópolis',
    state: 'SC',
    country: 'Brasil',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    description: 'Uma linda casa na praia',
    pricePerNight: 250,
    rating: 4.8,
    reviewCount: 120,
    amenities: ['Wi-Fi', 'Piscina'],
    available: true,
    propertyType: 'Casa',
    hostName: '',
    hostProfilePicture: '',
    isAvailable: false,
    numberOfReviews: 0,
  };

  const mockOnClick = jest.fn();

  it('renderiza o título do imóvel corretamente', () => {
    render(<PropertyCard property={mockProperty} onClick={mockOnClick} />);
    expect(screen.getByText('Casa na Praia')).toBeInTheDocument();
  });

  it('renderiza informações de localização', () => {
    render(<PropertyCard property={mockProperty} onClick={mockOnClick} />);
    expect(screen.getByText(/Florianópolis/)).toBeInTheDocument();
    expect(screen.getByText(/SC/)).toBeInTheDocument();
    expect(screen.getByText(/Brasil/)).toBeInTheDocument();
  });

  it('mostra badge disponível quando imóvel está disponível', () => {
    render(<PropertyCard property={mockProperty} onClick={mockOnClick} />);
    expect(screen.getByText('Disponível')).toBeInTheDocument();
  });

  it('mostra badge indisponível quando imóvel não está disponível', () => {
    const unavailableProperty = { ...mockProperty, available: false };
    render(<PropertyCard property={unavailableProperty} onClick={mockOnClick} />);
    expect(screen.getByText('Indisponível')).toBeInTheDocument();
  });
});
