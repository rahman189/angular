import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <mat-selection-list [multiple]="false">
    <mat-list-option *ngFor="let item of menuList" [routerLink]="item.url">
      {{item.name}}
    </mat-list-option>
  </mat-selection-list>
  `,
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuList: object[] = [
    {
      name: 'Menu',
      url: ''
    },
    {
      name: 'Binding',
      url: '/binding'
    },
    {
      name: 'Service',
      url: '/observable'
    }
  ]
}
