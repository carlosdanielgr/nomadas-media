import { Component } from '@angular/core';
import { BtnGetStrategyComponent } from '../../../../shared/components/btn-get-strategy/btn-get-strategy.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [BtnGetStrategyComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {}
