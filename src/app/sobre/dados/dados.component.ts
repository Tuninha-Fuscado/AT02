import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-dados',
  standalone: true,
  imports: [MatCardModule, MatDividerModule],
  templateUrl: './dados.component.html',
  styleUrl: './dados.component.css'
})
export class DadosComponent {
  aluno = {
    nome: 'Marcus Vinícius (206322023)',
    curso: 'Engenharia de Computação',
    biografia: 'Estudante de Engenharia de Computação no Centro Universitário de Excelência Eniac, localizado em Guarulhos. Estou atualmente no quarto semestre deste curso. Além disso, durante o ensino médio, cursei um programa técnico em Informática para a Internet na ETEC de Santa Isabel.'
  };
}
