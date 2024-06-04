/* import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthSession } from '@supabase/supabase-js'
import { SupabaseService } from '../supabase.service';

@Injectable({
  providedIn: 'root',

})
export class SessionGuard implements CanActivate {
  constructor(private session: AuthSession) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.session !== null;
  }
} */