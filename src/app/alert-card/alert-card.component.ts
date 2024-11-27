import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseClassDirective } from '../BaseClass.directive';
import { CardComponent } from '../shared/component/card/card.component';

@Component({
  selector: 'angular-inheritance-alert-card',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './alert-card.component.html',
  styleUrl: './alert-card.component.scss',
})
export class AlertCardComponent extends BaseClassDirective {
  override getCardType(): string {
    return 'Alert Card';
  }
}
