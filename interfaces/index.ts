export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: [];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
  description?: string;
  amenity?: string;
}

export interface PropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: PropertyProps | null;
}

export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}
