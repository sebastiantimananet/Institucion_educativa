import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  imports: [CommonModule],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {

  imagenes:string[]=[

    'assets/hosanacarrusel1.jpg',
    'assets/hosanacarrusel2.jpg',
    'assets/hosanacarrusel3.jpg',
  ]

}

