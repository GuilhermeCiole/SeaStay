type Filters = {
  city: string;
  state: string;
  propertyType: string;
  priceRange: [number, number];
  maxGuests: number;
  bedrooms: number;
  availableOnly: boolean;
  amenities: string[];
};

type FilterKey = keyof Filters;
export type FilterValue = Filters[FilterKey];
