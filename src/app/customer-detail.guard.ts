import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from './shared/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailGuard implements CanActivate {

  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let id = +next.url[1].path;

    if (isNaN(id) || id < 1) {
      alert("Invalid Customer Id");
      this.router.navigate(['/viewcustomer']);
      return false;
    };
    return true;
  }

}
