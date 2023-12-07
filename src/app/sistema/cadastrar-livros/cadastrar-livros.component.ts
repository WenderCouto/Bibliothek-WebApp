import { Component } from '@angular/core';
import { LivroApiService } from 'src/app/livro-api.service';
import { Livro } from 'src/app/livro';

@Component({
  selector: 'app-cadastrar-livros',
  templateUrl: './cadastrar-livros.component.html',
  styleUrls: ['./cadastrar-livros.component.css'],
})
export class CadastrarLivrosComponent {
  livro: Livro = {
    codLivro: 0,
    titulo: '',
    genero: '',
    autor: '',
    editora: '',
    estoque: 0,
    disponibilidade: 0,
    imagemUrl: '',
    destaque: false,
    descricao: '',
  };

  message: string = '';
  messageSuccess: boolean = false;
  messageError: boolean = false;

  constructor(private livroApiService: LivroApiService) {}

  cadastrarLivro() {
    if (!this.livro.titulo.trim() || this.livro.titulo.startsWith(' ') || this.livro.titulo.endsWith(' ') || this.livro.titulo.length <= 2 ||
        !this.livro.autor.trim() || this.livro.autor.startsWith(' ') || this.livro.autor.endsWith(' ') || this.livro.autor.length <= 2 ||
        !this.livro.genero.trim() || this.livro.genero.startsWith(' ') || this.livro.genero.endsWith(' ') || this.livro.genero.length <= 2) {
      this.message = 'O título, autor e o gênero do livro devem conter duas tês letras ou mais e não podem começar ou terminar com espaços em branco.';
      this.messageError = true;
      this.messageSuccess = false;
      return;
    }
    this.livroApiService.createLivro(this.livro).subscribe(
      (response) => {
        this.clearForm();
        this.messageSuccess = true;
        this.messageError = false;
        this.message = 'Livro cadastrado com sucesso!';
      },
      (error) => {
        this.clearForm();
        this.messageSuccess = false;
        this.messageError = true;
        this.message = 'Erro ao cadastrar livro.';
      }
    );
  }

  clearForm() {
    this.livro = {
      codLivro: 0,
      titulo: '',
      genero: '',
      autor: '',
      editora: '',
      estoque: 0,
      disponibilidade: 0,
      imagemUrl: '',
      destaque: false,
      descricao: '',
    };
  }
}
