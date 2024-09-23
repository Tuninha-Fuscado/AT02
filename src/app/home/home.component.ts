import { Component } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";
import { ItensComponent } from "./itens/itens.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, ItensComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
