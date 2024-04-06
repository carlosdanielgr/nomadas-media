import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

interface Project {
  image: string;
  name: string;
  labels: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgTemplateOutlet, NgbCarouselModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  URL_IMAGE = './assets/images/companies/';

  projects: Project[] = [
    {
      image: `${this.URL_IMAGE}actus.png`,
      name: 'Actus ELENA',
      labels: ['UX Design', 'Meta Ads', 'Google Ads'],
    },
    {
      image: `${this.URL_IMAGE}resuelve.png`,
      name: 'Resuelve tu Seguro',
      labels: ['UX Design'],
    },
    {
      image: `${this.URL_IMAGE}dogger.png`,
      name: 'Dogger',
      labels: ['UX Design', 'Meta Ads', 'Google Ads'],
    },
    {
      image: `${this.URL_IMAGE}kia.png`,
      name: 'Ricardo Caballero KIA',
      labels: ['UX', 'Social Media', 'Meta Ads', 'Google Ads'],
    },
    {
      image: `${this.URL_IMAGE}professional.png`,
      name: 'PIMA',
      labels: ['Meta Ads', 'Google Ads', 'LinkedIn Ads'],
    },
    {
      image: `${this.URL_IMAGE}coffee.png`,
      name: 'Gustos Coffee',
      labels: ['Social Media', 'Meta Ads', 'Google Ads'],
    },
    {
      image: `${this.URL_IMAGE}redbridge.png`,
      name: 'RedBridge',
      labels: ['Social Media', 'Meta Ads', 'Google Ads'],
    },
    {
      image: `${this.URL_IMAGE}nissan.png`,
      name: 'RCA NISSAN',
      labels: ['UX', 'Social Media', 'Meta Ads', 'Google Ads'],
    },
  ];
}
