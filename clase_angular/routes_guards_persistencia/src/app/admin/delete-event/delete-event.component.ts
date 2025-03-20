import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-delete-event',
  standalone: true,
  imports: [],
  templateUrl: './delete-event.component.html',
  styleUrl: './delete-event.component.css'
})
export class DeleteEventComponent {

  private activatedRoute = inject(ActivatedRoute);
  private adminService: AdminService = inject(AdminService);
  public message: string = "";

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      // Dentro del objeto params tenemos una clave por cada una de las partes dinámicas definidas en la ruta. Es decir, tantas claves como identificadores con dos puntos hayamos especificado.
      console.log(params['id']);
      const id = params['id'];
      this.adminService.deleteEvent(id).subscribe({
        next: (data:any) => {
          console.log(data)
        },
        error: (error:any) => {
          console.log(error)
        }
      });
    });
  }

}
