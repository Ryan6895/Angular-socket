import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'front-end';
  message: string;
  messages: string[] = [];

  constructor(public chatService: ChatService){

  }
  sendMessage(){
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit(): void{
    this.chatService
    .getMessages()
    .subscribe((message: string) => {
      this.messages.push(message);
    })
  }
}
