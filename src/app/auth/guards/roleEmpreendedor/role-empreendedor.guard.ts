import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleEmpreendedorGuard implements CanActivate {


  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.authService.roleUser?.includes('ROLE_EMPREENDEDOR' && 'ROLE_ADMIN')!) {
      return true;
    } else {
      this.router.navigate(['/'])
      return false;
    }
  }

}
