import { Routes } from '@angular/router';
import { authGuard } from '../auth/guards/auth.guard';
import { EventsComponent } from './events/events.component';

export const EVENTS_ROUTES: Routes = [

        {
            path:"",
            canActivate: [authGuard],
            component: EventsComponent
        }

];