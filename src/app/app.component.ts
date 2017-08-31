import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  fields: any;

  ngOnInit() {
    this.fields = [
      {
        title: 'Marketing',
        selected: false,
        items: [
          {title: 'Algo', value: 125.00, selected: false},
          {title: 'Asd', value: 121.00, selected: false},
          {title: 'Qwe asd ad qwe qasczxc', value: 130.00, selected: false},
          {title: 'Zxc', value: 756.00, selected: false},
          {title: 'Vasc', value: 120.00, selected: false},
          {title: 'Qacaqeqe', value: 145.50, selected: false},
        ]
      },
      {
        title: 'Desarrollo',
        selected: false,
        items: [
          {title: 'Ago', value: 125.00, selected: false},
          {title: 'Asd', value: 21.00, selected: false},
          {title: 'Qe', value: 10.00, selected: false},
          {title: 'Zc', value: 7560.00, selected: false},
          {title: 'Vasc', value: 120.00, selected: false},
          {title: 'Qasc', value: 145.50, selected: false},
          {title: 'Ago', value: 125.00, selected: false},
          {title: 'Asd', value: 21.00, selected: false},
          {title: 'Qe', value: 10.00, selected: false},
          {title: 'Zc', value: 7560.00, selected: false},
          {title: 'Vasc', value: 120.00, selected: false},
          {title: 'Qasc', value: 145.50, selected: false},
        ]
      }
    ];
  }

  subtotal(items: any[]) {
    return items.reduce((price, item) => {
      if(item.selected) {
        return price + item.value;
      }

      return price;
    }, 0);
  }

  total() {
    return this.fields.reduce((price, section) => {
      return price + this.subtotal(section.items);
    }, 0);
  }

  selectSection(section: any) {
    section.selected = !section.selected;

    section.items.forEach(item => {
      item.selected = section.selected;
    });
  }
}
