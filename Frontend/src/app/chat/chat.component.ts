import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { AuthService } from '../service/auth.service';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  user:String;
  room:String;
  messageText:String;
  messageArray:Array<{user:String,message:String}> = [];

  constructor(private _chatService:ChatService,
    private _authService: AuthService,
    private router: Router,
    private _flashMessageService: FlashMessagesService) {
     // For receving messages
    // After all we are using observables, So we'have to subscribe to this particular method of a service
    this._chatService.newUserJoined()
    .subscribe(data=> this.messageArray.push(data));

      this._chatService.userLeftRoom()
      .subscribe(data=>this.messageArray.push(data));

      this._chatService.newMessageReceived()
      .subscribe(data=>this.messageArray.push(data));
   }

  ngOnInit(): void {
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

onLogoutClick() {
  this._authService.logout();
  this._flashMessageService.show('You are logged out', {
    cssClass: 'alert-success', timeout: 3000
  });
  this.router.navigate(['/login']);
  return false;
}

}
