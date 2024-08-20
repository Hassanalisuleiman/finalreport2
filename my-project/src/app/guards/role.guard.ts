import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const userRole = user.role;

    const roles = route.data['roles'] as Array<string>;
    if (roles && roles.includes(userRole)) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}
