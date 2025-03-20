import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private authService: AuthService =inject(AuthService);


  public userLoginForm = {
    username: "",
   // email: "",
    password: "",
    //date: ""
  }

  handleLoginForm(){

    const userFormValues = Object.values(this.userLoginForm);

    if(userFormValues.includes('')){
      alert("debes rellenar todos los campos")
      return
    }

    console.log(this.userLoginForm);

    //this.authService.register(this.).userForm

    this.authService.login(this.userLoginForm).subscribe({
      next: (data: any) => {
        alert(data.msg);
        //Persistencia
        localStorage.setItem("token", data.token);
      },
      error: (error) => {
        alert("Hubo un error");
        console.log(error);
      }
    })


  }


}
