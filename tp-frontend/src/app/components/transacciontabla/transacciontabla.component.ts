import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Transaccion } from "src/app/models/transaccion";
import { TransaccionService } from "src/app/services/transaccion.service";

@Component({
  selector: "app-transacciontabla",
  templateUrl: "./transacciontabla.component.html",
  styleUrls: ["./transacciontabla.component.css"],
})
export class TransacciontablaComponent implements OnInit {
  transacciones!: Transaccion[];
  transaccion!: Transaccion;
  constructor(
    private transaccionService: TransaccionService,
    private router: Router
  ) {
    this.transaccion = new Transaccion();
  }
  ngOnInit(): void {
    this.obtenerTransacciones();
  }

  obtenerTransacciones() {
    this.transaccionService.getTransacciones().subscribe((res) => {
      this.transacciones = res;
    });
  }

  filtrar() {
    this.transaccionService
      .filtrarTransacciones(
        this.transaccion.monedaOrigen,
        this.transaccion.monedaDestino
      )
      .subscribe((res: any) => {
        this.transacciones = res;
      });
  }

  // elegirUsuario(user: User): void {}
  editar(id: string) {
    console.log(id);
    this.router.navigate(["transaccion", id]);
  }
}
