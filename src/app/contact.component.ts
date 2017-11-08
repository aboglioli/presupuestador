import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
})
export class ContactComponent implements OnInit {
  @Output() contactData = new EventEmitter<any>();
  @Output() contactValid = new EventEmitter<boolean>();

  contactForm: FormGroup;
  businessTypes = ['Emprendimiento', 'Empresa'];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      businessType: ['', Validators.required],
      url: [''],
      message: ['']
    });


    this.contactForm.valueChanges.subscribe(data => {
      this.contactData.emit(data);
      this.contactValid.emit(this.contactForm.valid);
    });
  }

}
