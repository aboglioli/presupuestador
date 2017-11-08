import { Component, OnInit } from '@angular/core';
import * as R from 'ramda';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  services: any;
  contactData: any;

  ngOnInit() {
    this.services = [
      {
        title: 'Web',
        items: [
          {title: ['UX/UI', 'SEO', 'Servidor y dominio'], price: 4000},
          {title: ['Landing page'], price: 0.0},
          {title: ['Web personalizada'], price: 0.0},
          {title: ['E-commerce'], price: 0.0},
        ]
      },
      {
        title: 'Marketing',
        items: [
          {title: ['Análsis de mercado', 'Análisis de competencia', 'Análisis de público objetivo', 'Segmentación y posicionamiento', 'Definición de plan estratégico', ], price: 2000},
          {title: ['Asesoría de Marketing Digital'], price: 0.0},
          {title: ['Marketing en punto de venta'], price: 0.0}
        ]
      },
      {
        title: 'Diseño',
        items: [
          {title: ['Identidad e Imagen Corporativa', 'Manual de Marca'], price: 4000},
          {title: ['Papelería comercial'], price: 0.0},
          {title: ['Cartelería'], price: 0.0},
          {title: ['Merchandising'], price: 0.0},
          {title: ['Diseño de punto de venta'], price: 0.0},
          {title: ['Banners'], price: 0.0},
          {title: ['Diseño de revistas, folletos y diarios'], price: 0.0},
        ]
      },
      {
        title: 'Redes Sociales',
        items: [
          {title: ['Configuración de cuentas', 'Atención al cliente', 'Generación de base de datos', 'Gestión de Facebook', 'Generación de contenido'], price: 4000},
          {title: ['Gestión de Instagram'], price: 1000},
          {title: ['Gestión de Twitter'], price: 1000},
          {title: ['Gestión de Youtube'], price: 1000},
          {title: ['Diseño de flyers'], price: 1000},
        ]
      },
      {
        title: 'Desarrollo/Sistemas',
        items: [
          {title: ['Administración de servidor', 'Mantenimiento web', 'Instalación y configuración de sistemas', ], price: 1000},
          {title: ['Sistema personalizado'], price: 0.0},
          {title: ['Aplicación móvil'], price: 0.0},
          {title: ['Aplicación de escritorio'], price: 0.0}
        ]
      },
      {
        title: 'Publicidad Online',
        items: [
          {title: ['Configuración de perfiles publicitarios', 'Planificación de anuncios'], price: 3000},
          {title: ['Ejecución en Facebook'], price: 1000},
          {title: ['Ejecución en Instagram'], price: 1000},
          {title: ['Ejecución en Twitter'], price: 1000},
          {title: ['Ejecución en Youtube'], price: 1000},
          {title: ['Ejecución en Google'], price: 1000},
        ]
      }
    ];
  }

  submit() {
    const services = this.services
      .map(service => {
        return {
          ...R.omit(['selected'], service),
          items: service.items.filter(item => item.selected).map(R.omit(['selected']))
        }
      })
      .filter(service => service.items.length > 0);

    console.log(services);
  }
}
