import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Libro } from "src/app/models/libro";
import { LibroService } from "src/app/services/libro.service";

@Component({
  selector: "app-punto1crear-libro",
  templateUrl: "./punto1crear-libro.component.html",
  styleUrls: ["./punto1crear-libro.component.css"],
})
export class Punto1crearLibroComponent implements OnInit {
  libro!: Libro;
  libros!: Array<Libro>;

  constructor(private libroService: LibroService, private roter: Router) {
    // libroService.getLibros().subscribe((res) => {
    //   this.libros = res;
    // });
    this.libro = new Libro();
  }

  ngOnInit(): void {}

  registrarLibro() {
    this.libroService.guardarLibro(this.libro).subscribe((res) => {
      console.log(this.libro);
    });
    this.libro = new Libro();
  }
}
