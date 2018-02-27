import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-suggested-plan',
  templateUrl: './suggested-plan.component.html',
  styleUrls: ['./suggested-plan.component.scss']
})
export class SuggestedPlanComponent implements OnInit {
  @Input() services: any;

  constructor() { }

  ngOnInit() {
  }

  suggest() {
    this.reset();

    // web
    this.services[0].items[0].selected = true;
    this.services[0].items[2].selected = true;

    // marketing
    this.services[1].items[0].selected = true;

    // design
    this.services[2].items[0].selected = true;

    // social networks
    this.services[3].items[0].selected = true;
    this.services[3].items[4].selected = true;

    // advertisement
    this.services[5].items[0].selected = true;
  }

  reset() {
    this.services.forEach(service => {
      service.items.forEach(item => {
        item.selected = false;
      });
    });
  }

}
