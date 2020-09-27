import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
    this.listChat = []
    this.listChatRight = []
  }

  addMessageLeft(message) {
    this.listChat.push({
      type: 'sender',
      message: message
    })
    setTimeout(() => {
      this.listChatRight.push({
        type: 'receiver',
        message: message
      })
    }, 3000)
    
  }

  addMessageRight(message) {
    this.listChatRight.push({
      type: 'sender',
      message: message
    })
    setTimeout(() => {
      this.listChat.push({
        type: 'receiver',
        message: message
      })
    }, 3000)
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
