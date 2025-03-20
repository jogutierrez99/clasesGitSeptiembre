import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { catchError, map, of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {

  const authService: AuthService = inject(AuthService);
  const $authService = authService.verifyToken();

  const tokenValue = localStorage.getItem("token");

 const router = inject(Router)

  /*if(tokenValue){
    return true;
  }
  router.navigate(["/login"]);

  return false;*/


  return $authService.pipe(
    map((data) => {
      console.log(data);
      return true;
    }),
    catchError((err)=>{
      console.log(err.error.message)

      if(err.error.message === "Token expired"){
        alert("Token expirado, debes iniciar sesion otra vez")
      }

      if(err.error.message === "Invalid token"){
        alert("Token invalido, inicia sesion")
      }

      router.navigate(["/auth/login"]);

      return of(false)
    })
  )

};
