import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Punto1Component } from "./components/punto1/punto1.component";
import { Punto2Component } from "./components/punto2/punto2.component";
import { FooterComponent } from "./components/layout/footer/footer.component";
import { HeaderComponent } from "./components/layout/header/header.component";
import { Punto3Component } from "./components/punto3/punto3.component";
import { HttpClientModule } from "@angular/common/http";
import { Punto3tablaComponent } from "./components/punto3tabla/punto3tabla.component";
import { Punto1crearLibroComponent } from "./components/punto1crear-libro/punto1crear-libro.component";
import { TransaccionComponent } from './components/transaccion/transaccion.component';
import { TransacciontablaComponent } from './components/transacciontabla/transacciontabla.component';

@NgModule({
  declarations: [
    AppComponent,
    Punto1Component,
    Punto2Component,
    FooterComponent,
    HeaderComponent,
    Punto3Component,
    Punto3tablaComponent,
    Punto1crearLibroComponent,
    TransaccionComponent,
    TransacciontablaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
