import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css'],
})
export class Punto2Component implements OnInit {
  title: string = 'Paises';
  peliculas: string[] = [
    'argentina',
    'brasil',
    'uruguay',
    'mexico',
    'españa',
    'venezuela',
    'paraguay',
    'chile',
    'bolivia',
    'canada',
    'panama',
    'italia',
    'francia',
  ];
  letras: string[] = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  bloquearTeclado!: boolean;
  intentarDeNuevo!: boolean;
  resultado!: boolean;
  ban!: boolean;
  vidas: number = 4;
  palabraSeleccionada!: string;
  palabraSeleccionadaArreglo: string[] = [];
  palabraArreglo: string[] = [];
  numeroImg: number = 0;

  imagenes: string[] = [
    'assets/game/ahorcadoinicial.jpg',
    'assets/game/ahorcadounfallo.jpg',
    'assets/game/ahorcadodosfallos.jpg',
    'assets/game/ahorcadotresfallos.jpg',
    'assets/game/ahorcadocompleto.jpg',
  ];

  constructor() {
    this.generarPalabra();
  }

  cerrarModal() {
    this.vidas = 4;
    this.intentarDeNuevo = true;
    this.bloquearTeclado = true;
    this.palabraSeleccionadaArreglo = [];
  }

  generarPalabra() {
    this.palabraSeleccionada =
      this.peliculas[
        Math.floor(Math.random() * (this.peliculas.length - 0) + 0)
      ];
    this.palabraArreglo = Array.from(this.palabraSeleccionada);

    for (let index = 0; index < this.palabraSeleccionada.length; index++) {
      this.palabraSeleccionadaArreglo[index] = '_';
    }
  }

  intentar(letra: string) {
    let encontrado!: any;
    encontrado = this.palabraArreglo.find((element) => element == letra);

    if (encontrado === undefined) {
      this.vidas--;
      this.numeroImg++;
    }

    for (let index = 0; index < this.palabraSeleccionada.length; index++) {
      if (this.palabraArreglo[index] === letra) {
        this.palabraSeleccionadaArreglo[index] = letra;
      }
    }
  }

  ganaste(): boolean {
    let palabraDelJuego: string = this.palabraSeleccionadaArreglo.toString();
    let original: string = this.palabraArreglo.toString();
    if (original === palabraDelJuego) {
      return true;
    } else {
      return false;
    }
  }
  reiniciarJuego() {
    this.intentarDeNuevo = false;
    this.generarPalabra();
    this.bloquearTeclado = false;
    this.numeroImg = 0;
  }
  ngOnInit(): void {}
}
