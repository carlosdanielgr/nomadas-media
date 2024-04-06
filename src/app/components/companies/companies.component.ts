import { Component } from '@angular/core';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

interface Image {
  url: string;
  isTall?: boolean;
}

const URL_IMAGE = './assets/images/companies/';

const ORIGINAL_IMAGES: Image[] = [
  {
    url: `${URL_IMAGE}actus.png`,
  },
  {
    url: `${URL_IMAGE}kia.png`,
  },
  {
    url: `${URL_IMAGE}dogger.png`,
  },
  {
    url: `${URL_IMAGE}nissan.png`,
    isTall: true,
  },
  {
    url: `${URL_IMAGE}mitsubishi.png`,
  },
  {
    url: `${URL_IMAGE}professional.png`,
  },
  {
    url: `${URL_IMAGE}huertas.png`,
    isTall: true,
  },
  {
    url: `${URL_IMAGE}redbridge.png`,
  },
  {
    url: `${URL_IMAGE}caribe.png`,
  },
  {
    url: `${URL_IMAGE}coffee.png`,
    isTall: true,
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
