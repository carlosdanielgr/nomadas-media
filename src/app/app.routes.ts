import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { TermsComponent } from './components/terms/terms.component';
import { PrivacyComponent } from './components/privacy/privacy.component';

export const routes: Routes = [
  {
    component: MainComponent,
    path: '',
  },
  {
    component: TermsComponent,
    path: 'terms',
  },
  {
    component: PrivacyComponent,
    path: 'privacy',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];
