import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseClassDirective } from '../BaseClass.directive';
import { CardComponent } from "../shared/component/card/card.component";

@Component({
  selector: 'angular-inheritance-warning-card',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './warning-card.component.html',
  styleUrl: './warning-card.component.scss',
})
export class WarningCardComponent extends BaseClassDirective {


  protected overrideCardFooterHeading() {
    this.cardFooter = 'Overridden Footer'
    return this.cardFooter
  }

  override getCardType(): string {
    return 'Warning Card';
  }
}
