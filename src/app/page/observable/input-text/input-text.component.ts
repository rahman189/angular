import { Component, Input } from '@angular/core';
import { MessageService } from '../service/message.service'

@Component({
  selector: 'app-input-text',
  template: `
  <mat-form-field class="example-full-width">
    <textarea matInput placeholder="Message" [(ngModel)]="message" (keydown.enter)="sendMessage()"></textarea>
  </mat-form-field>
  `,
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {
  @Input() type: string
  constructor(private messageService: MessageService) { }
  message: string = ''
  sendMessage() {
    this.messageService.sendMessage({
      type: this.type,
      message: this.message
    });
    this.message = ''
  }
}
