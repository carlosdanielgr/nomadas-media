import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ContentTitleComponent } from './components/content-title/content-title.component';
import { TargetsComponent } from './components/targets/targets.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ContentTitleComponent, TargetsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
