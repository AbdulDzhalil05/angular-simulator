import { Component, inject } from '@angular/core';
import { MessageService } from '../message.service';
import { Message } from "../enums/Message";
import { NgTemplateOutlet } from '@angular/common';


@Component({
  selector: 'app-message',
  imports: [NgTemplateOutlet],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {
  message: MessageService = inject(MessageService);

  Message = Message;
}
