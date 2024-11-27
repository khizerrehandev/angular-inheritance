import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseClassDirective } from '../BaseClass.directive';
import { CardComponent } from '../shared/component/card/card.component';

@Component({
  selector: 'angular-inheritance-success-card',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './success-card.component.html',
  styleUrl: './success-card.component.scss',
})
export class SuccessCardComponent extends BaseClassDirective {
  override getCardType(): string {
    return 'Success Card';
  }
}
