import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; //import home components
import { AboutComponent } from './about/about.component'; //import about component

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
