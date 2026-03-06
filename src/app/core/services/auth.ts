// src/app/core/services/auth.ts
import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class Auth {
  token = signal<string | null>(localStorage.getItem('token'));

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    return this.http.post<{ accessToken: string }>(`${environment.apiUrl}/Auth/login`, { username, password })
      .pipe(
        tap(res => {
          this.token.set(res.accessToken);
          localStorage.setItem('token', res.accessToken);
        })
      );
  }

  logout() {
    this.token.set(null);
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}