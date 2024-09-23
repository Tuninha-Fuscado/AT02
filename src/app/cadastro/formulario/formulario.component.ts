import { ChangeDetectorRef, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  erroNome: boolean = false;
  erroEmail: boolean = false;
  erroSenha: boolean = false;
  erroConfirmar: boolean = false;
  senhaDiferentes: boolean = false;

  constructor(private cdr: ChangeDetectorRef){

  }

  Cadastrar(){
    const nome = (document.getElementById('nome') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const senha = (document.getElementById('senha') as HTMLInputElement).value;
    const confirmarSenha = (document.getElementById('confirmarSenha') as HTMLInputElement).value;


    if (nome === '' || nome == null || nome === undefined) {
      this.erroNome = true;
      this.cdr.detectChanges();
    } else {
      this.erroNome = false;
    }

    if (email === '' || email == null || email === undefined) {
      this.erroEmail = true;
      this.cdr.detectChanges();
    } else {
      this.erroEmail = false;
    }

    if (senha === '' || senha == null || senha === undefined) {
      this.erroSenha = true;
      this.cdr.detectChanges();
    } else {
      this.erroSenha = false;
    }

    if (confirmarSenha === '' || confirmarSenha == null || confirmarSenha === undefined) {
      this.erroConfirmar = true;
      this.cdr.detectChanges();
    } else {
      this.erroConfirmar = false;
    }

    if(senha != confirmarSenha){
      this.senhaDiferentes = true;
      this.cdr.detectChanges();
    }else{
      this.senhaDiferentes = false;
    }

    if(!this.erroNome && !this.erroEmail && !this.erroSenha && !this.erroConfirmar && !this.senhaDiferentes){
      window.alert("Cadastro realizado")
    }else{
      return;
    }
  }

}
