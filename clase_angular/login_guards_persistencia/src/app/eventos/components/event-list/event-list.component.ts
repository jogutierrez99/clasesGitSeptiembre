import { Component, inject } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AdminService } from '../../../admin/service/admin.service';
import { AuthService } from '../../../auth/service/auth.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [FormsModule, DatePipe, RouterLink],
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  public eventList: any[] = [];
  public filteredEventList: any[] = [];
  private eventService: EventService = inject(EventService);
  private adminService: AdminService = inject(AdminService);
  public authService: AuthService = inject(AuthService);

  ngOnInit() {
   
    this.getAllEvents();

  }

  deleteEvent(id: string){

    this.adminService.deleteEvent(id).subscribe({
      next: (data:any) => {
        console.log(data)
        this.getAllEvents();
      },
      error: (error:any) => {
        console.log(error)
      }
    });
  }

  getAllEvents(){
    this.eventService.getAllEvents().subscribe({
      next: (data: any) => {
        this.eventList = data.reverse();
      },
      error: (error) => {
        console.log(error);
      }
    });

  }

  




}