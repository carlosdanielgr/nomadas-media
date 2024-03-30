import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ContentTitleComponent } from './components/content-title/content-title.component';
import { TargetsComponent } from './components/targets/targets.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { ServicesComponent } from './components/services/services.component';
import { ContentInfoComponent } from './components/content-info/content-info.component';
import { StrategyComponent } from './components/strategy/strategy.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    ContentTitleComponent,
    TargetsComponent,
    CompaniesComponent,
    ServicesComponent,
    ContentInfoComponent,
    StrategyComponent,
    ProjectsComponent,
    FormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
