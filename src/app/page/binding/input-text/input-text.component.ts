import { Component, Output, EventEmitter } from '@angular/core';

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
  @Output() inputEvent = new EventEmitter();
  message: string = ''
  sendMessage() {
    if (this.message) {
      this.inputEvent.emit(this.message)
      this.message = ''
    }
  }
}
