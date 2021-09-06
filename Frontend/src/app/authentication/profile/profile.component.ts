import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: Object;
  constructor(private _authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this._authService.getProfile().subscribe(profile => {
      this.user = profile.user
    }, 
    err => {
      console.log(err);
      return false;
    })
  }

}
