import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { TermsComponent } from './components/terms/terms.component';

export const routes: Routes = [
  {
    component: MainComponent,
    path: '',
  },
  {
    component: TermsComponent,
    path: 'terms-privacy',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];
