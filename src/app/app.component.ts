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
  novoLivro: Livro = {
    id: 0,
    nome: '',
    autor: '',
    editora: '',
    ano: 0
  };
  title: string = '';
  livros: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  submitForm() {
    // Lógica para enviar os dados do novo livro para a API
    // Aqui você pode fazer a chamada HTTP para a sua API e enviar os dados do novo livro
    // por exemplo, utilizando o serviço HttpClient do Angular.
    // Você também pode reinicializar a variável novoLivro e definir showForm como false para ocultar o formulário após o envio dos dados.
  }

  getLivros() {
    this.apiService.getLivros().subscribe(
      (response) => {
        this.livros = response;
        this.showTable = true; // Atualiza a propriedade showTable para exibir a tabela
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
