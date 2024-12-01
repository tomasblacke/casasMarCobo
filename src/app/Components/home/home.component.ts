import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HousesService } from '../../Services/houses.service';
import { house } from '../../Interface/housesInterface';
import * as AOS from 'aos';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  houses: house[] = [];

  constructor(private housesService: HousesService) {}

  ngOnInit(): void {
    this.houses = this.housesService.getHouses();
    //init of aos
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }
}
