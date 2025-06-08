export interface Property {
  isAvailable: boolean;
  numberOfReviews: number;
  imageUrl: string;
  id: string;
  title: string;
  description: string;
  city: string;
  state: string;
  country: string;
  pricePerNight: number;
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  propertyType: string;
  amenities: string[];
  rating: number;
  reviewCount: number;
  available: boolean;
  hostName: string;
  hostProfilePicture: string;
}

export interface FilterState {
  city: string;
  state: string;
  propertyType: string;
  priceRange: [number, number];
  maxGuests: number;
  bedrooms: number;
  amenities: string[];
  availableOnly: boolean;
}
