import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BannerComponent } from './sobre/banner/banner.component';
import { BannerComponent as BannerCadastroComponent } from './cadastro/banner/banner.component';
import { DadosComponent } from './sobre/dados/dados.component';
import { RouterLink, RouterModule, RouterOutlet, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            RouterLink,
            RouterModule,
            MatToolbarModule,
            MatButtonModule,
            MatIconModule,
            DadosComponent,
            BannerComponent,
            BannerCadastroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AT02';
}
