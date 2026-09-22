import { Injectable } from '@angular/core';
import { IMessage } from './interfaces/IMessage';
import { Message } from './enums/Message';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private _messages: IMessage[] = [];

  get messages(): IMessage[] {
    return this._messages;
  }

  addMessage(type: Message, text: string): void {

    const id = Date.now();

    const message: IMessage = {
      id,
      type,
      text,
      isVisible: false
    };

    this._messages.unshift(message);

    setTimeout(() => {
      message.isVisible = true;
    }, 0)

    setTimeout(() => {
      this.closeMessage(id);
    }, 5000);
  }

  closeMessage(id: number): void {
    this._messages = this._messages.filter(message => message.id !== id);
  }
}
