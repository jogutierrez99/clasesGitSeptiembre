import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  private userFormData: FormData = new FormData();

  private router: Router = inject(Router);

  private authService: AuthService = inject(AuthService);

  public userForm = {
    username: "",
   // email: "",
    password: "",
    //date: ""
  }

  private userImage!: File;

  handleImage(event: Event){

    const eventTarget = event.target as HTMLInputElement;
    console.log(eventTarget.files);

    if(eventTarget.files){
      this.userImage = eventTarget.files[0];
      
    }

  }

  handleRegisterForm(){

    const userFormValues = Object.values(this.userForm);

    if(userFormValues.includes('')){
      alert("debes rellenar todos los campos")
      return
    }

    console.log(this.userForm);

    this.userFormData.append("name", this.userForm.username);
    this.userFormData.append("password", this.userForm.password);
    //Entre comillas se pone el nombre de como esta en el modelo de datos en node
    this.userFormData.append("iamge", this.userImage ? this.userImage : "");

    //this.authService.register(this.).userForm
    this.authService.register(this.userForm).subscribe({
      next: (data: any) => {
        console.log(data.message);
        console.log(data.data);
        this.router.navigate(["login"]);
      },
      error: (error) => {
        alert("Hubo un error");
        console.log(error);
      }
    })


  }

}
