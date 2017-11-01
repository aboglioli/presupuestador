import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html'
})
export class ServiceItemComponent implements OnInit {
  @Input() item: any;
  @Input() first: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
