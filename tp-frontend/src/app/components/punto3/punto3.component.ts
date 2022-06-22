import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Pasaje } from "src/app/models/pasaje";
import { Persona } from "src/app/models/persona";
import { PasajeService } from "src/app/services/pasaje.service";

@Component({
  selector: "app-punto3",
  templateUrl: "./punto3.component.html",
  styleUrls: ["./punto3.component.css"],
})
export class Punto3Component implements OnInit {
  // accion: string = 'nuevo';
  tituloform!: string;
  precioFinal!: any;
  value!: number;
  selected!: string;
  precioIngresado!: boolean;
  selectedElegido!: boolean;
  cambiado: boolean = true;
  ninioResumen!: number;
  jubiladoResumen!: number;
  adultoResumen!: number;
  totalResumen!: number;

  personas!: Persona[];
  pasajes!: Pasaje[];
  pasaje!: Pasaje;
  accion: string = "new";
  guardado: boolean = false;

  constructor(
    private pasajeService: PasajeService,
    private roter: Router,
    private activatedRoute: ActivatedRoute
  ) {
    pasajeService.getPersonas().subscribe((res) => {
      this.personas = res;
    });
    this.pasaje = new Pasaje();
  }

  items: any[] = [
    { id: "J", name: "Jubilado" },
    { id: "A", name: "Adulto" },
    { id: "N", name: "Ninio" },
  ];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (!params["id"]) {
        this.accion = "new";
      } else {
        this.accion = "update";
        this.obtenerUnPasaje(params["id"]);
      }
    });
  }
  cargarPasajes() {
    this.pasajeService.getPasajes().subscribe(
      (result) => {},
      (error) => {}
    );
  }

  modificarPrecio() {
    if (this.selected === "J") {
      const descuento1 = this.value * 0.5;
      this.precioFinal = this.value - descuento1;
    }
    if (this.selected === "N") {
      const descuento2 = this.value * 0.25;
      this.precioFinal = this.value - descuento2;
    }
    if (this.selected === "A") {
      this.precioFinal = this.value;
    }
  }
  changePrecio(event: Event) {
    const element = event.target as HTMLInputElement;
    this.value = parseInt(element.value);
    console.log(this.value);
    this.precioIngresado = true;
  }

  selectOption(event: Event) {
    this.selectedElegido = true;
  }
  mostrarPrecio() {
    if (this.selectedElegido && this.precioIngresado) {
      this.modificarPrecio();
      return true;
    } else {
      return false;
    }
  }
  registrarPasaje() {
    this.pasaje.precioPasaje = this.precioFinal;
    this.pasajeService.guargarPasaje(this.pasaje).subscribe((res) => {
      console.log(this.pasaje);
    });
    this.pasaje = new Pasaje();

    setTimeout(() => {
      this.guardado = true;
    }, 2000);
    this.guardado = false;
  }

  obtenerUnPasaje(id: string) {
    this.pasajeService.obtenerPasaje(id).subscribe((res: any) => {
      this.pasaje = res;
    });
  }

  actualizarPasaje() {
    this.pasaje.precioPasaje = this.precioFinal;
    this.pasajeService
      .actualizarPasaje(this.pasaje._id, this.pasaje)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
