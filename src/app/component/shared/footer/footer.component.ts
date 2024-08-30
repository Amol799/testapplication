import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  copyrightYear: any = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

  contactUs: boolean = false;
  category: boolean = false;
  service: boolean = false;
  extras: boolean = false;


  onContactUs() {
    this.contactUs = !this.contactUs;
  }

  onCategory() {
    this.category = !this.category;
  }

  onService() {
    this.service = !this.service;
  }

  onExtras() {
    this.extras = !this.extras;
  }
}
