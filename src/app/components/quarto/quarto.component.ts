import { Component, OnInit } from '@angular/core';
import { QuartoService } from 'src/app/services/quarto.service';
import { Quarto } from 'src/app/model/quarto.model';

@Component({
  selector: 'app-quarto',
  templateUrl: './quarto.component.html',
  styleUrls: ['./quarto.component.css']
})
export class QuartoComponent implements OnInit {

  selectedId: number;


  quartoArray: [];

  quarto: Quarto = new Quarto();
  quartoBusca: Quarto = new Quarto();
  quartoBuscaTodos: Quarto = new Quarto();
  quartoInserir: Quarto = new Quarto();
  quartoUpdate: Quarto = new Quarto();
  quartoDelete: Quarto = new Quarto();

  constructor(private quartoService: QuartoService) { }

  ngOnInit() {
    this.findAllQuarto();
  }

  findQuarto() {
    this.quartoService.findById(this.selectedId).subscribe((response: Quarto) => {
      this.quartoBusca = response;
    });
  }

  findAllQuarto(){
    this.quartoService.findAll().subscribe((response: []) => {
      this.quartoArray = response;
    })
  }

  deleteQuarto(){
    this.quartoService.delete(this.selectedId).subscribe((response: Quarto) => {
      this.quartoDelete = response;
      this.findAllQuarto();
      // alert(`${this.selectedId} Deletado`)
    })
  }
    createQuarto() {
      console.log("TESTE",this.quartoInserir);
      this.quartoService.create(this.quartoInserir).subscribe((response: Quarto) => {
        this.quartoInserir = response;
        this.findAllQuarto();
      });
    }

    updateQuarto() {
      this.quartoService.create(this.quartoUpdate).subscribe((response: Quarto) => {
        this.quartoUpdate = response;
        this.findAllQuarto();
      });
    }
  
    selectQuarto(quarto: Quarto){
      this.quarto = quarto;
      console.log(this.quarto.numQuarto);   
    }
    
    deleteQuartoId(quartoDelete: Quarto){
      this.selectedId = quartoDelete.idQuarto;
    }
}
