import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private generoURL: string = 'http://localhost:3000/rest/generos/findAll/json';
  private libroURL: string = 'http://localhost:3000/rest/libros/findAll/json';

  constructor(private http:HttpClient) { }

  getGeneroResponse() {
    return this.http.get(this.generoURL);
  }

  getLibroResponse() {
    return this.http.get(this.libroURL);
  }
}
