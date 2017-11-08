export interface Item {
  title: string[];
  price?: number;
  selected?: boolean;
}

export interface Service {
  title: string;
  items: Item[];
  selected?: boolean;
}
