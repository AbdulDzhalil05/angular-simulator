import { Injectable } from '@angular/core';
import { IMessage } from './interfaces/IMessage';
import { Message } from './enums/Message';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: IMessage[] = [];

  addMessage(type: Message, text: string): void {

    const id = Date.now();

    const message: IMessage = {
      id,
      type,
      text,
      isVisible: false
    };

    this.messages.unshift(message);

    setTimeout(() => {
      message.isVisible = true;
    }, 0)

    setTimeout(() => {
      this.closeMessage(id);
    }, 5000);
  }

  closeMessage(id: number): void {
    this.messages = this.messages.filter(message => message.id !== id);
  }
}
