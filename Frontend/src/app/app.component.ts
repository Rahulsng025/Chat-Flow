import { Component } from '@angular/core';
import { ChatService } from './service/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user:String;
  room:String;
  messageText:String;
  messageArray:Array<{user:String,message:String}> = [];

  constructor(private _chatService:ChatService){
    // For receving messages
    // After all we are using observables, So we'have to subscribe to this particular method of a service
    this._chatService.newUserJoined()
    .subscribe(data=> this.messageArray.push(data));

      this._chatService.userLeftRoom()
      .subscribe(data=>this.messageArray.push(data));

      this._chatService.newMessageReceived()
      .subscribe(data=>this.messageArray.push(data));

  }

  join(){
    this._chatService.joinRoom({user:this.user, room:this.room});
}

leave(){
    this._chatService.leaveRoom({user:this.user, room:this.room});
}

sendMessage()
{
    this._chatService.sendMessage({user:this.user, room:this.room, message:this.messageText});
}


 
}
