import { Routes } from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';


export const ADMIN_ROUTES: Routes = [

    {
        path: 'create-event',
        component: CreateEventComponent
    },
    {
        path: 'delete-event/:id',
        component: DeleteEventComponent
    },
    {
        path: 'update-event/:id',
        component: UpdateEventComponent
    }
    
];