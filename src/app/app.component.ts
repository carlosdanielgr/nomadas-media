import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ContentTitleComponent } from './components/content-title/content-title.component';
import { TargetsComponent } from './components/targets/targets.component';
import { CompaniesComponent } from './components/companies/companies.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    ContentTitleComponent,
    TargetsComponent,
    CompaniesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
