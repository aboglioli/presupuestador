import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  planType: string;
  selectedServices: any;
  contactData: any;

  ngOnInit() {
  }
}
