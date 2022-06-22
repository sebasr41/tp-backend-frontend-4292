import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Punto1Component } from "./components/punto1/punto1.component";
import { Punto1crearLibroComponent } from "./components/punto1crear-libro/punto1crear-libro.component";
import { Punto2Component } from "./components/punto2/punto2.component";
import { Punto3Component } from "./components/punto3/punto3.component";
import { Punto3tablaComponent } from "./components/punto3tabla/punto3tabla.component";
import { TransaccionComponent } from "./components/transaccion/transaccion.component";
import { TransacciontablaComponent } from "./components/transacciontabla/transacciontabla.component";

const routes: Routes = [
  { path: "punto1", component: Punto1Component },
  { path: "punto2", component: Punto2Component },
  { path: "punto3", component: Punto3Component },
  { path: "punto3tabla", component: Punto3tablaComponent },
  { path: "punto1crear-libro", component: Punto1crearLibroComponent },
  { path: "punto3/:id", component: Punto3Component },
  { path: "transaccion", component: TransaccionComponent },
  { path: "transacciontabla", component: TransacciontablaComponent },
  { path: "transaccion/:id", component: TransacciontablaComponent },
  { path: "**", pathMatch: "full", redirectTo: "" },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
