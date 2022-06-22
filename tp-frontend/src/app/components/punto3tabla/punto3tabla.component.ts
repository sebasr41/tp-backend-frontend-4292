import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Pasaje } from "src/app/models/pasaje";
import { PasajeService } from "src/app/services/pasaje.service";

@Component({
  selector: "app-punto3tabla",
  templateUrl: "./punto3tabla.component.html",
  styleUrls: ["./punto3tabla.component.css"],
})
export class Punto3tablaComponent implements OnInit {
  pasaje!: Pasaje;
  pasajes!: Pasaje[];

  constructor(private pasajeService: PasajeService, private router: Router) {
    this.pasaje = new Pasaje();
  }

  ngOnInit(): void {
    this.obtenerPasajes();
  }

  obtenerPasajes() {
    this.pasajeService.getPasajes().subscribe((res) => {
      console.log(res);
      this.pasajes = res;
    });
  }

  eliminar(id: string) {
    this.pasajeService.eliminarPasaje(id).subscribe((res) => {
      console.log(res);
      this.obtenerPasajes();
    });
  }

  // elegirUsuario(user: User): void {}
  editar(id: string) {
    console.log(id);
    this.router.navigate(["punto3", id]);
  }
  filtrar() {
    this.pasajeService
      .filtrarCategoria(this.pasaje.categoriaPasajero)
      .subscribe((res: any) => {
        this.pasajes = res;
      });
  }
}
