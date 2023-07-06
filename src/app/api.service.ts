import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getLivros(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/livros`);
  }

  postLivros(livros: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/livros`, livros);
  }
}
