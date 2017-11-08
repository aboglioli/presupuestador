import { Component, OnInit, Input } from '@angular/core';
import * as R from 'ramda';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html'
})
export class TotalComponent implements OnInit {
  @Input() sections: any;

  constructor() { }

  ngOnInit() {
  }

  get services() {
    return this.sections
      .map(service => {
        return {
          ...R.omit(['selected'], service),
          items: service.items.filter(item => item.selected).map(R.omit(['selected']))
        }
      })
      .filter(service => service.items.length > 0);
  }

  subtotal(items: any[]) {
    return items.reduce((price, item) => {
      if(item.selected) {
        return price + item.price;
      }

      return price;
    }, 0);
  }

  total() {
    return this.sections.reduce((price, section) => {
      return price + this.subtotal(section.items);
    }, 0);
  }

}
