import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgTemplateOutlet, NgbCarouselModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {}
