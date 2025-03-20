import { Component, inject } from '@angular/core';
import { RickMortyService } from '../../../services/rickmorty.service';
import { map, Observable, tap } from 'rxjs';
import { AsyncPipe, UpperCasePipe } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [AsyncPipe, MatCardModule, MatButtonModule, UpperCasePipe],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {
  characters: any[] = [];
  private rickMortyService: RickMortyService = inject(RickMortyService)

  public $rickMortyObservable: Observable<any> = this.rickMortyService.getCharacters();

  ngOnInit(): void {
   /* this.rickMortyService.getCharacters()
    .pipe(
      tap(
        (data: any) => {
          console.log('desde tap' + ' ' + data)
        }
      ),
      map((data: any) => {
          return data.results
      })
    )
    .subscribe((response) => {
      this.characters = response
    });*/


  }
}
