import { Component } from '@angular/core';
import { MessageService } from '../service/message.service'
@Component({
  selector: 'app-input-c',
  template: `
    {{ valueA + valueB }}
  `,
  styleUrls: ['./input-c.component.scss']
})
export class InputCComponent {
  valueA: number = 0
  valueB: number = 0
  constructor(private messageService: MessageService) {
    this.messageService.getValueA().subscribe(value => {
      this.valueA = value
    })
    this.messageService.getValueB().subscribe(value => {
      this.valueB = value
    })
  }
}
