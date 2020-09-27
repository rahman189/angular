import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../service/message.service';
@Component({
  selector: 'app-list-chat',
  templateUrl: './list-chat.component.html',
  styleUrls: ['./list-chat.component.scss']
})
export class ListChatComponent implements OnInit {
  listChat: object[]
  listChatRight: object[]
  valueA: number = 0
  valueB: number = 0
  valueC: number = 0
  subscription: Subscription;

  constructor( private messageService: MessageService) {
    this.subscription = this.messageService.onMessage().subscribe(message => {
      if (message.type === 'sender') {
        this.listChat.push(message)
        setTimeout(() => {
          this.listChatRight.push({
            type: 'receiver',
            message: message.message
          })
        }, 3000)
      } else {
        this.listChatRight.push({
          type: 'sender',
          message: message.message
        })
        setTimeout(() => {
          this.listChat.push(message)
        }, 3000)
      }
    })
  }
  ngOnInit(): void {
    this.listChat = []
    this.listChatRight = []
  }
  calculateA(event) {
    this.valueA = event
    this.valueC = this.valueA + this.valueB
  }
  calculateB(event) {
    this.valueB = event
    this.valueC = this.valueA + this.valueB
  }

}
