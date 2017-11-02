import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact.component';
import { ServicesComponent } from './services.component';
import { TotalComponent } from './total.component';
import { ServiceItemComponent } from './service-item.component';
import { ServiceComponent } from './service.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    ContactComponent,
    TotalComponent,
    ServiceItemComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
