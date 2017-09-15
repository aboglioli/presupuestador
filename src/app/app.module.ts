import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact.component';
import { PlanSelectionComponent } from './plan-selection.component';
import { ServicesComponent } from './services.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanSelectionComponent,
    ServicesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
