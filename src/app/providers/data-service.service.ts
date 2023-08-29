import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private generoURL: string = 'https://libreria-production-3ebb.up.railway.app/rest/generos/findAll/json';
  private libroURL: string = 'https://libreria-production-3ebb.up.railway.app/rest/libros/findAll/json';

  constructor(private http:HttpClient) { }

  getGeneroResponse() {
    return this.http.get(this.generoURL);
  }

  getLibroResponse() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJhZG1pbiIsInJvbCI6ImFkbWluIiwiaWF0IjoxNjkzMzM4NzE4fQ.Tgej2i1pcHoEbfUQbOKZNTAFKzroztyeRlWp8SOC7ZA' // Reemplaza con tu token de acceso
    });

    return this.http.get(this.libroURL, { headers });
  }
}
