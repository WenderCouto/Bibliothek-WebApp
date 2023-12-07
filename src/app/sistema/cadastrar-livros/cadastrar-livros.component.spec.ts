import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarLivrosComponent } from './cadastrar-livros.component';

describe('CadastrarLivrosComponent', () => {
  let component: CadastrarLivrosComponent;
  let fixture: ComponentFixture<CadastrarLivrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarLivrosComponent]
    });
    fixture = TestBed.createComponent(CadastrarLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
