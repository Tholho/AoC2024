import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import { DaysComponent } from './pages/days/days.component';
import {MainPageComponent} from './pages/main-page/main-page.component';

export const routes: Routes = [
  {
    path: 'days/:id',
    component: DaysComponent
  },
  {
    path: 'main',
    component: MainPageComponent
  }
];
