import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseClassDirective } from '../BaseClass.directive';
import { CardComponent } from '../shared/component/card/card.component';

@Component({
  selector: 'angular-inheritance-info-card',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss',
})
export class InfoCardComponent extends BaseClassDirective {
  override getCardType(): string {
    return 'Info Card';
  }
}
