import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quarto } from '../model/quarto.model';

@Injectable({
  providedIn: 'root'
})
export class QuartoService {

quarto: Quarto = new Quarto;

  constructor(private httpClient: HttpClient) { }

  findById(idQuarto: number) {
    return this.httpClient.get(`http://localhost:8080/HotelWebService/quarto/buscar?id=${idQuarto}`);
  }

  findAll(){
    return this.httpClient.get(`http://localhost:8080/HotelWebService/quarto/buscarTodos`);
  }

  create(quartoInserir: Quarto){
    return this.httpClient.post(`http://localhost:8080/HotelWebService/quarto/inserir`,quartoInserir);
  }

  delete(idQuarto: number){
    return this.httpClient.delete(`http://localhost:8080/HotelWebService/quarto/delete?id=${idQuarto}`)
  }
}
