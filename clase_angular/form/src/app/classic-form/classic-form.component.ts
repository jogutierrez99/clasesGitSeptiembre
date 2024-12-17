import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-classic-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './classic-form.component.html',
  styleUrl: './classic-form.component.css'
})
export class ClassicFormComponent {

  userForm: any = {
    name: "",
    surname: "",
    email: "",
    password: ""
  }

  isSubmitted: boolean = false;

  handleForm(){
    this.isSubmitted = true;
    if(this.userForm.name === "" || this.userForm.surname === "" || this.userForm.email === "" || this.userForm.password === ""){
      
      return
    }

    if(this.userForm.password.length < 6){
      
      return
    }

    //Despues de pasar los errores se haria la peticion al servidor

  }

}
