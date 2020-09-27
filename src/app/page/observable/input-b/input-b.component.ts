import { Component } from '@angular/core';
import { MessageService } from '../service/message.service'
@Component({
  selector: 'app-input-b',
  template: `
  <mat-form-field>
    <input type="number" min="0" [(ngModel)]="numberValue" (keyup)="calculate()" matInput >
  </mat-form-field>
  `,
  styleUrls: ['./input-b.component.scss']
})
export class InputBComponent {
  numberValue: number = 0
  constructor(private messageService: MessageService) { }
  calculate() {
    this.messageService.setValueB(this.numberValue)
  }

}
