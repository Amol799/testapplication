import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './userNavbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router){

  }
  ngOnInit(): void {
  }
  RenderPage(event: any): void {
    // Add your code logic here
  }

}
