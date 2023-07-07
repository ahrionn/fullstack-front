import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from './livro.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getLivros(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/livros`);
  }

  postLivros(livro: Livro): Observable<any> {
    return this.http.post('http://localhost:3000/api/livros', livro);
  }
}
