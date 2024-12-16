import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { characters } from '../utils';
import { Character } from '../interfaces/character.interface';
import { HeaderComponent } from './header/header.component';
import { CharacterComponent } from './character/character.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CharacterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'comunicacion entre componentes';
  titles: string[] = ["titulo 1", "Titulo2"]

  charactersList: Character[] = characters;
  isDark: boolean = false;
  lengthCharacters: number = this.charactersList.length;

  name !: string;


  toggleTheme() {
    this.isDark = !this.isDark
  }

  changeTitle(newTitle: string){
    this.title = newTitle;
  }

  pickDataFromChild(isDark: boolean){

    this.isDark = isDark;

  }

  pickNameFromChild(name: string){
    this.name = name;
  }


}
