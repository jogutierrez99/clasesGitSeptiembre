import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //constructor(private http: HttpClient) { }

  http: HttpClient = inject(HttpClient);

  getUsers(){
   return this.http.get('http://localhost:3000/usuarios');
  }

}
