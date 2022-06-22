import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { Transaccion } from "../models/transaccion";

@Injectable({
  providedIn: "root",
})
export class TransaccionService {
  urlBase: string = "http://localhost:3000/api/";
  constructor(private _http: HttpClient) {}

  public convertirMoneda(
    from_value: string,
    from_type: string,
    to_type: string
  ): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Host":
          "community-neutrino-currency-conversion.p.rapidapi.com",
        "X-RapidAPI-Key": "449e397401msh9060646fa3d2a5ap133f7bjsna3651925983b",
      }),
    };
    const body = new HttpParams()
      .set("from-value", from_value)
      .set("from-type", from_type)
      .set("to-type", to_type);
    return this._http.post(
      "https://community-neutrino-currency-conversion.p.rapidapi.com/convert",
      body,
      httpOptions
    );
  }

  getTransacciones(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({}),
      params: new HttpParams({}),
    };
    return this._http.get(this.urlBase + "agencia", httpOptions);
  }

  guardarTransaccion(transaccion: Transaccion): Observable<any> {
    return this._http.post(this.urlBase + "agencia", transaccion);
  }

  filtrarTransacciones(origen: string, destino: string) {
    return this._http.get(
      this.urlBase + "agencia/origen/" + origen + "/destino/" + destino
    );
  }
}
