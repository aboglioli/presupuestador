import { Component, OnInit, Input } from '@angular/core';

import { Item } from './models';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html'
})
export class ServiceItemComponent implements OnInit {
  @Input() item: Item;
  @Input() first: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
