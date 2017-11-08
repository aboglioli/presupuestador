import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html'
})
export class ServicesComponent implements OnInit {
  @Input() services: any;

  ngOnInit() {
    this.services = this.formatFields(this.services);
  }

  private formatFields(services: any, defaultSelection = false) {
    return services.map(field => {
      if(!field['selected']) field['selected'] = defaultSelection;
      field.items = field.items.map(item => {
        if(!item['selected']) item['selected'] = defaultSelection;
        return item;
      });
      return field;
    });
  }
}
