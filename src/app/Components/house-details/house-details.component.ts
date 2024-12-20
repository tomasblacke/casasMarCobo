import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { icon, Icon } from 'leaflet';
import { ActivatedRoute } from '@angular/router';
import { HousesService } from '../../Services/houses.service';
import { house } from '../../Interface/housesInterface';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrl: './house-details.component.css'
})
export class HouseDetailsComponent implements OnInit, AfterViewInit {

  house: house | undefined;
  currentImageIndex = 0;
  private map?: L.Map;

  private customIcon = icon({
    iconUrl: 'assets/marker-icon.png',
    shadowUrl: 'assets/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
  });

  constructor(
    private route: ActivatedRoute,
    private housesService: HousesService
  ) {}
  ngOnInit(): void {
    window.scrollTo(0, 0);  //para ubicarnos arriba
    this.route.params.subscribe(params => {
      const id = parseInt(params['id']);
      this.house = this.housesService.getHouseById(id);
    });
  }
  ngAfterViewInit() {
    // Seteamos un timeout para dejar que el DOM se prepare
    setTimeout(() => {
      this.initMap();
    }, 100);
  }

  private initMap(): void {
    if (this.house && !this.map) {
      this.map = L.map('detail-map').setView(
        [this.house.location.coordinates.lat, this.house.location.coordinates.lng],
        15
      );

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(this.map);

      L.marker([this.house.location.coordinates.lat, this.house.location.coordinates.lng], { icon: this.customIcon })
        .addTo(this.map)
        .bindPopup(this.house.location.address)
        .openPopup();
    }
  }

  ngOnDestroy() {
    if (this.map) {
      this.map.remove();
    }
  }
  nextImage(): void {
    if (this.house && this.currentImageIndex < this.house.images.length - 1) {
      this.currentImageIndex++;
    }
  }

  previousImage(): void {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }

  setCurrentImage(index: number): void {
    this.currentImageIndex = index;
  }
  

}
