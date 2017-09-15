export interface Item {
  title: string;
  price?: {
    monthly: number;
    integral: number;
  }
}

export interface Section {
  title: string;
  defaultItems: number[];
  defaultItemsPrice: number;
  items: Item[];
}
