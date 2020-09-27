import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableRoutingModule } from './observable-routing.module';
import { ObservableComponent } from './observable.component';
import { ListChatComponent } from './list-chat/list-chat.component';
import { InputTextComponent } from './input-text/input-text.component'
import { SharedModule } from '../../shared/shared.module';
import { InputAComponent } from './input-a/input-a.component';
import { InputBComponent } from './input-b/input-b.component';
import { InputCComponent } from './input-c/input-c.component'

import { MessageService } from './service/message.service'

@NgModule({
  declarations: [ObservableComponent, ListChatComponent, InputTextComponent, InputAComponent, InputBComponent, InputCComponent],
  imports: [
    CommonModule,
    SharedModule,
    ObservableRoutingModule
  ],
  providers: [
    MessageService
  ]
})
export class ObservableModule { }
