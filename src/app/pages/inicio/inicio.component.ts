import { Component } from '@angular/core';
import { EncabezadoComponent } from '../../components/encabezado/encabezado.component';
import { CarruselComponent } from '../../components/carrusel/carrusel.component';
import { EventoComponent } from '../../components/evento/evento.component';
import { CardsComponent } from '../../components/cards/cards.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-inicio',
  imports: [EncabezadoComponent,CarruselComponent,EventoComponent,CardsComponent,FooterComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
