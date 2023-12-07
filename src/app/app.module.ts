import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SistemaComponent } from './sistema/sistema.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { NavbarSistemaComponent } from './sistema/navbar-sistema/navbar-sistema.component';
import { EmDestaqueComponent } from './sistema/em-destaque/em-destaque.component';
import { ListaLivrosComponent } from './sistema/lista-livros/lista-livros.component';
import { DetalhesLivroComponent } from './sistema/detalhes-livro/detalhes-livro.component';
import { LivrosViewComponent } from './sistema/livros-view/livros-view.component';
import { BarraBuscaComponent } from './sistema/barra-busca/barra-busca.component';
import { BuscaLivrosComponent } from './sistema/busca-livros/busca-livros.component';
import { TodosOsLivrosComponent } from './sistema/todos-os-livros/todos-os-livros.component';
import { FooterComponent } from './sistema/footer/footer.component';
import { CadastrarLivrosComponent } from './sistema/cadastrar-livros/cadastrar-livros.component';
import { CadastrarUsuarioComponent } from './sistema/cadastrar-usuario/cadastrar-usuario.component';
import { PerfilUsuarioComponent } from './sistema/perfil-usuario/perfil-usuario.component';
import { DatePipe } from '@angular/common';
import { EmprestimosComponent } from './sistema/emprestimos/emprestimos.component';
import { RecomendacoesComponent } from './sistema/recomendacoes/recomendacoes.component';
import { SwitchCredenciaisComponent } from './sistema/credenciais-usuario/credenciais-usuario.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperarsenha.component';
import { SetCredenciaisComponent } from './sistema/editar-credenciais/editar-credenciais.component';
import { RenovacoesComponent } from './sistema/renovacoes/renovacoes.component';
import { UploadService } from './upload.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SistemaComponent,
    NavbarComponent,
    NavbarSistemaComponent,
    EmDestaqueComponent,
    ListaLivrosComponent,
    DetalhesLivroComponent,
    LivrosViewComponent,
    BarraBuscaComponent,
    BuscaLivrosComponent,
    TodosOsLivrosComponent,
    FooterComponent,
    CadastrarLivrosComponent,
    CadastrarUsuarioComponent,
    PerfilUsuarioComponent,
    EmprestimosComponent,
    RecomendacoesComponent,
    SwitchCredenciaisComponent,
    RecuperarSenhaComponent,
    SetCredenciaisComponent,
    RenovacoesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [DatePipe, UploadService],
  bootstrap: [AppComponent],
})
export class AppModule {}
