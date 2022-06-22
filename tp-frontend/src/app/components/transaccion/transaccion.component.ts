import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Transaccion } from "src/app/models/transaccion";
import { TransaccionService } from "src/app/services/transaccion.service";

@Component({
  selector: "app-transaccion",
  templateUrl: "./transaccion.component.html",
  styleUrls: ["./transaccion.component.css"],
})
export class TransaccionComponent implements OnInit {
  accion: string = "new";
  transacciones!: Transaccion[];
  transaccion!: Transaccion;

  constructor(
    private transaccionService: TransaccionService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    transaccionService.getTransacciones().subscribe((res) => {
      this.transacciones = res;
    });
    this.transaccion = new Transaccion();
  }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((params) => {
    //   if (!params["id"]) {
    //     this.accion = "new";
    //   } else {
    //     this.accion = "update";
    //     this.obtenerUnTransaccion(params["id"]);
    //   }
    // });
  }
  cargarTransaccion() {
    this.transaccionService.getTransacciones().subscribe(
      (result) => {},
      (error) => {}
    );
  }
  registrarTransaccion() {
    this.transaccionService
      .convertirMoneda(
        String(this.transaccion.cantidadOrigen),
        this.transaccion.monedaOrigen,
        this.transaccion.monedaDestino
      )
      .subscribe((res) => {
        console.log(res);
        this.transaccion.cantidadDestino = res.result;
        this.transaccionService
          .guardarTransaccion(this.transaccion)
          .subscribe((res) => {
            console.log("res back", res);
          });
      });
    this.transaccion = new Transaccion();
  }
}
