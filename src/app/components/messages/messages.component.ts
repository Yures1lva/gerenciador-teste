import { Component } from '@angular/core';
import { MessagesService } from '../../services/Messages/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  
  excluir = '';

  constructor(public messageService: MessagesService){}
  
}
