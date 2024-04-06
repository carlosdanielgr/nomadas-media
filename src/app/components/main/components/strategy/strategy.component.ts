import { Component } from '@angular/core';
import { BtnGetStrategyComponent } from '../../../../shared/components/btn-get-strategy/btn-get-strategy.component';

@Component({
  selector: 'app-strategy',
  standalone: true,
  imports: [BtnGetStrategyComponent],
  templateUrl: './strategy.component.html',
  styleUrl: './strategy.component.scss',
})
export class StrategyComponent {}
