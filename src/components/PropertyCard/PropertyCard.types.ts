import { Property } from '@/contexts/property.types';

export interface PropertyCardProps {
  property: Property;
  onClick: () => void;
}

export interface StyledPropertyProps {
  imageUrl?: string;
  available?: boolean;
}
