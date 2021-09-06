import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from 'src/app/service/validate.service';
import { AuthService } from 'src/app/service/auth.service';
import { FlashMessagesService } from 'flash-messages-angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  name: string;
  username: string;
  email: string;
  password: string

  constructor(private _authService: AuthService,
    private _validateService: ValidateService,
    private router: Router,
    private _flashMessageService: FlashMessagesService) { }

  ngOnInit(): void {
  }

  onRegister() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    // Validate Register
    if(!this._validateService.validateRegister(user)){
      this._flashMessageService.show('Please fill in all fields!', { cssClass: 'alert-danger', timeout: 3000 })
      return false;
    }
    // Validate Email 
    if(!this._validateService.validateEmail(user.email)){
      this._flashMessageService.show('Please use a valid email!', { cssClass: 'alert-danger', timeout: 3000 })
      return false;
    }

    // Register User
    this._authService.registerUser(user).subscribe(data => {
      if(data) {
        this._flashMessageService.show('You are now registered and can now login!', { cssClass: 'alert-success', timeout: 3000 })
        this.router.navigate(['/login']);
      }
      else{
        this._flashMessageService.show('Something went wrong!', { cssClass: 'alert-danger', timeout: 3000 })
        this.router.navigate(['/register']);
      }
     
      
    })
  }

}
