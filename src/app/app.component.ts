import { Component, SecurityContext } from '@angular/core';
import { Step } from './stepper/stepper.component';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  steps: Step[] = [
    { label: 'Role' },
    { label: 'Email' },
    { label: 'Settings' },
  ];

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    const icons = [{ name: 'check', url: 'assets/check.svg' }];

    icons.forEach((icon) => {
      iconRegistry.addSvgIcon(
        icon.name,
        sanitizer.bypassSecurityTrustResourceUrl(icon.url)
      );
    });
  }
}
