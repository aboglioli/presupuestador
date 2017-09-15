import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-plan-selection',
  templateUrl: 'plan-selection.component.html',
})
export class PlanSelectionComponent implements OnInit {
  @Output() selectedPlan = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {

  }
}
