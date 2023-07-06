import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = '';
  livros: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  getLivros() {
    this.apiService.getLivros().subscribe(
      (response) => {
        this.livros = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
