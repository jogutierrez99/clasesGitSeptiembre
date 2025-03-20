import { Routes } from '@angular/router';
import { authGuard } from './auth/guards/auth.guard';
import { CreateEventComponent } from './admin/create-event/create-event.component';
import { adminGuard } from './auth/guards/admin.guard';


export const routes: Routes = [

    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path: '',
        loadChildren: () => import('./eventos/eventos.routes').then(m => m.EVENTOS_ROUTES)
    },
    {
        path: 'create-event',
        canActivate: [adminGuard],
        component: CreateEventComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
