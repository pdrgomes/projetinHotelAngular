import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hospede } from '../model/Hospede.model';

@Injectable({
  providedIn: 'root'
})
export class HospedeService {

hospede: Hospede = new Hospede;

  constructor(private httpClient : HttpClient) { }

  findById(idHospede: number){
    return this.httpClient.get(`http://localhost:8080/HotelWebService/hospede/buscar?id=${idHospede}`);
  }

  findAll(){
    return this.httpClient.get(`http://localhost:8080/HotelWebService/hospede/buscarTodos`);
  }

  create(hospede: Hospede){
    return this.httpClient.post(`http://localhost:8080/HotelWebService/hospede/inserir`,hospede);
  }

  delete(idHospede: number){
    return this.httpClient.delete(`http://localhost:8080/HotelWebService/hospede/delete?id=${idHospede}`)
  }
}
