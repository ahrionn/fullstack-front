import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Livro } from './livro.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  showTable = false;
  showFormulario = false;
  formSuccess = false;
  formError = false;
  novoLivro: Livro = {
    id: NaN,
    nome: '',
    autor: '',
    editora: '',
    ano: NaN
  };
  title: string = '';
  livros: Livro[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  submitForm() {
    this.apiService.postLivros(this.novoLivro).subscribe(
      () => {
        this.formSuccess = true;
        setTimeout(() => {
          this.formSuccess = false;
        }, 3000);
        this.formError = false;
        this.livros.push(this.novoLivro);
        console.log('Livro adicionado com sucesso!');
        this.novoLivro = {
          id: NaN,
          nome: '',
          autor: '',
          editora: '',
          ano: NaN
        };
      },
      (error) => {
        this.formSuccess = false;
        this.formError = true;
        setTimeout(() => {
          this.formError = false;
        }, 3000);
        console.error('Erro ao adicionar o livro:', error);
      }
    );
  }

  getLivros() {
    this.apiService.getLivros().subscribe(
      (response) => {
        this.livros = response;
        this.showTable = true;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
  exibirTabela() {
    this.showTable = true;
    this.showFormulario = false;
  }

  exibirFormulario() {
    this.showTable = false;
    this.showFormulario = true;
  }
}
