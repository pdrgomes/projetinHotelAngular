import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servico } from 'src/app/model/servico.model'

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  servico: Servico = new Servico;
  constructor(private httpClient : HttpClient) { }

  findById(idServico: number){
    return this.httpClient.get(`http://localhost:8080/HotelWebService/servico/buscar?id=${idServico}`);
  }

  findAll(){
    return this.httpClient.get(`http://localhost:8080/HotelWebService/servico/buscarTodos`);
  }

  create(servicoInserir: Servico){
    return this.httpClient.post(`http://localhost:8080/HotelWebService/servico/inserir`,servicoInserir);
  }

  delete(idServico: number){
    return this.httpClient.delete(`http://localhost:8080/HotelWebService/servico/delete?id=${idServico}`)
  }
}
