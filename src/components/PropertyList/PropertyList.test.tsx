import React from 'react';
import { render, screen } from '@testing-library/react';
import { PropertyList } from './PropertyList';
import { Property } from '../../contexts/property.types';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: Property) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={''} />;
  },
}));

jest.mock('@/contexts/PropertyContext', () => ({
  useProperty: () => ({
    state: {
      properties: mockProperties,
      filteredProperties: mockProperties,
      loading: false,
      error: null,
      selectedProperty: null,
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

const mockProperties: Property[] = [
  {
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
    isAvailable: false,
    numberOfReviews: 0,
    hostName: '',
    hostProfilePicture: '',
  },
  {
    id: '2',
    title: 'Apartamento no Centro',
    imageUrl: '/test-image2.jpg',
    city: 'São Paulo',
    state: 'SP',
    country: 'Brasil',
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    description: 'Apartamento moderno no centro',
    pricePerNight: 150,
    rating: 4.5,
    reviewCount: 85,
    amenities: ['Wi-Fi', 'Academia'],
    available: true,
    propertyType: 'Apartamento',
    isAvailable: false,
    numberOfReviews: 0,
    hostName: '',
    hostProfilePicture: '',
  },
];

describe('PropertyList Component', () => {
  it('renderiza a lista de imóveis corretamente', () => {
    render(<PropertyList />);

    expect(screen.getByText('Casa na Praia')).toBeInTheDocument();
    expect(screen.getByText('Apartamento no Centro')).toBeInTheDocument();
  });

  it('renderiza informações de preço e localização', () => {
    render(<PropertyList />);

    expect(screen.getByText(/Florianópolis/)).toBeInTheDocument();
    expect(screen.getByText(/São Paulo/)).toBeInTheDocument();
    expect(screen.getByText(/R\$ 250\/noite/)).toBeInTheDocument();
    expect(screen.getByText(/R\$ 150\/noite/)).toBeInTheDocument();
  });
});
