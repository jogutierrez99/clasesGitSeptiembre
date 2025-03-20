import { Routes } from '@angular/router';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { authGuard } from '../auth/guards/auth.guard';


export const EVENTOS_ROUTES: Routes = [
{
    path: '',
    component: EventListComponent
},
{
    path: 'evento',
    canActivate: [authGuard],
    component: EventDetailComponent
},
{
    path: '**',
    redirectTo: ''
}
];
