import { Component } from '@angular/core';
import { NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { FooterComponent, HeaderComponent } from '../../components';

@Component({
  selector: 'ngx-three-columns-layout',
  styleUrls: ['./three-columns.layout.scss'],
  standalone: true,
  imports: [NbLayoutModule, HeaderComponent, NbSidebarModule, FooterComponent],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column class="small">
      </nb-layout-column>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-column class="small">
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class ThreeColumnsLayoutComponent {}
