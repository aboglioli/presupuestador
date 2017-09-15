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
        title: 'Web',
        selected: false,
        defaultItems: [0, 1, 2, 3],
        items: [
          {title: 'UX/UI', value: 125.00, selected: false},
          {title: 'SEO', value: 121.00, selected: false},
          {title: 'Servidor y dominio', value: 130.00, selected: false},
          {title: 'Landing page', value: 756.00, selected: false},
          {title: 'Web personalizada', value: 120.00, selected: false},
          {title: 'E-commerce', value: 145.50, selected: false},
        ]
      },
      {
        title: 'Marketing',
        selected: false,
        defaultItems: [0, 1, 2, 3, 4, 5],
        items: [
          {title: 'Análsis de mercado', value: 125.00, selected: false},
          {title: 'Análisis de competencia', value: 21.00, selected: false},
          {title: 'Análisis de público objetivo', value: 10.00, selected: false},
          {title: 'Segmentación y posicionamiento', value: 7560.00, selected: false},
          {title: 'Definición de plan estratégico', value: 120.00, selected: false},
          {title: 'Asesoría de Marketing Digital', value: 145.50, selected: false},
          {title: 'Marketing en punto de venta', value: 125.00, selected: false}
        ]
      },
      {
        title: 'Diseño',
        selected: false,
        defaultItems: [0, 1, 2],
        items: [
          {title: 'Identidad Corporativa', value: 125.00, selected: false},
          {title: 'Papelería comercial', value: 21.00, selected: false},
          {title: 'Diseño de flyers', value: 10.00, selected: false},
          {title: 'Diseño de punto de venta', value: 7560.00, selected: false}
        ]
      },
      {
        title: 'Redes Sociales',
        selected: false,
        defaultItems: [0, 1, 2, 3],
        items: [
          {title: 'Configuración de cuentas', value: 125.00, selected: false},
          {title: 'Atención al cliente', value: 125.00, selected: false},
          {title: 'Generación de base de datos', value: 125.00, selected: false},
          {title: 'Gestión de Facebook', value: 21.00, selected: false},
          {title: 'Gestión de Instagram', value: 10.00, selected: false},
          {title: 'Gestión de Twitter', value: 7560.00, selected: false},
          {title: 'Gestión de Youtube', value: 7560.00, selected: false},
        ]
      },
      {
        title: 'Desarrollo/Sistemas',
        selected: false,
        defaultItems: [0, 1, 2],
        items: [
          {title: 'Administración de servidor', value: 125.00, selected: false},
          {title: 'Mantenimiento web', value: 125.00, selected: false},
          {title: 'Instalación y configuración de sistemas', value: 125.00, selected: false},
          {title: 'Sistema personalizado', value: 125.00, selected: false},
          {title: 'Aplicación móvil', value: 125.00, selected: false},
          {title: 'Aplicación de escritorio', value: 125.00, selected: false}
        ]
      },
      {
        title: 'Publicidad Online',
        selected: false,
        defaultItems: [0, 1, 2],
        items: [
          {title: 'Configuración de perfiles publicitarios', value: 125.00, selected: false},
          {title: 'Planificación de anuncios', value: 125.00, selected: false},
          {title: 'Ejecución en Facebook', value: 125.00, selected: false},
          {title: 'Ejecución en Instagram', value: 125.00, selected: false},
          {title: 'Ejecución en Twitter', value: 125.00, selected: false},
          {title: 'Ejecución en Youtube', value: 125.00, selected: false},
          {title: 'Ejecución en Google', value: 125.00, selected: false},
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

  onContactData(contact: any) {
    // console.log(contact);
  }
}
