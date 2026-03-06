import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiUrl = `${environment.apiUrl}/Items`;

  constructor(private http: HttpClient) {}

  getItems(): Observable<any[]> {

    return this.http.get<any[]>(this.apiUrl);

  }

}