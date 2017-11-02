import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html'
})
export class ServicesComponent implements OnInit {
  @Input() services: any;

  sections: any = [];

  ngOnInit() {
    this.sections = this.formatFields(this.services);
  }

  private formatFields(sections: any, defaultSelection = false) {
    return sections.map(field => {
      if(!field['selected']) field['selected'] = defaultSelection;
      field.items = field.items.map(item => {
        if(!item['selected']) item['selected'] = defaultSelection;
        return item;
      });
      return field;
    });
  }
}
