import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';
import { catchError, map, of } from 'rxjs';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router)
  //Para que esta verificación asincrona funcione, hay que declarar una ruta, y un metodo en el controlador del back, para gestionarlo
  //Esto envia un correo que se almaceno en el localstorage y en funcion de eso, hace la consulta
  
  // const authService: AuthService = inject(AuthService);
  // const $authService = authService.verifyRole();
  // const router: Router = inject(Router)

  // return $authService.pipe(
  //   map((data: any) => {
  //     if(data.role === 'admin') {
  //       return true
  //     }
  //     router.navigate([''])
  //     return false
  //   }),
  //   catchError((err) => {
  //     console.log(err)
  //     return of(false)
  //   })
  // )

  if(authService.verifyRole() === 'admin'){
    return true
  }
  router.navigate([''])
  return false
};
