import { Component, OnInit } from '@angular/core';
import { ServicoService } from 'src/app/services/servico.service';
import { Servico } from 'src/app/model/servico.model';


@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {

  
  selectedId: number;
  servico: Servico = new Servico;
  servicoArray: [];
  servicoBuscar: Servico = new Servico;
  servicoBuscaTodos:Servico = new Servico;
  servicoInserir: Servico = new Servico;
  servicoUpdate: Servico = new Servico;
  servicoDelete: Servico = new Servico;
  servicoSelected: Servico = new Servico;
  

  constructor(private servicoService: ServicoService) { }

  ngOnInit() {
    this.findAllServico();
  }

  findServico() {
    this.servicoService.findById(this.selectedId).subscribe((response: Servico) => {
      this.servicoBuscar = response;
    });
  }

  findAllServico() {
    this.servicoService.findAll().subscribe((response: []) => {
      this.servicoArray = response;
    });
  }

  
    createServico() {
      this.servicoService.create(this.servicoInserir).subscribe((response: Servico) => {
        this.servicoInserir = response;
        console.log("teste", this.servicoInserir)
        this.findAllServico();
      });
    }

    updateServico() {
      this.servicoService.create(this.servicoInserir).subscribe((response: Servico) => {
        this.servicoInserir = response;
        this.findAllServico();
      });
    }
    deleteServico(){
      this.servicoService.delete(this.selectedId).subscribe((response: Servico) => {
        this.servicoDelete = response
        this.findAllServico();
      })
    }

    deleteServicoId(servicoDelete: Servico){
      this.selectedId = servicoDelete.id;
    }
  

    selectServico(servico: Servico){
      this.servico = servico;
      console.log(this.servico.nomeServico);   
    }
    
    

}
