import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private http: HttpClient = inject(HttpClient);


  getAllEvents() {
    return this.http.get('http://localhost:3501/api/sports/getAllEvents');
  }

  getEventById(id:string) {
    return this.http.get(`http://localhost:3501/api/sports/getById/${id}`);
  }
  

}
