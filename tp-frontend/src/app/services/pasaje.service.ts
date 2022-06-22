import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pasaje } from "../models/pasaje";

@Injectable({
  providedIn: "root",
})
export class PasajeService {
  urlBase: string = "http://localhost:3000/api/";
  constructor(private _http: HttpClient) {}

  getPasajes(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({}),
      params: new HttpParams({}),
    };
    return this._http.get(this.urlBase + "pasaje", httpOptions);
  }

  getPersonas(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({}),
      params: new HttpParams({}),
    };
    return this._http.get(this.urlBase + "persona", httpOptions);
  }

  guargarPasaje(pasaje: Pasaje): Observable<any> {
    return this._http.post(this.urlBase + "pasaje", pasaje);
  }

  eliminarPasaje(id: string) {
    return this._http.delete(this.urlBase + "pasaje/" + id);
  }

  obtenerPasaje(id: string) {
    return this._http.get(this.urlBase + "pasaje/" + id);
  }

  actualizarPasaje(id: string, body: Pasaje) {
    return this._http.put(this.urlBase + "pasaje/" + id, body);
  }
  filtrarCategoria(categoria: string) {
    return this._http.get(this.urlBase + "pasaje/categoria/" + categoria);
  }
}
