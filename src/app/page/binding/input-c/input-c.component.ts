import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-c',
  template: `
    {{ total }}
  `,
  styleUrls: ['./input-c.component.scss']
})
export class InputCComponent {
  @Input() total: number
}
