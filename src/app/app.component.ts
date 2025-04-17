import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from "./components/encabezado/encabezado.component";
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { CardsComponent } from './components/cards/cards.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Institucion_educativa';
}
