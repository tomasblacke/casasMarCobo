import { Injectable } from '@angular/core';

import { house } from '../Interface/housesInterface';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  private houses : house [] = [
    { 
      id: 1,
      name: 'Casa Roja',
      description: 'Hermosa casa con amplio jardín a una cuadra de la playa.Distribuida en 2 niveles. Una planta baja con cocina, baño, comedor y living y un primer piso con 2 habitaciones y baño completo.',
      shortDescription: 'Casa equipada con 2 dormitorios para 5 personas',
      features: [
        '2 Dormitorios',
        '2 Baños (una completo y otro semi)',
        'Cocina integrada',
        'Jardín amplio',
        'Aire Acondicionado',
        'WI-FI',
        'Parrilla',
        'Garage p/ 1 auto'
      ],
      images: [
        { url: './assets/images/casa1-1.jpg', alt: 'Fachada Roja' },
        { url: './assets/images/casa1-2.jpg', alt: 'Interior Roja' },
        { url: './assets/images/casa1-3.jpg', alt: 'Interior Roja' },
        { url: './assets/images/casa1-4.jpg', alt: 'Interior Roja' },
        { url: './assets/images/casa1-5.jpg', alt: 'Interior Roja' },
        { url: './assets/images/casa1-6.jpg', alt: 'Interior Roja' },
        { url: './assets/images/casa1-7.jpg', alt: 'Interior Roja' },
        { url: './assets/images/casa1-8.jpg', alt: 'Interior Roja' },
        { url: './assets/images/casa1-9.jpg', alt: 'Interior Roja' }
      ],
      location: {
        address: 'Reconquista 200',// ver por que no me acuerdo la direccion complete
        coordinates: {
          lat: -37.77724195785376,
          lng: -57.45179367327881
        }, 
      }
    },
    {
      id: 2,
      name: 'Casa Verde',
      description: 'Hermosa casa con amplio jardín a una cuadra de la playa.Distribuida en 2 pisos. Una planta baja con living, comedor, alacena, cocina y desayunador.Un primer piso con 2 amplios dormitorios y un baño completo. Cuenta con parilla techada, espacio de garage para 2 autos y un amplio jardin para disfrutar los dias soleados.',
      shortDescription: 'Casa equipada con 2 dormitorios para 6/7 personas',
      features: [
        '2 Dormitorios',
        '2 Baños (una completo y otro semi)',
        'Cocina equipada',
        'Jardín amplio',
        'Aire Acondicionado',
        'WI-FI',
        'Parrilla',
        'Garage p/ 2 autos',
        'Desayunador',
        'Juegos Infantiles'
      ],
      images: [
        { url: 'assets/images/casa2-1.jpg', alt: 'Fachada Verde' },
        { url: 'assets/images/casa2-2.jpg', alt: 'Interior Verde' },
        { url: 'assets/images/casa2-3.jpg', alt: 'Interior Verde' },
        { url: 'assets/images/casa2-4.jpg', alt: 'Interior Verde' },
        { url: 'assets/images/casa2-5.jpg', alt: 'Interior Verde' },
        { url: 'assets/images/casa2-6.jpg', alt: 'Interior Verde' },
        { url: 'assets/images/casa2-7.jpg', alt: 'Interior Verde' },
        { url: 'assets/images/casa2-8.jpg', alt: 'Interior Verde' },
        { url: 'assets/images/casa2-9.jpg', alt: 'Interior Verde' },
        { url: 'assets/images/casa2-10.jpg', alt: 'Interior Verde' },
        { url: 'assets/images/casa2-11.jpg', alt: 'Interior Verde' }
      ],
      location: {
        address: 'Del Buen Orden 137',// ver por que no me acuerdo la direccion completa
        coordinates: {
          lat: -37.7776462194929,
          lng: -57.452088158810035
        }, 
      }
  
    }
  ]
  getHouses(): house[] {
    return this.houses;
  }

  getHouseById(id: number): house | undefined {
    return this.houses.find(house => house.id === id);
  }
    
  }


