import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private http: HttpClient = inject(HttpClient)

  constructor() { }

  getAll(){
   /* const token = localStorage.getItem("token");
    const headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`
    }*/
    //return this.http.get("http://localhost:3500/events/", {headers});
    return this.http.get("http://localhost:3500/events/");
  }
}
