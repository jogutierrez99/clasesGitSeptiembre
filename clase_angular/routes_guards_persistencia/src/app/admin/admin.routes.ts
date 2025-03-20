import { Routes } from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';


export const ADMIN_ROUTES: Routes = [

    {
        path: 'create-event',
        component: CreateEventComponent
    }
    
];