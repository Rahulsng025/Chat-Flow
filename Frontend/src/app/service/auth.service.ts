import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;
  
  constructor(private http: HttpClient) { }

  // Authenticate purpose
registerUser(user):Observable<any>{
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  return this.http.post('http://localhost:3000/user/register', user, {headers: headers})

  
}

authenticateUser(user: {username: String; password: String}):Observable<any>{
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  return this.http.post('http://localhost:3000/user/authenticate', user, { headers: headers })
}

getProfile():Observable<any>{
  let headers = new HttpHeaders();
  this.loadToken();
  headers.append('Authorization', this.authToken);
  headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost:3000/user/profile', { headers: headers })
}


storeUserData(token, user){
  localStorage.setItem('id_token', token);
  localStorage.setItem('user', JSON.stringify(user));
  this.authToken = token;
  this.user = user;
}

loadToken(){
  const token = localStorage.getItem('id_token');
  this.authToken = token;
}


loggedIn() {
  return !!localStorage.getItem('id_token'); // !!return either true or false
}

logout(){
  this.authToken = null;
  this.user = null;
  localStorage.clear();
}

}
