import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Libro } from "../models/libro";

@Injectable({
  providedIn: "root",
})
export class LibroService {
  urlBase: string = "http://localhost:3000/api/";
  constructor(private _http: HttpClient) {}

  getLibrosDestacados(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({}),
      params: new HttpParams({}),
    };
    return this._http.get(this.urlBase + "libro?destacado=true", httpOptions);
  }

  guardarLibro(libro: Libro): Observable<any> {
    return this._http.post(this.urlBase + "libro", libro);
  }
}
