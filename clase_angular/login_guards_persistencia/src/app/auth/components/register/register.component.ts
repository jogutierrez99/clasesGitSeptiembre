import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

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
    name: "",
    email: "",
    password: "",
    birth: ""
  }
  private userImage!: File

  handleImage(event: Event) {
    const eventTarget = event.target as HTMLInputElement;

    if(eventTarget.files){
      this.userImage = eventTarget.files[0]
    }
  }
  isValidBirthDate(date: string): boolean {
    const birthDate = new Date(date);
    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 18);
    return birthDate <= minDate;
  }
  
  handleRegisterForm() {
    const userFormValues = Object.values(this.userForm);
  
    if (userFormValues.includes('')) {
      alert('Debes de rellenar todos los campos');
      return;
    }
  
    if (!this.isValidBirthDate(this.userForm.birth)) {
      alert('Debes tener al menos 18 años para registrarte');
      return;
    }
  
    if (!this.userImage) {
      alert('Debes subir una imagen de perfil');
      return;
    }
  

    this.userFormData.append('name', this.userForm.name);
    this.userFormData.append('email', this.userForm.email);
    this.userFormData.append('password', this.userForm.password);
    this.userFormData.append('birth', this.userForm.birth);
    this.userFormData.append('image', this.userImage ? this.userImage : '');

    this.authService.register(this.userFormData).subscribe({
      next: (data: any) => {
        alert(data.message)
        this.router.navigate(['login'])
      },
      error: (error) => {
        alert('Hubo un error');
      }
    })
  }
 

}
