import { Component } from '@angular/core';
import { MessageService } from '../service/message.service'
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
  numberValue: number = 0;
  constructor( private messageService: MessageService) { }
  calculate() {
    this.messageService.setValueA(this.numberValue)
  }
}
