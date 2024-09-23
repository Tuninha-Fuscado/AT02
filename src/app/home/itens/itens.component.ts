import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-itens',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatIconModule],
  templateUrl: './itens.component.html',
  styleUrl: './itens.component.css'
})
export class ItensComponent {

}
