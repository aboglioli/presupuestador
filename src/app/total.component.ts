import { Component, OnInit, Input } from '@angular/core';
import * as R from 'ramda';

import { Service, selectedServices, subtotal, total } from './models';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html'
})
export class TotalComponent implements OnInit {
  private _services: Service[];

  selectedServices = selectedServices;
  subtotal = subtotal;
  total = total;

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set services(services: Service[]) {
    this._services = services;
  }

  get services(): Service[] {
    return selectedServices(this._services);
  }

}
