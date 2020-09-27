import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BindingRoutingModule } from './binding-routing.module';
import { BindingComponent } from './binding.component';
import { ListChatComponent } from './list-chat/list-chat.component';
import { InputTextComponent } from './input-text/input-text.component'
import { SharedModule } from '../../shared/shared.module';
import { InputAComponent } from './input-a/input-a.component';
import { InputBComponent } from './input-b/input-b.component';
import { InputCComponent } from './input-c/input-c.component'

@NgModule({
  declarations: [BindingComponent, ListChatComponent, InputTextComponent, InputAComponent, InputBComponent, InputCComponent],
  imports: [
    CommonModule,
    SharedModule,
    BindingRoutingModule
  ]
})
export class BindingModule { }
