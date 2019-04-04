import { Component, OnInit } from '@angular/core';
import { HospedeService} from 'src/app/services/hospede.service'
import { Hospede } from "src/app/model/Hospede.model";

@Component({
  selector: 'app-hospede',
  templateUrl: './hospede.component.html',
  styleUrls: ['./hospede.component.css']
})
export class HospedeComponent implements OnInit {

  selectedId: number;
  selectedFindId: number;
  selectedFindAll: number;
  selectedDelete: number;

  hospedeArray: [];
  hospede: Hospede = new Hospede();
  hospedeBusca: Hospede = new Hospede;
  hospedeBuscaTodos: Hospede = new Hospede;
  hospedeInserir: Hospede = new Hospede;
  hospedeUpdate: Hospede = new Hospede;
  hospedeDelete: Hospede = new Hospede;

  constructor(private hospedeService : HospedeService) { }

  ngOnInit() {
    this.findAllHospede();
  }

   findHospede(){
     this.hospedeService.findById(this.selectedId).subscribe((response: Hospede) => {
       this.hospedeBusca = response;
     })
   }
   
  findAllHospede(){
    this.hospedeService.findAll().subscribe((response: []) => {
      this.hospedeArray = response;
    })
  }

  deleteHospede(){
    this.hospedeService.delete(this.selectedId).subscribe((response: Hospede) => {
      this.hospedeDelete = response
      this.findAllHospede();
    })
  }
    createHospede() {
      console.log("TESTE",this.hospedeInserir);
      this.hospedeService.create(this.hospedeInserir).subscribe((response: Hospede) => {
        this.hospedeInserir = response;
        this.findAllHospede();
      });
    }

    updateHospede() {
      this.hospedeService.create(this.hospedeUpdate).subscribe((response: Hospede) => {
        this.hospedeUpdate = response;
      });
    }

    selectHospede(hospede: Hospede){
      this.hospede = hospede;
      console.log("TESTE", this.hospede);   
    }

    deleteHospedeId(hospedeDelete: Hospede){
      this.selectedId = hospedeDelete.id;
    }
  
  
}
