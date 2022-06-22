import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Libro } from "src/app/models/libro";
import { Pelicula } from "src/app/models/pelicula";
import { LibroService } from "src/app/services/libro.service";

@Component({
  selector: "app-punto1",
  templateUrl: "./punto1.component.html",
  styleUrls: ["./punto1.component.css"],
})
export class Punto1Component implements OnInit {
  libro!: Libro;
  libros: Array<Libro> = [];
  indice: number = 0;

  constructor(private libroService: LibroService, private router: Router) {
    this.libro = new Libro();
    //this.libros = new Array<Libro>();
    //this.libros = [];
  }
  cargarLibros() {
    this.libros = new Array<Libro>();
    this.libroService.getLibrosDestacados().subscribe(
      (result) => {
        this.libros = result;
        console.log(this.libros);
        this.iniciar();
      },
      (error) => {}
    );
  }
  iniciar() {
    this.libro = this.libros[this.indice];
    console.log(this.libro);
  }
  siguiente() {
    this.indice++;
    this.libro = this.libros[this.indice];

    if (this.indice > this.libros.length - 1) {
      this.indice = 0;
      this.libro = this.libros[this.indice];
    }
  }
  anterior() {
    this.indice--;
    if (this.indice < 0) {
      this.indice = this.libros.length - 1;
      this.libro = this.libros[this.indice];
    }
    if (this.indice < this.libros.length) {
      this.libro = this.libros[this.indice];
    }
  }

  ngOnInit(): void {
    this.cargarLibros();
  }
}
