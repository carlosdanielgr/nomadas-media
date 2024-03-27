import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ContentTitleComponent } from './components/content-title/content-title.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ContentTitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
