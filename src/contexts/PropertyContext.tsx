'use client';

import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
  useCallback,
} from 'react';
import { Property, FilterState } from './property.types';
import { FilterValue } from '@/components/Filters/Filters.types';

const normalizeString = (text: string): string => {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
};

interface PropertyState {
  properties: Property[];
  filteredProperties: Property[];
  filters: FilterState;
  loading: boolean;
  error: string | null;
  selectedProperty: Property | null;
}

type PropertyAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_PROPERTIES'; payload: Property[] }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_FILTERS'; payload: Partial<FilterState> }
  | { type: 'SET_FILTER'; payload: { key: string; value: FilterValue } }
  | { type: 'CLEAR_FILTERS' }
  | { type: 'SET_SELECTED_PROPERTY'; payload: Property | null }
  | { type: 'SELECT_PROPERTY'; payload: string }
  | { type: 'CLEAR_SELECTED_PROPERTY' }
  | { type: 'FILTER_PROPERTIES' };

const initialState: PropertyState = {
  properties: [],
  filteredProperties: [],
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
  loading: false,
  error: null,
  selectedProperty: null,
};

const PropertyContext = createContext<{
  state: PropertyState;
  dispatch: React.Dispatch<PropertyAction>;
} | null>(null);

function propertyReducer(state: PropertyState, action: PropertyAction): PropertyState {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_PROPERTIES':
      return { ...state, properties: action.payload, filteredProperties: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_FILTERS':
      return { ...state, filters: { ...state.filters, ...action.payload } };
    case 'SET_FILTER':
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.key]: action.payload.value,
        },
      };
    case 'CLEAR_FILTERS':
      return {
        ...state,
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
      };
    case 'SET_SELECTED_PROPERTY':
      return { ...state, selectedProperty: action.payload };
    case 'SELECT_PROPERTY':
      const selectedProperty = state.properties.find(p => p.id === action.payload) || null;
      if (!selectedProperty) {
        return {
          ...state,
          loading: true,
          selectedProperty: null,
          error: null,
        };
      }
      return { ...state, selectedProperty, loading: false, error: null };
    case 'CLEAR_SELECTED_PROPERTY':
      return { ...state, selectedProperty: null };
    case 'FILTER_PROPERTIES':
      const filtered = state.properties.filter(property => {
        const { filters } = state;

        if (filters.city) {
          const normalizedPropertyCity = normalizeString(property.city);
          const normalizedFilterCity = normalizeString(filters.city);
          if (!normalizedPropertyCity.includes(normalizedFilterCity)) {
            return false;
          }
        }

        if (filters.state) {
          const normalizedPropertyState = normalizeString(property.state);
          const normalizedFilterState = normalizeString(filters.state);
          if (!normalizedPropertyState.includes(normalizedFilterState)) {
            return false;
          }
        }

        if (filters.propertyType) {
          const normalizedPropertyType = normalizeString(property.propertyType);
          const normalizedFilterType = normalizeString(filters.propertyType);
          if (!normalizedPropertyType.includes(normalizedFilterType)) {
            return false;
          }
        }

        if (
          property.pricePerNight < filters.priceRange[0] ||
          property.pricePerNight > filters.priceRange[1]
        ) {
          return false;
        }

        if (filters.maxGuests > 0 && property.maxGuests < filters.maxGuests) {
          return false;
        }

        if (filters.bedrooms > 0 && property.bedrooms < filters.bedrooms) {
          return false;
        }

        if (filters.amenities.length > 0) {
          const hasAllAmenities = filters.amenities.every(amenity => {
            const exactMatch = property.amenities.some(
              propAmenity => normalizeString(propAmenity) === normalizeString(amenity)
            );

            if (exactMatch) {
              return true;
            }

            const partialMatch = property.amenities.some(propAmenity => {
              const normalizedPropAmenity = normalizeString(propAmenity);
              const normalizedFilterAmenity = normalizeString(amenity);

              return (
                normalizedPropAmenity.includes(normalizedFilterAmenity) ||
                normalizedFilterAmenity.includes(normalizedPropAmenity)
              );
            });

            return partialMatch;
          });

          if (!hasAllAmenities) return false;
        }

        if (filters.availableOnly && !property.available) {
          return false;
        }

        return true;
      });

      return { ...state, filteredProperties: filtered };
    default:
      return state;
  }
}

export function PropertyProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(propertyReducer, {
    ...initialState,
    loading: true,
  });

  const getStableImageUrl = (propertyType: string) => {
    const imageMap: { [key: string]: string } = {
      Apartamento:
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800',
      Casa: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800',
      Cabana:
        'https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=800',
      Flat: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800',
      Chalé: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=800',
    };
    return (
      imageMap[propertyType] ||
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800'
    );
  };

  const fetchProperties = useCallback(async () => {
    dispatch({ type: 'SET_ERROR', payload: null });

    try {
      const response = await fetch('https://run.mocky.io/v3/1dc4a564-c59c-4e3e-9f26-3d231f1cfea6');

      if (!response.ok) {
        throw new Error('Falha ao carregar os imóveis');
      }

      const data = await response.json();

      const mappedProperties = data.map((property: Property) => ({
        ...property,
        available: property.isAvailable,
        pricePerNight: property.pricePerNight,
        reviewCount: property.numberOfReviews || 0,
        hostName: 'Anfitrião',
        hostProfilePicture: '',
        imageUrl: getStableImageUrl(property.propertyType),
      }));

      dispatch({ type: 'SET_PROPERTIES', payload: mappedProperties });
    } catch (error) {
      dispatch({
        type: 'SET_ERROR',
        payload: error instanceof Error ? error.message : 'Erro desconhecido',
      });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, [dispatch]);

  useEffect(() => {
    fetchProperties();
  }, [fetchProperties]);

  useEffect(() => {
    dispatch({ type: 'FILTER_PROPERTIES' });
  }, [state.filters, state.properties]);

  return (
    <PropertyContext.Provider value={{ state, dispatch }}>{children}</PropertyContext.Provider>
  );
}

export function useProperty() {
  const context = useContext(PropertyContext);
  if (!context) {
    throw new Error('useProperty deve ser usado dentro de um PropertyProvider');
  }
  return context;
}
