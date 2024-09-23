import { Component } from '@angular/core';
import { FormularioComponent } from "./formulario/formulario.component";
import { BannerComponent } from "./banner/banner.component";

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormularioComponent, BannerComponent, BannerComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
}
