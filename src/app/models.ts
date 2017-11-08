export interface Item {
  title: string[];
  price?: number;
  priceType?: 'fixed' | 'monthly';
  selected?: boolean;
}

export interface Service {
  title: string;
  items: Item[];
  selected?: boolean;
}
