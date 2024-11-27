import { Directive, Input } from '@angular/core';

@Directive()
export abstract class BaseClassDirective {

  @Input() cardHeading = ''
  @Input() cardDescription = ''
  @Input() cardFooter = 'Generic Footer Component'

  protected isExpanded = false

  togglePanel() {
    this.isExpanded = !this.isExpanded;
  }

  abstract getCardType(): string;
  
}
