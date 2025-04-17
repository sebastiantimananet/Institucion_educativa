import { Component } from '@angular/core';
import evento from '../../models/Evento';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-evento',
  imports: [CommonModule],
  templateUrl: './evento.component.html',
  styleUrl: './evento.component.css'
})
export class EventoComponent {

  eventos:evento[]=[

    {
      id:1,
      titulo:'Capacitación hacia nuestros docentes',
      descripcion:'capacitando a nuestros docentes en las actividades de aprendizaje',
      fecha:new Date('2025-05-01'),
      img:'assets/hosanacarrusel1.jpg'
    },
    {
      id:2,
      titulo:' Dia Mundial de concentialización del autismo ',
      descripcion:'Descripcion del evento 2',
      fecha:new Date('2025-05-01'),
      img:'assets/hosanacarrusel2.jpg'
    },
    {
      id:3,
      titulo:'Semana de Adaptacion',
      descripcion:'Descripcion del evento 3',
      fecha:new Date('2025-05-01'),
      img:'assets/hosanacarrusel3.jpg'

    }
  ]
  

}
