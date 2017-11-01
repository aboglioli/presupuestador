import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html'
})
export class ServiceComponent implements OnInit {
  @Input() section: any;

  constructor() { }

  ngOnInit() {
  }

  selectSection(section: any) {
    section.selected = !section.selected;

    if(section.items.length > 0) {
      section.items[0].selected = section.selected;
    }
  }

  subtotal(items: any[]) {
    return items.reduce((price, item) => {
      if(item.selected) {
        return price + item.price;
      }

      return price;
    }, 0);
  }

  firstItem() {
    return this.section.items[0];
  }

  lastItems() {
    return this.section.items.slice(1);
  }
}
