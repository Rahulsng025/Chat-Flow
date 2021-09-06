import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './authentication/auth/auth.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './service/auth.service';
import { ValidateService } from './service/validate.service';
import { FlashMessagesModule } from 'flash-messages-angular';
import { ProfileComponent } from './authentication/profile/profile.component';
import { AuthGaurdGuard } from './gaurds/auth-gaurd.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component:RegisterComponent },
  {path: 'chat', component: ChatComponent, canActivate: [AuthGaurdGuard]},
  {path: 'profile', component: ProfileComponent},
  {path:'', redirectTo: '/login', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ChatComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    FlashMessagesModule.forRoot(),
    HttpClientModule,
  ],
  providers: [ValidateService, AuthService, AuthGaurdGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
