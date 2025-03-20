import { Component, inject } from '@angular/core';
import { EventsService } from './service/events.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

  private eventService: EventsService = inject(EventsService);

  public eventList = [];

  ngOnInit() {
    alert("En este instante el componente ha cargado");
    this.eventService.getAll().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) =>
        console.log(error)
    });
  }

}
