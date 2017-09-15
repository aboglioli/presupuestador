import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html'
})
export class ServicesComponent implements OnInit {
  fields: any = [];

  ngOnInit() {
    this.fields = this.formatFields([
      {
        title: 'Web',
        defaultItems: [0, 1, 2, 3],
        items: [
          {title: 'UX/UI', price: {monthly: 0.0, integral: 0.0}},
          {title: 'SEO', price: {monthly: 0.0, integral: 0.0}},
          {title: 'Servidor y dominio', price: {monthly: 0.0, integral: 0.0}},
          {title: 'Landing page', price: {monthly: 0.0, integral: 0.0}},
          {title: 'Web personalizada', price: {monthly: 0.0, integral: 0.0}},
          {title: 'E-commerce', price: {monthly: 0.0, integral: 0.0}},
        ]
      },
      {
        title: 'Marketing',
        defaultItems: [0, 1, 2, 3, 4, 5],
        items: [
          {title: 'Análsis de mercado', price: {monthly: 0.0, integral: 0.0}},
          {title: 'Análisis de competencia', price: {monthly: 0.0, integral: 0.0}},
          {title: 'Análisis de público objetivo', price: {monthly: 0.0, integral: 0.0}},
          {title: 'Segmentación y posicionamiento', price: {monthly: 0.0, integral: 0.0}},
          {title: 'Definición de plan estratégico', price: {monthly: 0.0, integral: 0.0}},
          {title: 'Asesoría de Marketing Digital', price: {monthly: 0.0, integral: 0.0}},
          {title: 'Marketing en punto de venta', price: {monthly: 0.0, integral: 0.0}}
        ]
      },
      {
        title: 'Diseño',
        defaultItems: [0, 1, 2],
        items: [
          {title: 'Identidad Corporativa', price: {monthly: 0.0, integral: 0.0}},
          {title: 'Papelería comercial', price: {monthly: 0.0, integral: 0.0}},
          {title: 'Diseño de flyers', price: {monthly: 0.0, integral: 0.0}},
          {title: 'Diseño de punto de venta', price: {monthly: 0.0, integral: 0.0}}
        ]
      },
      {
        title: 'Redes Sociales',
        defaultItems: [0, 1, 2, 3],
        items: [
          {title: 'Configuración de cuentas', price: {monthly: 0.0, integral: 0.0}},
          {title: 'Atención al cliente', price: {monthly: 0.0, integral: 0.0}},
          {title: 'Generación de base de datos', price: {monthly: 0.0, integral: 0.0}},
          {title: 'Gestión de Facebook', price: {monthly: 0.0, integral: 0.0}},
          {title: 'Gestión de Instagram', price: {monthly: 0.0, integral: 0.0}},
          {title: 'Gestión de Twitter', price: {monthly: 0.0, integral: 0.0}},
          {title: 'Gestión de Youtube', price: {monthly: 0.0, integral: 0.0}},
        ]
      },
      {
        title: 'Desarrollo/Sistemas',
        defaultItems: [0, 1, 2],
        items: [
          {title: 'Administración de servidor', price: {monthly: 0.0, integral: 0.0}},
          {title: 'Mantenimiento web', price: {monthly: 0.0, integral: 0.0}},
          {title: 'Instalación y configuración de sistemas', price: {monthly: 0.0, integral: 0.0}},
          {title: 'Sistema personalizado', price: {monthly: 0.0, integral: 0.0}},
          {title: 'Aplicación móvil', price: {monthly: 0.0, integral: 0.0}},
          {title: 'Aplicación de escritorio', price: {monthly: 0.0, integral: 0.0}}
        ]
      },
      {
        title: 'Publicidad Online',
        defaultItems: [0, 1, 2],
        items: [
          {title: 'Configuración de perfiles publicitarios', price: {monthly: 0.0, integral: 0.0}},
          {title: 'Planificación de anuncios', price: {monthly: 0.0, integral: 0.0}},
          {title: 'Ejecución en Facebook', price: {monthly: 0.0, integral: 0.0}},
          {title: 'Ejecución en Instagram', price: {monthly: 0.0, integral: 0.0}},
          {title: 'Ejecución en Twitter', price: {monthly: 0.0, integral: 0.0}},
          {title: 'Ejecución en Youtube', price: {monthly: 0.0, integral: 0.0}},
          {title: 'Ejecución en Google', price: {monthly: 0.0, integral: 0.0}},
        ]
      }
    ]);
  }

  private formatFields(fields: any, defaultSelection = false) {
    return fields.map(field => {
      if(!field['selected']) field['selected'] = defaultSelection;
      field.items = field.items.map(item => {
        if(!item['selected']) item['selected'] = defaultSelection;
        return item;
      });
      return field;
    });
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

  selectItem()

  selectSection(section: any) {
    section.selected = !section.selected;

    section.items.forEach(item => {
      item.selected = section.selected;
    });
  }
}
