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

export function subtotal(items: Item[]): {fixed: number, monthly: number} {
  return items.reduce((price, item) => {
    if(item.selected && typeof item.price === 'number') {
      return {
        fixed: item.priceType === 'fixed' ? price.fixed + item.price : price.fixed,
        monthly: item.priceType === 'monthly' ? price.monthly + item.price : price.monthly
      };
    }

    return price;
  }, {fixed: 0.0, monthly: 0.0});
}

export function total(services: Service[]): {fixed: number, monthly: number} {
  return {
    fixed: services.reduce((price, service) => {
      return price + subtotal(service.items).fixed;
    }, 0),
    monthly: services.reduce((price, service) => {
      return price + subtotal(service.items).monthly;
    }, 0)
  };
}
