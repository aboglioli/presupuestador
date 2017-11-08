import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as R from 'ramda';

import { Service } from './models';
import { selectedServices, total } from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  services: Service[];
  contactData: any = {};
  contactValid = false;
  formSent = false;

  total = total;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.services = [
      {
        title: 'Web',
        items: [
          {title: ['UX/UI', 'SEO', 'Servidor y dominio'], price: 3000, priceType: 'monthly'},
          {title: ['Landing page'], price: 5000.0, priceType: 'fixed'},
          {title: ['Web personalizada'], price: 8000.0, priceType: 'fixed'},
          {title: ['E-commerce'], price: 25000.0, priceType: 'fixed'},
        ]
      },
      {
        title: 'Marketing',
        items: [
          {title: ['Análsis de mercado', 'Análisis de competencia', 'Análisis de público objetivo', 'Segmentación y posicionamiento', 'Definición de plan estratégico', ], price: 3000, priceType: 'monthly'},
          {title: ['Asesoría de Marketing Digital'], price: 3000.0, priceType: 'monthly'},
          {title: ['Marketing en punto de venta'], price: 3000.0, priceType: 'monthly'}
        ]
      },
      {
        title: 'Diseño',
        items: [
          {title: ['Identidad e Imagen Corporativa', 'Manual de Marca'], price: 4000, priceType: 'fixed'},
          {title: ['Papelería comercial'], price: 500.0, priceType: 'fixed'},
          {title: ['Cartelería'], price: 500.0, priceType: 'fixed'},
          {title: ['Merchandising'], price: 1000.0, priceType: 'fixed'},
          {title: ['Diseño de punto de venta'], price: 1500.0, priceType: 'fixed'},
          {title: ['Banners'], price: 350.0, priceType: 'fixed'},
          {title: ['Diseño de revistas, folletos y diarios'], price: 800.0, priceType: 'fixed'},
        ]
      },
      {
        title: 'Redes Sociales',
        items: [
          {title: ['Configuración de cuentas', 'Atención al cliente', 'Generación de base de datos', 'Gestión de Facebook', 'Generación de contenido'], price: 4000, priceType: 'monthly'},
          {title: ['Gestión de Instagram'], price: 1000, priceType: 'monthly'},
          {title: ['Gestión de Twitter'], price: 1000, priceType: 'monthly'},
          {title: ['Gestión de Youtube'], price: 1000, priceType: 'monthly'},
          {title: ['Diseño de flyers'], price: 1000, priceType: 'monthly'},
        ]
      },
      {
        title: 'Desarrollo/Sistemas',
        items: [
          {title: ['Mantenimiento web', 'Instalación y configuración de sistemas', ], price: 2000, priceType: 'monthly'},
          {title: ['Administración de servidor'], price: 1200, priceType: 'monthly'},
          {title: ['Sistema personalizado']},
          {title: ['Aplicación móvil']},
          {title: ['Aplicación de escritorio']}
        ]
      },
      {
        title: 'Publicidad Online',
        items: [
          {title: ['Configuración de perfiles publicitarios', 'Planificación de anuncios'], price: 3000, priceType: 'fixed'},
          {title: ['Monitorización y optimización'], price: 2000, priceType: 'monthly'},
          {title: ['Ejecución en Facebook'], price: 1000, priceType: 'monthly'},
          {title: ['Ejecución en Instagram'], price: 1000, priceType: 'monthly'},
          {title: ['Ejecución en Twitter'], price: 1000, priceType: 'monthly'},
          {title: ['Ejecución en Youtube'], price: 1000, priceType: 'monthly'},
          {title: ['Ejecución en Google'], price: 1000, priceType: 'monthly'},
        ]
      }
    ];
  }

  submit() {
    const services = selectedServices(this.services)
      .reduce((obj, service) => {
        const serviceItems = service.items.reduce((obj, item) => {
          const itemPrice = item.price !== undefined ? `\$ ${item.price.toFixed(2)} (${item.priceType === 'fixed' ? 'Fijo' : 'Mensual'})` : 'A consultar';
          obj[item.title.join(', ')] = itemPrice;
          return obj;
        }, {});

        obj[service.title] = serviceItems;
        return obj;
      }, {});
    const servicesTotal = total(this.services);

    const data = {
      contact: this.contactData,
      services,
      total: {
        fixed: `\$ ${servicesTotal.fixed.toFixed(2)}`,
        monthly: `\$ ${servicesTotal.monthly.toFixed(2)}`
      }
    };

    this.http.post('https://ideenegocios.com.ar:3001/idee-negocios', data)
      .subscribe(res => {
        console.log(res);
        this.formSent = true;
      });
  }
}
