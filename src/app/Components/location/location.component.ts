import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HousesService } from '../../Services/houses.service';
import * as L from 'leaflet';
import { icon, Icon } from 'leaflet';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent  implements OnInit, AfterViewInit {
  private map: L.Map | undefined;
  houses: any[] = [];

  private customIcon = icon({
    iconUrl: 'assets/marker-icon.png',
    shadowUrl: 'assets/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
  });

  
  constructor(private housesService: HousesService) {}

  ngOnInit(): void {
    this.houses = this.housesService.getHouses();
  }
  ngAfterViewInit(): void {
    this.initMap();
  }
  private initMap(): void {
    // Coordenadas iniciales del mapa (se ajustan para la vista inicial)
    const initialCoords: L.LatLngExpression = [-37.77317548480418,-57.45566223836003];

    this.map = L.map('map').setView(initialCoords, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    // Agregamos marcadores para cada casa
    this.houses.forEach(house => {
      const marker = L.marker([house.location.coordinates.lat, house.location.coordinates.lng], { icon: this.customIcon })
        .addTo(this.map!)
        .bindPopup(`
          <strong>${house.name}</strong><br>
          ${house.location.address}
        `);
    });
  }

}
