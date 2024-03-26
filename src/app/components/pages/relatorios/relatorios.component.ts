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

  constructor(private pontosService: PontosService, private colaboradorService: ColaboradorService){}

  ngOnInit(): void {
    
    this.colaboradorService.getColaboradores().subscribe((items) => {
      const data = items.dados
      this.Colaboradores = data

    })


    this.pontosService.getPontos().subscribe((items) =>{
      const data = items.dados
      this.Pontos = data
      console.log(this.Pontos)
    })
  }

}
