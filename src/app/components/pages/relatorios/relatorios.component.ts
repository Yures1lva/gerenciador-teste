import { Component, OnInit } from '@angular/core';
import { PontosService } from '../../../services/Pontos/pontos.service';
import { Pontos } from '../../../models/Pontos';
import { Colaborador } from '../../../models/Colaboradores';
import { ColaboradorService } from '../../../services/Colaborador/colaborador.service';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrl: './relatorios.component.css'
})
export class RelatoriosComponent implements OnInit {

  Pontos: Pontos[] = []
  Colaboradores: Colaborador[] =[]
  ponto!: Pontos;
  selectUser?: Number
  listPonto: Pontos[] = []
  // listAux: number[] | undefined[] = []

  constructor(
    private pontosService: PontosService, 
    private colaboradorService: ColaboradorService
    ){}

  ngOnInit(): void {

 
    

    this.colaboradorService.getColaboradores().subscribe((items) => {
      const data = items.dados
      this.Colaboradores = data

    })


    this.pontosService.getPontos().subscribe((items) =>{
      const data = items.dados
      this.Pontos = data
      console.log(this.Pontos[9].hEntrada!.toLocaleString("pt-BR",{timeZone: "E. South America Standard Time"}))
    })
  }

filter(){
   this.listPonto = this.Pontos.filter((value)=>{
    value.day
    // console.log(typeof value.hEntrada)

    return value.colaboradorId == this.selectUser
  })

  // this.listPonto.forEach((value) => {
  //   // console.log(typeof value.hEntrada)
  //   this.listAux.push(value.hEntrada?.getDay())

  // })
}



}
