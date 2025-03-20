import { Routes } from '@angular/router';
import { authGuard } from './auth/guards/auth.guard';

export const routes: Routes = [
    {
        path:"auth",
        loadChildren: () => import("./auth/auth.routes").then(module => module.AUTH_ROUTES)
    },
    {
        path:"eventos",
        loadChildren: () =>import("./events/event.routes").then(module => module.EVENTS_ROUTES)
    },
    {
        path:"admin",
        canActivate: [authGuard],
        loadChildren: () =>import("./admin/admin.routes").then(module => module.ADMIN_ROUTES)
    },
    {
        path:"**",
        redirectTo:"login"
    }
];
