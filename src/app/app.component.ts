import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { WarningCardComponent } from './warning-card/warning-card.component';
import { SuccessCardComponent } from "./success-card/success-card.component";
import { InfoCardComponent } from "./info-card/info-card.component";
import { AlertCardComponent } from "./alert-card/alert-card.component";

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, WarningCardComponent, SuccessCardComponent, InfoCardComponent, AlertCardComponent],
  selector: 'angular-inheritance-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-inheritance';
}
