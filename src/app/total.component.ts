import { Component, OnInit, Input } from '@angular/core';
import * as R from 'ramda';

import { Service } from './models';
import { selectedServices, subtotal, total } from './utils';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit {
  private _services: Service[];

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

  total() {
    return total(this._services);
  }

}
