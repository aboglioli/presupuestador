import { Component, OnInit, Input } from '@angular/core';

import { Service, subtotal } from './models';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html'
})
export class ServiceComponent implements OnInit {
  @Input() service: Service;

  subtotal = subtotal;

  constructor() { }

  ngOnInit() {
  }

  selectService(service: any) {
    service.selected = !service.selected;
    service.items.forEach(item => item.selected = service.selected);
  }

  firstItem() {
    return this.service.items[0];
  }

  lastItems() {
    return this.service.items.slice(1);
  }
}
