import { Component, OnInit } from '@angular/core';
import { HousesService } from '../../Services/houses.service';
import { house } from '../../Interface/housesInterface';

@Component({
  selector: 'app-photos-carousel',
  templateUrl: './photos-carousel.component.html',
  styleUrl: './photos-carousel.component.css'
})
export class PhotosCarouselComponent {
  houses: house[] = [];
  allImages: {url: string, alt: string, title: string}[] = [];
  constructor( private housesService : HousesService){}
  ngOnInit(): void {
    this.houses = this.housesService.getHouses();
}
}

