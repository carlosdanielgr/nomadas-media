import { Component } from '@angular/core';

import { ContentTitleComponent } from './components/content-title/content-title.component';
import { TargetsComponent } from './components/targets/targets.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { ServicesComponent } from './components/services/services.component';
import { ContentInfoComponent } from './components/content-info/content-info.component';
import { StrategyComponent } from './components/strategy/strategy.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FormComponent } from './components/form/form.component';
import { FaqsComponent } from './components/faqs/faqs.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ContentTitleComponent,
    TargetsComponent,
    CompaniesComponent,
    ServicesComponent,
    ContentInfoComponent,
    StrategyComponent,
    ProjectsComponent,
    FormComponent,
    FaqsComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
