import { Component, inject } from '@angular/core';
import { Message } from "../enums/Message";
import { MessageService } from '../message.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {

  message: MessageService = inject(MessageService);

  Message = Message;

}
