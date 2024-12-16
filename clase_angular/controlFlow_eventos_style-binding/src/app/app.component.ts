import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { characters, personas } from './utils';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 title = 'Eventos & Control flow';
 selectValue= "init value";
 inputValue = "";
 charactersList = characters;
 personasList = personas;
 name = "Josh";
 isDark = false;
  
  toggleTheme() {
    this.isDark = !this.isDark;
  }

  borrar(idx: any){

    this.charactersList = this.charactersList.filter((character: any, index) => idx !== index);

  }


  handleClick(name: any) {
    alert(`haz click aqui! ${name}`);
  }

  handleChange(event: Event) {

    const value = (event.target as HTMLInputElement).value;
    this.selectValue = value;
  }

  handleInput(event: Event) {

    const value = (event.target as HTMLInputElement).value;
    this.inputValue = value;

  }

  handleMouseOver() {

    alert("Estas encima");

  }

  handleKeydown(event: KeyboardEvent) {

    const value = (event.target as HTMLInputElement).value;
    console.log(value);

  }

  printBooks(){
    const caja = [
      {
        genere:"ciencia ficcion",
        name:"interestella"
      },
      {
        genere:"ciencia ficcion",
        name:"alien"
      },
      {
        genere:"fantasia",
        name:"harry potter"
      }
    ]

    caja.forEach(element => {
      console.log(element.name + element.genere);
    });
  }
  


}
