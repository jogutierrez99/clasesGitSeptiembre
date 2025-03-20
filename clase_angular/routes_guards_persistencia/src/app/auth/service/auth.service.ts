import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private http: HttpClient = inject(HttpClient)

  constructor() { }


  register(userForm: any){

    return this.http.post("http://localhost:3500/users/register", userForm);

  }

  login(userLoginForm: any){

    return this.http.post("http://localhost:3500/users/login", userLoginForm);
    
  }

  verifyToken(): Observable<any>{
    return this.http.get("http://localhost:3500/users/verify-token")
  }

  

}
