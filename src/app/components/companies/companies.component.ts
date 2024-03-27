import { Component } from '@angular/core';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

interface Image {
  url: string;
  isSmall?: boolean;
}

const URL_IMAGE = './assets/images/companies/';

const ORIGINAL_IMAGES: Image[] = [
  {
    url: `${URL_IMAGE}Company-01.png`,
  },
  {
    url: `${URL_IMAGE}Company-01.png`,
  },
  {
    url: `${URL_IMAGE}Company-01.png`,
  },
  {
    url: `${URL_IMAGE}Company-01.png`,
  },
  {
    url: `${URL_IMAGE}Company-01.png`,
  },
  {
    url: `${URL_IMAGE}Company-01.png`,
  },
  {
    url: `${URL_IMAGE}Company-01.png`,
  },
  {
    url: `${URL_IMAGE}Company-01.png`,
  },
  {
    url: `${URL_IMAGE}Company-01.png`,
  },
  {
    url: `${URL_IMAGE}Company-01.png`,
  },
  {
    url: `${URL_IMAGE}Company-01.png`,
  },
  {
    url: `${URL_IMAGE}Company-01.png`,
  },
  {
    url: `${URL_IMAGE}Company-01.png`,
  },
  {
    url: `${URL_IMAGE}Company-01.png`,
  },
];

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.scss',
})
export class CompaniesComponent {
  images: Array<Image[]> = [];

  constructor() {
    if (window.innerWidth > 992) this.splitArray(4);
    else if (window.innerWidth > 450) this.splitArray(2);
    else this.splitArray(1);
  }

  splitArray(numParts: number) {
    const partLength = Math.ceil(ORIGINAL_IMAGES.length / numParts);
    for (let index = 0; index < partLength; index++) {
      const start = index * numParts;
      const end = start + numParts;
      this.images.push(ORIGINAL_IMAGES.slice(start, end));
    }
  }
}
