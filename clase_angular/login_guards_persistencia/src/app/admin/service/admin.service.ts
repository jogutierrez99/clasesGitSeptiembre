import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private http: HttpClient = inject(HttpClient);

  createEvent(evento: any){
    return this.http.post('http://localhost:3501/api/sports/createEvent', evento);
  }

  deleteEvent(id: string){
    return this.http.delete(`http://localhost:3501/api/sports/deleteEvent/${id}`);
  }

  updateEvent(id: string, userToUpdate: any){
    return this.http.delete(`http://localhost:3501/api/sports/updateEvent/${id}`, userToUpdate);
  }


}