import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { ADMIN_MENU_ITEMS } from '../shared/Menu/admin.memu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  menu = ADMIN_MENU_ITEMS;
}
