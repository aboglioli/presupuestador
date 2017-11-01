import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html'
})
export class TotalComponent implements OnInit {
  @Input() sections: any;

  constructor() { }

  ngOnInit() {
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
