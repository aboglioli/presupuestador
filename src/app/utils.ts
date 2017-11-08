import * as R from 'ramda';

import { Service, Item } from './models';

export function selectedServices(services: Service[]) {
  return services
    .map(service => {
      return {
        ...R.omit(['selected'], service),
        items: service.items.filter(item => item.selected).map(R.omit(['selected']))
      }
    })
    .filter(service => service.items.length > 0);
}

export function subtotal(items: Item[]) {
  return items.reduce((price, item) => {
    if(item.selected) {
      return price + item.price;
    }

    return price;
  }, 0);
}

export function total(services: Service[]) {
  return services.reduce((price, service) => {
    return price + subtotal(service.items);
  }, 0);
}
