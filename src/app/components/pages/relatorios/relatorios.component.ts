import { Component, OnInit } from '@angular/core';
import { PontosService } from '../../../services/Pontos/pontos.service';
import { Pontos } from '../../../models/Pontos';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrl: './relatorios.component.css'
})
export class RelatoriosComponent implements OnInit {

  Pontos: Pontos[] = []

  constructor(private pontosService: PontosService){}

  ngOnInit(): void {
    this.pontosService.getPontos().subscribe((items) =>{
      const data = items.dados
      this.Pontos = data
      console.log(this.Pontos)
    })
  }

}
