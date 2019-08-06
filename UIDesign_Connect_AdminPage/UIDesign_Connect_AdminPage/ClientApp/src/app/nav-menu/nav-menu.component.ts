import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  isExpanded = false;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'side-nav',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/side-nav.svg'))
      .addSvgIcon(
        'admin',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/admin.svg'))
      .addSvgIcon(
        'my-profile',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/my-profile.svg'))
      .addSvgIcon(
        'add',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/add.svg'))
      .addSvgIcon(
        'context-menu',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/context-menu.svg'))
      .addSvgIcon(
        'done',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/done.svg'))
      .addSvgIcon(
        'logout',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/logout.svg'));
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
