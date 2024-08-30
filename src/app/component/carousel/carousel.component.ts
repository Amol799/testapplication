import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';

import { CarouselModel } from '../../model/carousselmodel';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {
  lstCarousel : any

  constructor(){}

  ngOnInit(): void {
    //  this.lstCarousel = this.commnsvc.GetCarouselData();
  }
}
