import { Component } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";
import { DadosComponent } from "./dados/dados.component";


@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [DadosComponent, BannerComponent],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {

}
