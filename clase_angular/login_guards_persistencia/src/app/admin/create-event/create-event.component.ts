import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css'
})
export class CreateEventComponent {

  private adminService: AdminService = inject(AdminService);

  form: FormGroup = new FormGroup({
    name: new FormControl(
      '',
      [Validators.required, Validators.minLength(3)]
    ),
    description: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
  })

  handleCreateEventForm(){
    console.log(this.form.value);

    if(this.form.valid){
      // llamada a la api
      this.adminService.createEvent(this.form.value).subscribe({
        next: (data:any) =>{
          console.log(data);
        },
        error: (error:any) =>{
          console.log(error);
        }

      });

    }

  }
}
