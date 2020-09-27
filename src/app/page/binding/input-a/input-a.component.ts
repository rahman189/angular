import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-a',
  template: `
  <mat-form-field>
    <input type="number" min="0" [(ngModel)]="numberValue" (keyup)="calculate()" matInput >
  </mat-form-field>
  `,
  styleUrls: ['./input-a.component.scss']
})
export class InputAComponent {
  @Input() numberValue: number
  @Output() sendValue = new EventEmitter();
  calculate() {
    this.sendValue.emit(this.numberValue)
  }
}
