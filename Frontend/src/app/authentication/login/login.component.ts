import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { FlashMessagesService } from 'flash-messages-angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;


  constructor(private _authService: AuthService, 
    private router:Router,
    private _flashMessageService: FlashMessagesService) { }

  ngOnInit(): void {
  }

  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }
    this._authService.authenticateUser(user).subscribe(data => {
      if(data.success){
        this._authService.storeUserData(data.token, data.user)
        this._flashMessageService.show('You are now logged in!', { cssClass: 'alert-success', timeout: 3000 })
        this.router.navigate(['chat']);
      }
      else{
        this._flashMessageService.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['login']);
      }
      console.log(data);
    })
  }

  

}
