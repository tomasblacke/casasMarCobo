import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactFormComponent } from './Components/contact-form/contact-form.component';
import { HomeComponent } from './Components/home/home.component';
import { LocationComponent } from './Components/location/location.component';
import { PhotosCarouselComponent } from './Components/photos-carousel/photos-carousel.component';
import { HouseDetailsComponent } from './Components/house-details/house-details.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactFormComponent},
  {path: 'location', component: LocationComponent},
  {path : 'photos', component: PhotosCarouselComponent},
  {path: 'details/:id', component: HouseDetailsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
