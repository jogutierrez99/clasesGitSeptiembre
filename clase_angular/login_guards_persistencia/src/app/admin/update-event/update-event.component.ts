import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService } from '../service/admin.service';
import { EventService } from '../../eventos/services/event.service';

@Component({
  selector: 'app-update-event',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-event.component.html',
  styleUrl: './update-event.component.css'
})
export class UpdateEventComponent {

   private eventService: EventService = inject(EventService);
  
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
      
  
      }
  
    }

}
