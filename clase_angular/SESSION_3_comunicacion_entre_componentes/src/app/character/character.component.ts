import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {

  @Input() character!: Character;

  @Output() nameFromChild: EventEmitter<string> = new EventEmitter();

  clickCard(){
    this.nameFromChild.emit(this.character.name);
  }

}
