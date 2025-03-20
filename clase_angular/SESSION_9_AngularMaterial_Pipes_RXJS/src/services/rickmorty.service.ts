import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RickMortyService {
  private readonly API_URL = 'https://rickandmortyapi.com/api';
  private http: HttpClient = inject(HttpClient)

  /*getCharacters(page: number = 1, name: string = ''): Observable<any> {
    return this.http.get(`${this.API_URL}/character`, {
      params: { page: page.toString(), name },
    });
  }*/

  getCharacters(): Observable<any> {
    return this.http.get(`${this.API_URL}/character`).pipe(
      map((data:any)=>{
        return data.results
      })
    )
  }


}